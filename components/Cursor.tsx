"use client";
import React, { useEffect, useState } from "react";
import { getDeviceType } from "@/constants/getFunctions";

const Cursor: React.FC = () => {
  const [visibility, setVisinility] = useState<boolean>(false);
  const [deviceType, setDeviceType] = useState<string>(getDeviceType());
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
      setVisinility(true);
    });
  }, []);

  return (
    <div
      style={{
        left: `${cursorLocation.x}px`,
        top: `${cursorLocation.y}px`,
      }}
      className={`z-50 cursor-default absolute rotate-45 text-3xl text-(--accent-primary) ${(!visibility && deviceType == "Desktop") ? "hidden" : ""}`}
    >
      {"</"}
    </div>
  );
};

export default Cursor;