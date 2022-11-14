import useCounter from "../../../hooks/useCounter";
import "./counterstyles.css";

const CounterApp = ({ initialValue = 0 }) => {
  const { counter, increaseValue, substractValue, resetValue } =
    useCounter(initialValue);

  return (
    <>
      <div>{counter}</div>
      <button
        className="btn-counter btn-counter__add"
        onClick={() => increaseValue(5)}
      >
        +
      </button>
      <button
        className="btn-counter btn-counter__reset"
        onClick={() => resetValue(10)}
      >
        C
      </button>
      <button
        className="btn-counter btn-counter__substract"
        onClick={() => substractValue(2)}
      >
        -
      </button>
    </>
  );
};

export default CounterApp;
