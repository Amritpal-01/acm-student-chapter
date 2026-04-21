import React from "react";

interface TertiaryButtonProps {
  text: string;
}

const TertiaryButton: React.FC<TertiaryButtonProps> = ({ text }) => {
  return (
    <div
      className="text-(--text-primary) font-bold text-sm px-5 py-2 rounded-sm render-animation"
    >
      {text.toUpperCase()}
    </div>
  );
};

export default TertiaryButton;
