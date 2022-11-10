import { useState } from "react";

const Form = ({ addNewBook }) => {
  const [formState, setFormState] = useState({
    id: "",
    title: "",
    year: "",
  });

  const { id, title, year } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (id === null || title === null || year === null) {
      return;
    }

    const newBook = {
      id,
      title,
      year,
    };

    // add the book to the list
    addNewBook(newBook);

    setFormState({
      id: "",
      title: "",
      year: "",
    });
  };

  return (
    <>
      <h3>Form</h3>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          className="form-control"
          name="id"
          value={id}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="form-control"
          name="title"
          value={title}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="form-control"
          name="year"
          value={year}
          onChange={onInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-2">
          Sumbit
        </button>
      </form>
    </>
  );
};

export default Form;
