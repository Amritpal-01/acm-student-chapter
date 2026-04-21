"use client";
import React, { useEffect, useState } from "react";

export interface AnimateTextProps {
  text: string;
  speed: number;
  delay?: number;
}
export interface AnimateTextArrayProps {
  array: string[];
  speed: number;
  delay?: number;
}

export interface AnimateWordsProps {
  StringProp: React.FC<AnimateTextProps>;
  ArrayOfStringProps: React.FC<AnimateTextArrayProps>;
}

export const TextTypingAnimation: React.FC<AnimateTextProps> = ({
  speed,
  text,
  delay,
}) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [renderDelay, setRenderDelay] = useState<number>(delay || 0);
  const [isDelayFinished, setIsDelayFinished] = useState<boolean>(false);

  const isTyping = displayText.length < text.length;
  const showCursor = isTyping && isDelayFinished;

  useEffect(() => {
    const animate = () => {
      if (text[displayText.length] == undefined) return;
      setTimeout(() => {
        setIsDelayFinished(true);

        if (text[displayText.length] == undefined) return;
        setDisplayText((prev) => prev + text[prev.length]);
      }, speed + renderDelay);
      setRenderDelay(0);
    };
    animate();
  }, [displayText, text, speed]);

  return (
    <span>
      <span id="text">{displayText}</span>
      {showCursor ? (
        <span className="text-(--accent-tertiary) animate-ping">|</span>
      ) : (
        <span>&zwnj;</span>
      )}
    </span>
  );
};

export const GroupTextTypingAnimation: React.FC<AnimateTextArrayProps> = ({
  array,
  speed,
  delay,
}) => {
  return array.map((str: string, idx: number) => {
    let prevWordLen: number = idx == 0 ? 0 : array[idx - 1].length;

    return (
      <h1 key={idx}>
        <AnimateWords.StringProp
          speed={speed}
          text={str}
          delay={prevWordLen * idx * speed}
        />
      </h1>
    );
  });
};

const AnimateWords: AnimateWordsProps = {
  StringProp: TextTypingAnimation,
  ArrayOfStringProps: GroupTextTypingAnimation,
};

export default AnimateWords;
