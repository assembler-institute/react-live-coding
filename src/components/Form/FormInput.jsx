import useForm from "../../hooks/useForm";

const FormInput = () => {
  const { username, email, password, estudios, onInputChange } = useForm();
  //   {
  //   username: "",
  //   email: "",
  //   password: "",
  //   estudios: "",
  // });

  // const { username, email, password, estudios } = formState;

  return (
    <>
      <h2>Handle a Form</h2>
      <input
        type="text"
        className="form-control"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <input
        type="estudios"
        className="form-control"
        name="estudios"
        value={estudios}
        onChange={onInputChange}
      />
    </>
  );
};

export default FormInput;
