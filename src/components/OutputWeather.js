import React from "react";

const OutputWeather = (props) => {
  return (
    <div className="weather--component">
      <div className="weather--card">
        <div className="weather--icon">
          <img
            className="weathericon"
            src={`http://openweathermap.org/img/wn/${props.data.data.weather[0].icon}@2x.png`}
            alt="Weather icons"
          />
        </div>
        <div className="weather--info">
          <div className="details">
            <span className="titleDetails">City :</span>{" "}
            <span className="cityName">{props.data.data.name}</span> /{" "}
            <span className="cityName">{props.data.data.sys.country}</span>
          </div>
          <div className="details">
            <span className="titleDetails">Heat : </span>
            {Math.round(props.data.data.main.temp - 272)} <sup>&deg;C</sup>
          </div>
          <div className="details">
            <span className="titleDetails"> Weather : </span>
            {props.data.data.weather[0].description}
          </div>
          <div className="details">
            <span className="titleDetails"> Speed : </span>
            {props.data.data.wind.speed}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputWeather;
