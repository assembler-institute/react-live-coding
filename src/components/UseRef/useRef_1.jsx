import { useRef } from "react";
import Input from "./Input";

const UseRef_1 = () => {
  const InputRef = useRef();
  // InputRef.current = "Jiacheng";
  // console.log(InputRef);

  const handleFocus = (e) => {
    // document.querySelector("input").select();
    InputRef.current.focus();
  };

  return (
    <>
      <h2>Inputs with Ref Hook</h2>
      <button className="btn btn-primary" onClick={handleFocus}>
        Focus me!
      </button>
      <Input ref={InputRef} />
    </>
  );
};

export default UseRef_1;
