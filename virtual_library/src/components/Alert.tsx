import React, { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  alert: boolean;
  onClose: () => void;
}

const Alert = ({ children, alert, onClose }: AlertProps) => {
  return (
    <>
      <div
        className={`alert alert-warning alert-dismissible fade ${
          alert === true && "show"
        }`}
        role="alert"
      >
        <strong>{children}</strong>
        <button
          onClick={() => {
            onClose();
          }}
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default Alert;
