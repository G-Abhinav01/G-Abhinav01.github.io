import { useState, useRef } from 'react';

export default function TiltCard({
  children,
  className = '',
  maxTilt = 12,
  perspective = 1000,
  scale = 1.02,
  glare = true,
  onClick,
  style = {},
}) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`,
      transition: 'transform 0.08s ease-out',
    });

    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.18,
      });
    }
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    });
    if (glare) {
      setGlarePos((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        position: 'relative',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        ...style,
        ...tiltStyle,
      }}
    >
      {children}
      {glare && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            zIndex: 10,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(0, 242, 254, ${glarePos.opacity}), transparent 60%)`,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
    </div>
  );
}
