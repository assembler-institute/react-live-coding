import { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState("¿Qué tiempo hace hoy?");

  useEffect(() => {
    console.log("useEffect se monta");
    console.log(weather);

    setTimeout(() => {
      setWeather("Hoy está nublado");
    }, 2000);
  }, []);

  return (
    <>
      <h2>{weather}</h2>
    </>
  );
};

export default Weather;
