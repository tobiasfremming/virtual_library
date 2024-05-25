import React, { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return (
    <>
      <div className="alert alert-success" role="alert">
        {children}
      </div>
    </>
  );
};

export default Alert;
