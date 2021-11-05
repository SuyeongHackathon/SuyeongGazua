import React, { Component, useEffect, useState, useContext } from "react";
import { DataContext } from "../../DataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faCloudMeatball } from "@fortawesome/free-solid-svg-icons";
import { faCloudSunRain } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { faPooStorm } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faSmog } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Weather = (props) => {
  const { data, setWeather } = useContext(DataContext);
  const [temp, setTemp] = useState(0);
  const [desc, setDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [temp_max, setTemp_max] = useState(0);
  const [temp_min, setTemp_min] = useState(0);
  const [feels_like, setFeels_like] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind_speed, setWind_speed] = useState(0);
  // console.log(props.temp);

  let iconArr = {
    "01": faSun,
    "02": faCloudSun,
    "03": faCloud,
    "04": faCloudMeatball,
    "09": faCloudSunRain,
    10: faCloudShowersHeavy,
    11: faPooStorm,
    13: faSnowflake,
    50: faSmog,
  };
  let idx = icon.substr(0, 2);
  let awesome = iconArr[idx];

  useEffect(() => {
    const apiKey = "51c87c0a70da47a918fa0f4354d9f76d";
    const lat = "35.1485"; //수영구 위도, 경도
    const lon = "129.1132";
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=metric&lon=${lon}&appid=${apiKey}&lang=Kr`;

    axios
      .get(url)
      .then((responseData) => {
        console.log(responseData);
        const data = responseData.data;
        setTemp(data.main.temp.toFixed(1));
        setDesc(data.weather[0].description);
        setIcon(data.weather[0].icon);
        setTemp_max(data.main.temp_max.toFixed(1)); //소수점 첫번째 자리까지만 출력
        setTemp_min(data.main.temp_min.toFixed(1));
        setFeels_like(data.main.feels_like.toFixed(1));
        setHumidity(data.main.humidity); //습도
        setWind_speed(Math.ceil(data.wind.speed)); //풍속

        if (idx === "01" || idx === "02") {
          setWeather("S"); //S: 맑음
        } else {
          setWeather("W"); //W: 흐림
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        {/* <img className="weatherIcon" src={imgSrc} alt="weather" /> */}

        <div className="weatherIcon">
          {/* <FontAwesomeIcon icon={faCloud} className="cloud" /> */}
          {awesome !== undefined && (
            <FontAwesomeIcon
              icon={awesome}
              className="icon"
              style={{
                color: "rgb(187, 208, 251)",
                fontSize: "70px",
              }}
            />
          )}
        </div>

        <div className="TempDes">
          <div className="temperature">
            {temp}
            <div className="unit">°C</div>
          </div>
          <div className="description">{desc}</div>
          <div className="maxMin">
            <div className="temp--min">{temp_min}°</div>
            <div className="temp--max">{temp_max}°</div>
            <div className="feels-like">|&nbsp; 체감온도 {feels_like}</div>
          </div>
          <div className="under">
            <div className="humidity">습도 {humidity}% </div>
            <div className="windSpeed">|&nbsp; 풍속 {wind_speed}m/s</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
