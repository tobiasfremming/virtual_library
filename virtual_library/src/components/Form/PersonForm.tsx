import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3),
  age: z.number().min(18),
});

type FormData = z.infer<typeof schema>;

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   console.log("submitted");
  // };
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />

        {errors.name && <p className="text-danger">{errors.name.message}</p>}
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
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default PersonForm;
