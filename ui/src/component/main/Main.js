import React, { useContext, useEffect, useState } from "react";

import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../DataProvider";

const Main = () => {
  const { data, setWeather } = useContext(DataContext);
  const [unselectedCategories, setUnselectedCategories] = useState({});

  useEffect(() => {
    if (data) {
      //TODO: 날씨 api 값을 매개변수로 삽입
      setWeather("S");
    }
  }, []);

  //   function reload(weather) {
  //     //날씨 API 로딩 완료 후 해당 함수 호출
  //     //weather를 S or W로 분류
  //     setWeather(weather);
  //   }

  function _onClickCategory(e) {
    if (!(e.target.id in unselectedCategories)) {
      setUnselectedCategories({ ...unselectedCategories, [e.target.id]: true });
    } else {
      let state = { ...unselectedCategories };
      delete state[e.target.id];
      setUnselectedCategories(state);
    }
    console.log(unselectedCategories);
  }

  const placeContainer = (e) => {
    return Object.values(e).map((val) => (
      <p>
        {
          <div className="row">
            <img
              src={
                val["이미지URL"] !== 0
                  ? val["이미지URL"]
                  : "http://www.pngmagic.com/product_images/solid-dark-grey-background.jpg"
              }
              alt=""
            />
            <div className="context">
              <div className="title">{val["콘텐츠명"]}</div>
              <div className="content">{val["제목"]}</div>
            </div>
          </div>
        }
      </p>
    ));
  };

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
            <button
              className={val in unselectedCategories ? "btn--unselected" : ""}
              id={val}
              onClick={_onClickCategory}
            >
              {val}
            </button>
          ))}
        </div>

        {/* 밑에있는 리스트 컴포넌트로 변환 해야함 */}

        <div className="container--place">
          {Object.keys(data).map(
            (category) =>
              !(category in unselectedCategories) &&
              placeContainer(data[category])
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
