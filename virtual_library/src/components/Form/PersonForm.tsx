import { useForm } from "react-hook-form";

const PersonForm = () => {
  // Better to use ref, so you dont have tu update all the time.
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };

  // const [person, setPerson] = useState<{
  //   name: string;
  //   age: string | number | readonly string[] | undefined;
  // }>({
  //   name: "",
  //   age: "",
  // });

  const { register } = useForm();

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   if (!person.name || !person.age) {
  //     return;
  //   }
  //   const name = person.name;
  //   const age = person.age;
  //   person.name = name;
  //   person.age = age;
  //   console.log(person);
  // };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
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
          {...register("age")}
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
