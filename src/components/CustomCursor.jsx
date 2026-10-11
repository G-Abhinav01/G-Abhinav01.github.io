import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ringPos = useRef({ x: -100, y: -100 });
  const ringRef = useRef(null);

  useEffect(() => {
    // Check if device has mouse/fine pointer
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    if (!isPointerFine) return;

    let animId;

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target or ancestor is interactive
      const target = e.target;
      const isInteractive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive') ||
        target.closest('.tilt-card-wrapper') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA';

      setIsHovered(!!isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth inertia follow for ring
    const followCursor = () => {
      animId = requestAnimationFrame(followCursor);
      ringPos.current.x += (pos.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (pos.y - ringPos.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
    };
    animId = requestAnimationFrame(followCursor);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [pos.x, pos.y, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Center Dot */}
      <div
        className="cursor-dot"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
        aria-hidden="true"
      />
      {/* Lagging Ambient Ring */}
      <div
        ref={ringRef}
        className={`cursor-ring ${isHovered ? 'active' : ''}`}
        aria-hidden="true"
      />
    </>
  );
}
