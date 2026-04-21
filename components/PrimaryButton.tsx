import React from "react";

interface PrimaryButtonProps {
  text: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text }) => {
  return (
    <div
      className="scale-on-hover bg-(--button-background-primary) text-(--button-text-primary) font-semibold text-sm px-5 py-2 rounded-sm render-animation"
    >
      {text.toUpperCase()}
    </div>
  );
};

export default PrimaryButton;
