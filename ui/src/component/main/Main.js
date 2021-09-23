import React, { useContext, useEffect, useState } from "react";

import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../DataProvider";

const Main = () => {
  const { data, setWeather } = useContext(DataContext);
  const [filteredData, setFilteredData] = useState({});

  useEffect(() => {
    if (data) {
      //TODO: 날씨 api 값을 매개변수로 삽입
      setWeather("S");
      setFilteredData(data);
      console.log(filteredData);
    }
  }, []);

  //   function reload(weather) {
  //     //날씨 API 로딩 완료 후 해당 함수 호출
  //     //weather를 S or W로 분류
  //     setWeather(weather);
  //   }

  function _onClickCategory(e) {
    if (filteredData.hasOwnProperty(e.target.id)) {
      filteredData.remove(e.target.id);
    }
    console.log(filteredData);
  }

  return (
    <div className="container">
      {/* 찐 */}

      {/* 홍 */}
      {/* 추천 관광지 */}

      <div className="recommand-place">
        <div className="container--title">
          <h1>추천 관광지</h1>
          <FontAwesomeIcon icon={faInfoCircle} className="btn--info" />

          <button className="btn--more">더보기</button>
        </div>
        <div className="container--btn">
          {Object.keys(data).map((val) => (
            <button id={val} onClick={_onClickCategory}>
              {val}
            </button>
          ))}
          {/* <div className="btn--row">
            <button>자연</button>
            <button>인문</button>
            <button className="btn--route">추천코스</button>
            <button>쇼핑</button>
          </div>
          <div className="btn--row02">
            <button>음식</button>
            <button className="btn--experience">체험관광지</button>
          </div> */}
        </div>

        {/* 밑에있는 리스트 컴포넌트로 변환 해야함 */}
        <div className="container--place">
          <div className="row">
            <img
              src="http://www.pngmagic.com/product_images/solid-dark-grey-background.jpg"
              alt=""
            />
            <div className="context">
              <div className="title">제목</div>
              <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div className="row">
            <img
              src="http://www.pngmagic.com/product_images/solid-dark-grey-background.jpg"
              alt=""
            />
            <div className="context">
              <div className="title">제목</div>
              <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
          <div className="row">
            <img
              src="http://www.pngmagic.com/product_images/solid-dark-grey-background.jpg"
              alt=""
            />
            <div className="context">
              <div className="title">제목</div>
              <div className="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
