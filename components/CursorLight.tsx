"use client";
import React, { useEffect, useState } from "react";

const CursorLight: React.FC = () => {
  const [cursorLocation, setCursorLocation] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setCursorLocation({
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

  return (
    <div className="-z-10 absolute w-full h-full">
      <div className="relative w-full h-full">
        {/* 🔵 Glow (behind) */}
        <div
          style={{
            left: `${cursorLocation.x}px`,
            top: `${cursorLocation.y}px`,
          }}
          className="absolute z-0 w-20 h-20 rounded-full bg-(--accent-tertiary) -translate-x-1/2 -translate-y-1/2 blur-2xl"
        />

        {/* 🔳 Grid (on top) */}
        <div
          className="absolute z-10 w-full h-full bg-[radial-gradient(transparent_2px_2px,var(--background-primary)_1px)] bg-size-[30px_30px]"
        />
      </div>
    </div>
  );
};

export default CursorLight;
