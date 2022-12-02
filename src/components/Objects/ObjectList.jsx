import ObjectCard from "./ObjectCard";
import { useState, useEffect, startTransition } from "react";

const ObjectList = () => {
  const [nasaObjects, setNasaObjects] = useState([]);

  const getObjects = async () => {
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?start_date=2022-11-15&end_date=2022-11-30&api_key=pBrpwUE61voV3u0lewcq0TVJDfi4NtOnfZpYtwAn"
    );

    if (!response.ok) {
      throw new Error("Error while fetching products");
    }
    const data = await response.json();
    const objects = data;
    // startTransition will set a lower priority to the render of the component. Sets
    // a normal priority vs higher priority.

    startTransition(() => setNasaObjects(objects));

    // return setNasaObjects(objects);
  };

  useEffect(() => {
    getObjects();
  }, []);

  return (
    <>
      <div className="space_cards">
        {nasaObjects && nasaObjects.length > 0 ? (
          nasaObjects.map((object) => (
            <ObjectCard key={object.date} object={object} />
          ))
        ) : (
          <h1>No objects found</h1>
        )}
      </div>
    </>
  );
};

export default ObjectList;
