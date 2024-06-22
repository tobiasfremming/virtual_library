import React from "react";
import "./Genoms.css";

interface Props {
  name: string;
}
const Preggo = ({ name }: Props) => {
  return (
    <>
      <div className="triangle">
        <div className="inner-triangle"></div>
      </div>
      <p>{name}</p>
    </>
  );
};

export default Preggo;
