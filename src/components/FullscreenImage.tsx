import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  alt?: string;
  onClose?: () => void;
}

export default function FullscreenImage({ src, alt = "", onClose }: Props) {
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [panning, setPanning] = useState(false);
  const startRef = useRef<{x:number,y:number} | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, [src]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose?.();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function clamp(v:number, a=0.5, b=6) { return Math.max(a, Math.min(b, v)); }

  function handleWheel(e: WheelEvent) {
    e.preventDefault();
    const delta = -e.deltaY / 400; // smooth
    setScale(s => {
      const next = clamp(s + delta, 1, 6);
      return next;
    });
  }

  function onMouseDown(e: React.MouseEvent) {
    if (scale <= 1) return;
    setPanning(true);
    startRef.current = { x: e.clientX, y: e.clientY };
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!panning || !startRef.current) return;
    const dx = e.clientX - startRef.current.x;
    const dy = e.clientY - startRef.current.y;
    startRef.current = { x: e.clientX, y: e.clientY };
    setTranslate(t => ({ x: t.x + dx, y: t.y + dy }));
  }

  function onMouseUp() {
    setPanning(false);
    startRef.current = null;
  }

  function onDoubleClick() {
    if (scale > 1) {
      setScale(1);
      setTranslate({ x: 0, y: 0 });
    } else {
      setScale(2.5);
    }
  }

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const wheel = (e: Event) => handleWheel(e as WheelEvent);
    node.addEventListener("wheel", wheel, { passive: false });
    return () => node.removeEventListener("wheel", wheel as EventListener);
  }, [containerRef.current]);

  if (!src) return null;

  return (
    <div
      ref={containerRef}
      onClick={(e) => { if (e.target === containerRef.current) onClose?.(); }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
    >
      <div
        onDoubleClick={onDoubleClick}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        style={{ touchAction: "none" }}
        className="max-w-full max-h-full overflow-hidden"
      >
        <img
          src={src}
          alt={alt}
          className="block"
          style={{
            transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
            transformOrigin: "center center",
            maxWidth: "none",
            maxHeight: "none",
          }}
          draggable={false}
        />
      </div>
    </div>
  );
}
