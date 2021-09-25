import React, { useReducer, createContext } from "react";
import dataJson from "./const/sooyeong-gu-data";

// 유저 데이터 및 로그인을 처리
const initialState = {
  weather: "B",
  data: {},
};

const DataContext = createContext({
  weather: "B",
  data: {},
  setWeather: () => {},
});

//==============================================================================//

function dataReducer(state, action) {
  switch (action.type) {
    case "setWeather":
      //json 호출 후 날씨별 filtering
      let res = {};

      for (const [key, value] of Object.entries(dataJson)) {
        let tempArray = Object.values(value).filter(
          (e) =>
            action.payload === "A" ? true :
            e["필터"] === action.payload || "B"
        );
        res[key] = tempArray.reduce(
          (ac, a, i) => ({
            ...ac,
            [i]: a,
          }),
          {}
        );
      }
      console.log(res);

      // dataJson.forEach((key, value) => console.log(key));

      return {
        ...state,
        weather: action.payload,
        data: res,
      };

    default:
  }
}

function DataProvider(props, children) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  function setWeather(weather) {
    //TODO: Request login to server function
    //and insert data to userData object
    dispatch({
      type: "setWeather",
      payload: weather,
    });
  }

  return (
    <DataContext.Provider
      value={{ weather: state.user, data: state.data, setWeather }}
      {...props}
    />
  );
}

export { DataProvider, DataContext };
