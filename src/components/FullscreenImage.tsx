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
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // touch pinch
  const pinchRef = useRef<{ distance: number; startScale: number } | null>(null);
  const lastTapRef = useRef<number>(0);
  const movedRef = useRef(false);

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

  function clamp(v: number, a = 0.5, b = 6) {
    return Math.max(a, Math.min(b, v));
  }

  function handleWheel(e: WheelEvent) {
    e.preventDefault();
    const delta = -e.deltaY / 400; // smooth
    setScale((s) => {
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
    setTranslate((t) => ({ x: t.x + dx, y: t.y + dy }));
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

  // touch handlers
  function getDistance(touches: TouchList) {
    const a = touches[0];
    const b = touches[1];
    const dx = a.clientX - b.clientX;
    const dy = a.clientY - b.clientY;
    return Math.hypot(dx, dy);
  }

  function onTouchStart(e: React.TouchEvent) {
    movedRef.current = false;
    if (e.touches.length === 2) {
      pinchRef.current = { distance: getDistance(e.touches), startScale: scale };
    } else if (e.touches.length === 1) {
      startRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }

  function onTouchMove(e: React.TouchEvent) {
    if (e.touches.length === 2 && pinchRef.current) {
      const d = getDistance(e.touches);
      const ratio = d / pinchRef.current.distance;
      const next = clamp(pinchRef.current.startScale * ratio, 1, 6);
      setScale(next);
      movedRef.current = true;
      e.preventDefault();
    } else if (e.touches.length === 1 && startRef.current && scale > 1) {
      const dx = e.touches[0].clientX - startRef.current.x;
      const dy = e.touches[0].clientY - startRef.current.y;
      startRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      setTranslate((t) => ({ x: t.x + dx, y: t.y + dy }));
      movedRef.current = true;
      e.preventDefault();
    }
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (pinchRef.current && e.touches.length < 2) {
      pinchRef.current = null;
    }
    if (e.touches.length === 0) {
      // tap detection
      const now = Date.now();
      const delta = now - lastTapRef.current;
      if (!movedRef.current && delta < 300) {
        // double-tap: toggle zoom
        if (scale > 1) {
          setScale(1);
          setTranslate({ x: 0, y: 0 });
        } else {
          setScale(2.5);
        }
        lastTapRef.current = 0;
      } else if (!movedRef.current && delta >= 300) {
        // single tap: close
        // set lastTap and wait for possible double tap
        lastTapRef.current = now;
        // schedule single-tap close if no double-tap
        setTimeout(() => {
          if (Date.now() - lastTapRef.current >= 300) {
            // treat as single tap
            onClose?.();
            lastTapRef.current = 0;
          }
        }, 320);
      }
      startRef.current = null;
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

  // when not zoomed, allow scrolling the page/container; when zoomed, block native scroll
  const containerOverflow = scale > 1 ? "hidden" : "auto";

  return (
    <div
      ref={containerRef}
      onClick={(e) => {
        // clicks on backdrop close
        if (e.target === containerRef.current) onClose?.();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-0"
      style={{ overflow: containerOverflow }}
    >
      <div
        onDoubleClick={onDoubleClick}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="w-full h-full flex items-center justify-center"
        style={{ touchAction: "none" }}
      >
        <img
          src={src}
          alt={alt}
          className="block max-w-none max-h-none"
          style={{
            transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
            transformOrigin: "center center",
            userSelect: "none",
            maxWidth: "none",
            maxHeight: "none",
            width: "auto",
            height: "auto",
            maxHeight: "100%",
          }}
          draggable={false}
          onClick={(e) => {
            // when user clicks the image (not drag), toggle close
            if (!movedRef.current) {
              onClose?.();
            }
            e.stopPropagation();
          }}
        />
      </div>
    </div>
  );
}
