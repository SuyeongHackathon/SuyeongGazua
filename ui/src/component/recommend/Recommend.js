import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "./Recommend.css";
import { DataContext } from "../../DataProvider";
import { Swiper, SwiperSlide, Pagination } from "swiper/react";
import "swiper/swiper-bundle.css";

const Recommend = ({history}) => {
  const { data, setWeather } = useContext(DataContext);
  const [selectedCateogry, setSelectedCateogry] = useState('관광명소');
  const [unselected2ndCategories, setUnselected2ndCategories] = useState({});

  useEffect(() => {
    if (data) {
      //모든 관광지를 불러옴
      setWeather("A");
    }
  }, []);
  function onClick2ndCateogry(e) {
     if (!(e.target.id in unselected2ndCategories)) {
      setUnselected2ndCategories({ ...unselected2ndCategories, [e.target.id]: true });
    } else {
      let state = { ...unselected2ndCategories };
      delete state[e.target.id];
      setUnselected2ndCategories(state);
    }
    console.log(unselected2ndCategories);
  }


  function place2ndCategory(e) {
    if (e[0]["세부카테고리"] === 0) {
      return null;
    }
    let set = new Set();
    Object.values(e).forEach((e) => set.add(e["세부카테고리"]));

    return [...set].map((val) => (
      
      <FilterCategory
        unselected = {val in unselected2ndCategories}
        id={val} onClick={onClick2ndCateogry}>
        {val}
      </FilterCategory> 
    ));
  }

  function placeContainer(e) {
    return Object.values(e).map((val, index) => (
      val['세부카테고리'] in unselected2ndCategories ? null :
      <p onClick={()=>history.push({
            pathname: "/detail",
            state:{category:selectedCateogry, index:index}
          })}>
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
  }

  function displayLists() {}

  return (
    
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
                  selectedCateogry === val && "first-category--selected"
                }`}
                id={val}
                onClick={() => setSelectedCateogry(val)}
              >
                {val}
              </SwiperSlide>
            ))}
          </Swiper>

          <Line />
          <FilterCategoryBox>
            {Object.keys(data).map((category, idx) => (
              <div>
                {category === selectedCateogry && place2ndCategory(data[category])}
              </div>
            ))}
          </FilterCategoryBox>
        </RecommendBox>
<ContainerBox>
        {placeContainer(data[selectedCateogry])}
        </ContainerBox>
       
      </WholeBox>
    
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
  background-color: ${props=>props.unselected ? '#7C7B7B' : '#e9a945'};
  text-align: center;
  cursor: pointer;
`;

const ContainerBox = styled.div`
  width: 100%;
  height: calc(812px - 250px);
  overflow : scroll;
`;

export default Recommend;
