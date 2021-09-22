import React from 'react';
import './Main.css'

const Main = () => {
    return (
        <>
        {/* 찐 */}

        {/* 홍 */}
            {/* 추천 관광지 */}
          
        <div className="recommand-place">
            <div className="title-container">
                <h1>추천 관광지</h1>
                <p>Info 이모티콘 자리</p>
                <button className="more-btn">더보기</button>
            </div>
            <div className="btn-container">
                <div className="btn-row">
                    <button>자연</button>
                    <button>인문</button>
                    <button className="long-btn">추천코스</button>
                    <button>쇼핑</button>
                    <button>음식</button>
                    <button className="longest-btn">체험관광지</button>
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
        </>
    );
};

export default Main;