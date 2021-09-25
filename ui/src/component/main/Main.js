import React, { useContext, useEffect, useState } from "react";

import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../../DataProvider";
import Weather from "../main/Weather";
import title from "../../img/suyeongtitle.png";
import titlebackground from "../../img/maintitle.png"


const Main = ({ history }) => {
  const { data, setWeather } = useContext(DataContext);
  const [unselectedCategories, setUnselectedCategories] = useState({});
  const [modal, setModal] = useState(false);

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

      <div className="titleWave">
        <img className="titleBG" src={titlebackground} alt="title" />
        <img className="mainTitle" src={title} alt="title" />
      </div>

      {/* 찐 */}
      <div className="weather">
        <div className="container--title">
          <h1>날씨</h1>
        </div>
        <div className="weatherContainer">
          <Weather />
        </div>
      </div>

      {/* 홍 */}
      {/* 추천 관광지 */}

      <div className="recommend-place">
        <div className="container--title">
          <h1>추천 관광지</h1>

          <FontAwesomeIcon
            icon={faInfoCircle}
            className="btn--info"
            onClick={() => setModal(!modal)}
          />

          <button
            className="btn--more"
            onClick={() => history.push("/recommend")}
          >
            더보기
          </button>
        </div>

        {modal && (
          <div className="modal">
            <p>
              현재 날씨를 기반으로 <br />
              관광지를 추천해 드립니다.
              <br />
              <br />
              더보기 버튼을 누르면 <br />더 많은 장소가 보입니다.
            </p>
            <button className="exit--btn" onClick={() => setModal(false)}>
              닫기
            </button>
          </div>
        )}

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
