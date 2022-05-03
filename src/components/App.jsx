import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import OutputWeather from "./OutputWeather.js";
import "../index.css";

const App = () => {
  const [kalitSuz, setKalitSuz] = useState("Tashkent");
  const [result, setResult] = useState([]);

  const getDataState = (data) => {
    setKalitSuz(data);
  };

  // console.log(kalitSuz);
  // https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
  useEffect(() => {
    const getData = async () => {
      const key = "97656f83ecf5dd57b863401d3b66f571";
      const data = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: kalitSuz,
            appid: key,
          },
        }
      );
      // console.log(data);
      setResult(data);
    };
    getData();
  }, [kalitSuz]);

  console.log(result);
  const outData = () => {
    if (result) {
      return <OutputWeather data={result} />;
    }
  };

  return (
    <div className="mainWeather--component">
      <h1 className="weatherApp--title">Weather App With React</h1>
      {/* <button onClick={getState}>SetState</button> */}
      <SearchBar request={getDataState} />
      <OutputWeather data={result} />;{/* {outData()} */}
    </div>
  );
};

export default App;
