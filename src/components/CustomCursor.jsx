import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hoverText, setHoverText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const lensPos = useRef({ x: -100, y: -100 });
  const lensRef = useRef(null);

  useEffect(() => {
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    if (!isPointerFine) return;

    let animId;

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const interactiveEl = target.closest('[data-cursor]') || target.closest('a') || target.closest('button');

      if (interactiveEl) {
        const customAction = interactiveEl.getAttribute('data-cursor') || 'OPEN';
        setHoverText(customAction);
      } else {
        setHoverText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    const followCursor = () => {
      animId = requestAnimationFrame(followCursor);
      lensPos.current.x += (pos.x - lensPos.current.x) * 0.15;
      lensPos.current.y += (pos.y - lensPos.current.y) * 0.15;

      if (lensRef.current) {
        lensRef.current.style.transform = `translate3d(${lensPos.current.x}px, ${lensPos.current.y}px, 0) translate(-50%, -50%)`;
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
      <div
        className="kinetic-cursor-dot"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
        aria-hidden="true"
      />
      <div
        ref={lensRef}
        className={`kinetic-cursor-lens ${hoverText ? 'hover-state' : ''}`}
        aria-hidden="true"
      >
        {hoverText && <span>{hoverText}</span>}
      </div>
    </>
  );
}
