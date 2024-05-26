import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className="btn btn-secondary">
      {text}
    </button>
  );
};

export default Button;
