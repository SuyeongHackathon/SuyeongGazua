import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "./Recommend.css";
import { DataContext } from "../../DataProvider";
import { Swiper, SwiperSlide, Pagination } from "swiper/react";
import "swiper/swiper-bundle.css";
import gwangalli from '../../img/gwangalli.png'

const Recommend = () => {
  const { data, setWeather } = useContext(DataContext);
  const [selectedCateogry, setSelectedCateogry] = useState(0);

  useEffect(() => {
    if (data) {
      //TODO: 날씨 api 값을 매개변수로 삽입
      setWeather("S");
    }
  }, []);

  function place2ndCategory(e) {
    if (e[0]["세부카테고리"] === 0) {
      return null;
    }
    let set = new Set();
    Object.values(e).forEach((e) => set.add(e["세부카테고리"]));

    return [...set].map((val) => <FilterCategory>{val}</FilterCategory>);
  }

  return (
    <>
      <WholeBox>
        <RecommendBox>
          <RecommendTitle>추천 관광지</RecommendTitle>
          <Line />
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {Object.keys(data).map((val, idx) => (
              <SwiperSlide
                className={`slider ${
                  selectedCateogry === idx && "first-category--selected"
                }`}
                id={idx}
                onClick={() => setSelectedCateogry(idx)}
              >
                {val}
              </SwiperSlide>
            ))}
          </Swiper>

          <Line />
          <FilterCategoryBox>
            {Object.keys(data).map((category, idx) => (
              <>
                {idx === selectedCateogry && place2ndCategory(data[category])}
              </>
            ))}
          </FilterCategoryBox>
        </RecommendBox>
        <ContainerBox>

          <ContentsBox>
            <Img src={gwangalli}/>
            <TitleBox>
              <Title>수영간데이</Title>
              <Explanation>asdsadsadsadsadsadsadsadsadsadsadasdadsadsadasdasdasd</Explanation>
            </TitleBox>
          </ContentsBox>

          <ContentsBox>
            <Img src={gwangalli}/>
            <TitleBox>
              <Title>수영간데이</Title>
              <Explanation>asdsadsadsadsadsadsadsadsadsadsadasdadsadsadasdasdasd</Explanation>
            </TitleBox>
          </ContentsBox>

          <ContentsBox>
            <Img src={gwangalli}/>
            <TitleBox>
              <Title>수영간데이</Title>
              <Explanation>asdsadsadsadsadsadsadsadsadsadsadasdadsadsadasdasdasd</Explanation>
            </TitleBox>
          </ContentsBox>

          <ContentsBox>
            <Img src={gwangalli}/>
            <TitleBox>
              <Title>수영간데이</Title>
              <Explanation>asdsadsadsadsadsadsadsadsadsadsadasdadsadsadasdasdasd</Explanation>
            </TitleBox>
          </ContentsBox>

          <ContentsBox>
            <Img src={gwangalli}/>
            <TitleBox>
              <Title>수영간데이</Title>
              <Explanation>asdsadsadsadsadsadsadsadsadsadsadasdadsadsadasdasdasd</Explanation>
            </TitleBox>
          </ContentsBox>

          <ContentsBox>
            <Img src={gwangalli}/>
            <TitleBox>
              <Title>수영간데이</Title>
              <Explanation>asdsadsadsadsadsadsadsadsadsadsadasdadsadsadasdasdasd</Explanation>
            </TitleBox>
          </ContentsBox>
        </ContainerBox>
      </WholeBox>
    </>
  );
};

const WholeBox = styled.div`
  width: 100%;
  height: 100%;
`;

const RecommendBox = styled.div`
  width: 100%;
  height: 250px;
  background-color: #32499c;
`;

const RecommendTitle = styled.div`
  font-size: 23px;
  font-weight: 700;
  color: white;
  padding-left: 28px;
  padding-top: 31px;
`;

const Line = styled.div`
  width: 313px;
  height: 0;
  border: 1px solid #e3e3e3;
  margin-left: 21px;
  margin-top: 7px;
`;

const FilterCategoryBox = styled.div`
  width: 300px;
  height: 50px;
  margin-left: 21px;
  margin-top: 20px;
`;

const FilterCategory = styled.div`
  display: inline-block;
  height: 19px;
  margin: 8px;
  padding: 0 10px;
  border-radius: 100px;
  background-color: #e9a945;
  text-align: center;
  cursor: pointer;
`;

const ContainerBox = styled.div`
  width: 100%;
  height: calc(812px - 250px);
`;

const ContentsBox = styled.div`
  width:296px;
  height: 76px;
  background-color:white;
  margin-top: 24px;
  margin-left: 31px;
  display: flex;
`;

const Img = styled.img`
  width:76px;
  height:76px;
`;

const TitleBox = styled.div`
  width:201px;
  height:76px;
  margin-left:20px ;
`;

const Title = styled.div`
  width:100%;
  height:30%;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  margin-top:10px;
`;
const Explanation = styled.div`
  width:100%;
  height:30px;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  word-break: break-all;

`;

export default Recommend;
