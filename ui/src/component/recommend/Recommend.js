import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "./Recommend.css";
import { DataContext } from "../../DataProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Recommend = () => {
  const { data, setWeather } = useContext(DataContext);
  const [unselectedCategories, setUnselectedCategories] = useState({});

  useEffect(() => {
    if (data) {
      //TODO: 날씨 api 값을 매개변수로 삽입
      setWeather("S");
    }
  }, []);

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

  return (
    <>
      <WholeBox>
        <RecommendBox>
          <RecommendTitle>추천 관광지</RecommendTitle>
          <Line />
          <Swiper spaceBetween={10} slidesPerView={4} className="mySwiper">
            {Object.keys(data).map((val) => (
              <SwiperSlide
                className={`slider ${
                  val in unselectedCategories ? "btn--unselected" : ""
                }`}
                id={val}
                onClick={_onClickCategory}
              >
                {val}
              </SwiperSlide>
            ))}
          </Swiper>

          <Line />
          <FilterCategoryBox>
            <FilterCategory>가족코스</FilterCategory>
          </FilterCategoryBox>
        </RecommendBox>
        <ContainerBox></ContainerBox>
      </WholeBox>
    </>
  );
};

const WholeBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
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
  background-color: white;
  margin-left: 21px;
  margin-top: 20px;
`;

const FilterCategory = styled.div`
  width: 77px;
  height: 19px;
  border-radius: 100px;
  background-color: #e9a945;
`;

const ContainerBox = styled.div`
  width: 100%;
  height: calc(812px - 250px);
  background-color: yellow;
`;

export default Recommend;
