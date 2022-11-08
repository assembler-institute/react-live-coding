import React, { useEffect, useState } from "react";

const FormInput = () => {
  const [formState, setFormState] = useState({
    username: "Emily Herrera",
    email: "emilyTopDeveloper@assembler.com",
  });

  // console.log(formState);
  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // console.log(name, value);
    setFormState({
      // access name property of target with target.name
      ...formState,
      [name]: value, // propiedad computada de un objeto es una función que devuelve el valor de la propiedad/valor de una key
    });
  };

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
      {username === "Alejandro" && <Message />}
      <input
        type="email"
        className="form-control"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {email === "alejandro@gmail.com" && <Message />}
    </>
  );
};

const Message = () => {
  // return "User already exists";

  useEffect(() => {
    // Fuga de memoria
    console.log("mounted");

    const onMouseOver = ({ x, y }) => {
      const coords = { x, y };
      console.log(x, y);
    };
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mouseover", onMouseOver);
      console.log("unmounted");
    };
  }, []);
};

export default FormInput;
