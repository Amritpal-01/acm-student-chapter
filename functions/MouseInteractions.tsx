"use client";
import React, { useRef } from "react";

type Props = {
  children: React.ReactNode;
  initialState?: {
    x: number;
    y: number;
  };
  rotationFactor?: number;
};

const MouseInteractions = ({ children, initialState, rotationFactor }: Props) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // store target rotation
  const rotation = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const animate = () => {
    const card = cardRef.current;
    if (!card) return;

    // smooth interpolation (lerp)
    current.current.x += (rotation.current.x - current.current.x) * 0.1;
    current.current.y += (rotation.current.y - current.current.y) * 0.1;

    card.style.transform = `
      rotateX(${current.current.x}deg)
      rotateY(${current.current.y}deg)
      scale(1.05)
    `;

    requestAnimationFrame(animate);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotation.current.x = (-(y - centerY) / 15) * getRotationFactor();
    rotation.current.y = ((x - centerX) / 15) * getRotationFactor();
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      returnToBasePosition();
    }, 100);
  };

  const getRotationFactor = () => {
    return (rotationFactor || 1);
  }

  const returnToBasePosition = () => {
    if (initialState) {
      rotation.current.x = initialState.x;
      rotation.current.y = initialState.y;
    } else {
      rotation.current.x = 10;
      rotation.current.y = -10;
    }
  };

  // start animation loop once
  React.useEffect(() => {
    returnToBasePosition();
    animate();
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default MouseInteractions;
