import React from "react";
import "./Genoms.css";

interface Props {
  name: string;
}

const Male = ({ name }: Props) => {
  return (
    <>
      <div id={name} className="square"></div>
      <p>{name}</p>
    </>
  );
};

export default Male;
