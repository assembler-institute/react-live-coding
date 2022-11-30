import { connect } from "react-redux";

function Footer({ counter }) {
  return (
    <>
      <p>Footer</p>
      <div>Counter: {counter}</div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const reduxHOC = connect(mapStateToProps, null);

export default reduxHOC(Footer);
