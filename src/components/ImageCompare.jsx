import { useState, useRef, useCallback, useEffect } from "react";
import { BsArrowsCollapseVertical } from "react-icons/bs";

const ImageCompare = ({ assets }) => {
  const [slider, setSlider] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  const getPercent = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    return clamp(((clientX - rect.left) / rect.width) * 100, 0, 100);
  }, []);

  const onMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setSlider(getPercent(e.clientX));
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDragging) return;
      setSlider(getPercent(e.clientX));
    };
    const onMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, getPercent]);

  const onTouchStart = (e) => {
    setIsDragging(true);
    setSlider(getPercent(e.touches[0].clientX));
  };

  useEffect(() => {
    const onTouchMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      setSlider(getPercent(e.touches[0].clientX));
    };
    const onTouchEnd = () => setIsDragging(false);

    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDragging, getPercent]);

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 680,
        margin: "0 auto",
        borderRadius: 20,
        overflow: "hidden",
        userSelect: "none",
        cursor: isDragging ? "grabbing" : "col-resize",
        boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
        background: "#111",
      }}
    >
      <img
        src={assets.image_w_bg}
        alt="Before"
        draggable={false}
        style={{ display: "block", width: "100%", pointerEvents: "none" }}
      />

      <img
        src={assets.image_wo_bg}
        alt="After"
        draggable={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "none",
          clipPath: `inset(0 ${100 - slider}% 0 0)`,
          // smooth only when NOT dragging so it snaps during drag
          transition: isDragging ? "none" : "clip-path 0.05s ease",
        }}
      />

      {/* Divider line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${slider}%`,
          width: 2,
          background: "rgba(255,255,255,0.9)",
          boxShadow: "0 0 8px rgba(0,0,0,0.5)",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />

      {/* Drag handle */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: `${slider}%`,
          transform: "translate(-50%, -50%)",
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: "white",
          boxShadow: isDragging
            ? "0 0 0 4px rgba(255,255,255,0.5), 0 4px 20px rgba(0,0,0,0.4)"
            : "0 2px 12px rgba(0,0,0,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: isDragging ? "grabbing" : "grab",
          transition: isDragging ? "none" : "box-shadow 0.2s",
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <BsArrowsCollapseVertical />
      </div>

      <span
        style={{
          position: "absolute",
          top: 14,
          left: 14,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(6px)",
          color: "#fff",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "4px 10px",
          borderRadius: 999,
          pointerEvents: "none",
          opacity: slider < 15 ? 0 : 1,
          transition: "opacity 0.2s",
        }}
      >
        Before
      </span>
      <span
        style={{
          position: "absolute",
          top: 14,
          right: 14,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(6px)",
          color: "#fff",
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "4px 10px",
          borderRadius: 999,
          pointerEvents: "none",
          opacity: slider > 85 ? 0 : 1,
          transition: "opacity 0.2s",
        }}
      >
        After
      </span>
    </div>
  );
};

export default ImageCompare;
