import React, { useReducer, createContext } from "react";
import dataJson from "./const/sooyeong-gu-data";

// 유저 데이터 및 로그인을 처리

const initialState = {
  weather: null,
    data: {},
};

const DataContext = createContext({
  weather: null,
  data: {},
});

//==============================================================================//

function dataReducer(state, action) {
  switch (action.type) {
    case "setWeather":
        //TODO: json 호출 후 날씨별 filtering

          dataJson.forEach((e)=>console.log(e))


          
          return {
          ...state, weather : action.payload
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
      value={{ weather: state.user, data: state.data }}
          {...props}>
          {/* <div>{state}</div> */}
    </DataContext.Provider>
  );
}

export default DataProvider;