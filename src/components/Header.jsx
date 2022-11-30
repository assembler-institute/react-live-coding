import { connect } from "react-redux";

import { increaseCounter, decreaseCounter } from "../redux/counter/actions";

function Header({ onIncreaseCounter, onDecreaseCounter }) {
  return (
    <>
      <p>Header</p>
      <button onClick={onIncreaseCounter}>+1</button>
      <button onClick={onDecreaseCounter}>-1</button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onIncreaseCounter: () => dispatch(increaseCounter()),
  onDecreaseCounter: () => dispatch(decreaseCounter()),
});

const reduxHOC = connect(null, mapDispatchToProps);

export default reduxHOC(Header);
