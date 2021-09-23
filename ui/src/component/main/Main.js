import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="container">
      {/* 찐 */}

      {/* 홍 */}
      {/* 추천 관광지 */}

      <div className="recommand-place">
        <div className="title-container">
          <h1>추천 관광지</h1>
          <FontAwesomeIcon icon={faInfoCircle} className="btn-info" />

          <button className="btn-more">더보기</button>
        </div>
        <div className="btn-container">
          <div className="btn-row">
            <button>자연</button>
            <button>인문</button>
            <button className="btn-route">추천코스</button>
            <button>쇼핑</button>
            <button>음식</button>
            <button className="btn-experience">체험관광지</button>
          </div>
        </div>
        <div className="detail">
          <div className="row">
            <img src="" alt="" />
            <div className="title">콘텐츠명</div>
            <div className="content">제목</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
