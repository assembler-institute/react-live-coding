import React, { useState } from "react";

const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value, // propiedad computada
    });
  };
  return {
    formState,
    onInputChange,
  };
};

export default useForm;
