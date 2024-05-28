import React, { useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!nameRef.current || !ageRef.current) {
      return;
    }
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    console.log(name, age);
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          ref={nameRef}
          id="name"
          type="text"
          className="form-control"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          ref={ageRef}
          id="age"
          type="number"
          className="form-control"
        ></input>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
