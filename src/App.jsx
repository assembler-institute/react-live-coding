import { useForm } from "react-hook-form";
import Header from "./ui/Header/Header";


let renderedCount = 0;
export const App = () => {
  const { register, formState: { errors, dirtyFields, touchedFields, isSubmitted }, reset, handleSubmit, watch } = useForm({
    defaultValues: {
      /* firstName: 'Juan Carlos',
      hobbies: 'Cars',
      favouriteSeries: 'Patata' */
    }
  });
  const onSubmit = data => console.log(data);
  renderedCount++;

  const watchFirstName = watch('firstName')
  /*   console.log('Touch', touchedFields);
    console.log('Dirty', dirtyFields);
    console.log('Submitted', isSubmitted);
   */  /* console.log('Error', errors); */
  return (
    <>
      <Header renderedCount={renderedCount} />
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input {...register("firstName", {
          required: true, minLength: {
            value: 4,
            message: 'Minimum length is 4'
          }
        })} placeholder="First name" />
        <p>{watchFirstName}</p>
        {errors?.firstName && <p>{errors.firstName?.message}</p>}
        <input {...register("hobbies", { required: true })} placeholder="i.e. coding every day 🤩" />
        <input {...register("favouriteSeries")} placeholder="Breaking bad" />
        <button type="submit" onClick={() => reset({
          firstName: 'Juan Carlos',
          hobbies: 'Cars',
          favouriteSeries: 'Patata'
        })}>Submit</button>
      </form>
    </>
  );
}