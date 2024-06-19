import React from "react";
import "./Genoms.css";

interface Props {
  name: string;
}

const Unknown = ({ name }: Props) => {
  return (
    <>
      <div className="square question-mark">?</div>
      <p>{name}</p>
    </>
  );
};

export default Unknown;
