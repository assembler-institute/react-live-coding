import React, { useState, useEffect } from "react";

const useFetch = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const url =
    "https://api.giphy.com/v1/gifs/search?api_key=qbJze5GSpd3UhrOIouNn80kXmkE3OEhN&q=thor&limit=25&offset=0&rating=g&lang=en";

  useEffect(() => {
    setError(false);
    setLoading(true);
    const fetchData = () => {
      try {
        setTimeout(async () => {
          const response = await fetch(url);
          const { data } = await response.json();
          console.log(data);
          setImages(data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, [url]);

  const addValue = () => {
    setCounter((prevState) => prevState + 1);
  };

  return {
    images,
    error,
    loading,
    counter,
    addValue,
  };
};

export default useFetch;
