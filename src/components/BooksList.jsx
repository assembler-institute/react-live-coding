const BooksList = ({ initialArg, onDeleteBook }) => {
  return (
    <>
      <ul className="list-group">
        {(initialArg &&
          initialArg?.map(({ id, title, year }) => (
            <li
              key={id}
              className="list-group-item d-flex justify-content-between"
            >
              <span className="align-center">{year}</span>
              <span className="align-center">{title}</span>
              <button
                className="btn btn-danger w-25 h-25"
                onClick={() => onDeleteBook(id)}
              >
                Delete
              </button>
            </li>
          ))) ||
          "No items found"}
      </ul>
    </>
  );
};

export default BooksList;
