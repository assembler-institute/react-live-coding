import { useEffect, useReducer } from "react";
import { Form, BooksList } from "../components";
import { initialArg, booksReducer } from "./actions";

const init = () => {
  return JSON.parse(localStorage.getItem("books")) || initialArg;
};

const BookReducer = () => {
  const [books, dispatch] = useReducer(booksReducer, initialArg, init);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleNewBook = (book) => {
    const action = {
      type: "add_book",
      payload: book,
    };
    dispatch(action);
  };

  const handleRemove = (id) => {
    dispatch({
      type: "delete_book",
      payload: id,
    });
  };

  return (
    <>
      <h1 className="d-flex justify-content-lg-center">
        Harry Potter Books 🪄🧙🏻🧌
      </h1>
      <div className="row">
        <div className="col-7">
          <h3>List of books</h3>
          <BooksList initialArg={books} onDeleteBook={handleRemove} />
        </div>
        <div className="col-5">
          <Form addNewBook={handleNewBook} />
        </div>
      </div>
    </>
  );
};

export default BookReducer;
