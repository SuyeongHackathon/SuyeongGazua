import React, { useContext, useEffect } from "react";

import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../DataProvider";

const Main = () => {
  const { data, setWeather } = useContext(DataContext);

  useEffect(() => {
    if (data) {
      setWeather("S");
    }
    return () => {};
  }, []);

  function reload(weather) {
    //날씨 API 로딩 완료 후 해당 함수 호출
    //weather를 S or W로 분류
    setWeather(weather);
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
          <div className="btn--row">
            <button>자연</button>
            <button>인문</button>
            <button className="btn--route">추천코스</button>
            <button>쇼핑</button>
          </div>
          <div className="btn--row02">
            <button>음식</button>
            <button className="btn--experience">체험관광지</button>
          </div>
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
