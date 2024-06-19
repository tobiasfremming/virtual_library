import React from "react";
import "./Genoms.css";

interface Props {
  name: string;
}

const pet = ({ name }: Props) => {
  return (
    <>
      <div className="square rotate"></div>
      <p>{name}</p>
    </>
  );
};

export default pet;
