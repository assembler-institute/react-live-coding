import React, { useState, useEffect } from "react";

const AssignId = () => {
  const [state, setState] = useState({
    name: "Emily",
    surname: "Herrera",
  });

  const asignId = () => {
    setState((prevState) => {
      console.log(prevState);

      return {
        ...prevState,
        id: 1,
      };
    });
  };

  useEffect(() => {
    console.log("componentDidMount");
  }, [state]);

  return (
    <>
      <h2>AssignId</h2>
      <p>{JSON.stringify(state)}</p>
      <p> {state.name} </p>
      <p> {state.surname} </p>
      <p> {state.id} </p>
      <button onClick={asignId}>Asign ID</button>
    </>
  );
};

export default AssignId;
