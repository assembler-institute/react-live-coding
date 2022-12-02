import React, { useState, lazy, Suspense } from "react";

import GenericLoader from "../../components/skeleton/GenericLoader";
import UserLoader from "../../components/skeleton/Users";

// import GetUsers from "../../components/GetUsers";
// import ObjectList from "../../components/ObjectList";
// import Input from "../../components/Input";

const GetUsers = lazy(() => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(import("../../components/Users/GetUsers")), 2000)
  );
});
const ObjectList = lazy(() => {
  return new Promise((resolve) =>
    setTimeout(
      () => resolve(import("../../components/Objects/ObjectList")),
      7000
    )
  );
});
const Input = lazy(() => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(import("../../components/Input/Input")), 2000)
  );
});

export const Body = () => {
  // first render

  const [showObjects, setShowObjetcs] = useState(false);
  const [showOutSpaceCharacters, setShowOutSpaceCharacters] = useState(false);

  // React 18 = 3 renders vs 9 renders with React 17

  // const [multiply, setMultiply] = useState(10);
  // const [divide, setDivide] = useState(10);
  // const [substract, setSubstract] = useState(10);
  // const [sum, setsum] = useState(10);

  // const onClickObjectList = () => {
  //   setShowProducts(!showProducts); // second render
  //   setDivide(divide / 2); // third render
  //   setSubstract(substract - 1); // fourth render
  //   setsum(sum + 5); // fifth render
  // };

  // const onClickCreators = () => {
  //   setShowCreators(!showCreators); // sixth render
  //   setDivide(divide / 2); // seventh render
  //   setSubstract(substract - 1); // eight render
  //   setsum(sum + 5); // ninth render
  // };

  return (
    <>
      <Suspense fallback={<UserLoader />}>
        <div className="input">
          <Input />
        </div>
      </Suspense>
      <div className="main">
        <Suspense fallback={<GenericLoader />}>
          <div className="products">
            <ObjectList />
            {/* <button onClick={onClickObjectList} className="m-2">
            Show Cards
          </button> */}
            {showObjects && <div>{<ObjectList />}</div>}
          </div>
        </Suspense>
        <Suspense fallback={<GenericLoader />}>
          <div className="sidebar">
            <GetUsers />
            {/* <button onClick={ onClickCreators } className="m-2"> Show me who created this </button>
            { showOutSpaceCharacters && <div>{ <GetUsers /> }</div> } */}
          </div>
        </Suspense>
      </div>
    </>
  );
};
