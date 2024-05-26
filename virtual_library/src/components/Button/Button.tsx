import React from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className="button hover">
      {text}
    </button>
  );
};

export default Button;
