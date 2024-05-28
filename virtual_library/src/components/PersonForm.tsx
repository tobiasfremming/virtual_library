import React, { useState } from "react";

const PersonForm = () => {
  // Better to use ref, so you dont have tu update all the time.
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };

  const [person, setPerson] = useState<{
    name: string;
    age: string | number | readonly string[] | undefined;
  }>({
    name: "",
    age: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!person.name || !person.age) {
      return;
    }
    const name = person.name;
    const age = person.age;
    person.name = name;
    person.age = age;
    console.log(person);
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
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
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        ></input>
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default PersonForm;
