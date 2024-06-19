import React from "react";
import "./Genoms.css";

interface Props {
  name: string;
}

const Female = ({ name }: Props) => {
  return (
    <>
      <div className="circle"></div>
      <p>{name}</p>
    </>
  );
};

export default Female;
