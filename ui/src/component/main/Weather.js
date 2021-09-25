
import React, { Component } from 'react';
import axios from "axios";
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


class Weather extends Component {
  //상태 변수 정의 
  constructor(props) {
    super(props)
    this.state = { temp: 0, desc: '', icon: '', temp_max: 0, feels_like: 0, humidity: 0, wind_speed: 0 }
  }
  //컴포넌트 생성 후 날씨 정보 조회 
  componentDidMount() {
    const cityName = 'Busan';
    const apiKey = '51c87c0a70da47a918fa0f4354d9f76d';
    const cnt = 1;
    const lat = '35.1485';  //수영구 위도, 경도
    const lon = '129.1132';
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&units=metric&lon=${lon}&appid=${apiKey}&lang=Kr`;

    axios.get(url).then(responseData => {
      console.log(responseData);
      const data = responseData.data;
      this.setState({
        temp: data.main.temp.toFixed(1),
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
        temp_max: data.main.temp_max.toFixed(1),  //소수점 첫번째 자리까지만 출력
        temp_min: data.main.temp_min.toFixed(1),
        feels_like: data.main.feels_like.toFixed(1),
        humidity: data.main.humidity,  //습도
        wind_speed: Math.ceil(data.wind.speed)  //풍속
      });
    })
      .catch(error => console.log(error));
  }

  render() {
    let iconArr = {
      '01': faSun,
      '02': faCloudSun,
      '03': faCloud,
      '04': faCloudMeatball,
      '09': faCloudSunRain,
      '10': faCloudShowersHeavy,
      '11': faPooStorm,
      '13': faSnowflake,
      '50': faSmog
    }
    const idx = (this.state.icon).substr(0, 2);
    const awesome = iconArr[idx];
    console.log(awesome)

    const imgSrc = `http://openweathermap.com/img/w/${this.state.icon}.png`;
    return (
      <div>
        {/* <img className="weatherIcon" src={imgSrc} alt="weather" /> */}

        <div className="weatherIcon">
          {/* <FontAwesomeIcon icon={faCloud} className="cloud" /> */}

          <FontAwesomeIcon icon={awesome} className="icon"
            style={{
              color: "rgb(187, 208, 251)", fontSize: "70px"
            }}
          />
        </div>

        <div className="TempDes" >
          <div className="temperature">{this.state.temp}
            <div className="unit">°C</div>
          </div>
          <div className="description">{this.state.desc}</div>
          <div className="maxMin">
            <div className="temp--min">{this.state.temp_min}°</div>
            <div className="temp--max">{this.state.temp_max}°</div>
            <div className="feels-like">|&nbsp; 체감온도 {this.state.feels_like}</div>
          </div>
          <div className="under">
            <div className="humidity">습도 {this.state.humidity}% </div>
            <div className="windSpeed">|&nbsp; 풍속 {this.state.wind_speed}m/s</div>
          </div>
        </ div>

      </div >
    );
  }
}

export default Weather;