import React from 'react';
import styled from 'styled-components';


const Recommand = () => {
    return (
        <>
            <WholeBox>
                <RecommandBox>
                    <RecommandTitle>추천 관광지</RecommandTitle>
                    <Line/>
                    <CategoryBox>
                        <Category>자연</Category>
                        <Category>인문</Category>
                        <Category style={{width:"65px"}}>추천코스</Category>
                        <Category style={{width:"80px"}}>체험관광지</Category>
                        <Category>쇼핑</Category>
                        <Category>음식</Category>
                    </CategoryBox>
                    <Line/>
                    <FilterCategoryBox>
                        <FilterCategory>가족코스</FilterCategory>

                    </FilterCategoryBox>

                </RecommandBox>
                <ContainerBox></ContainerBox>


            </WholeBox>
        </>
    );
};

const WholeBox = styled.div`
    width: 100%;
    height: 100%;
    background-color:blue;
`;

const RecommandBox = styled.div`
    width: 100%;
    height: 30vh;
    background-color:#32499C;
`;

const RecommandTitle = styled.div`
    font-size: 23px;
    font-weight: 700;
    color:white;
    padding-left: 28px;
    padding-top: 31px;
`;

const Line = styled.div`
    width:313px;
    height:0;
    border: 1px solid #E3E3E3;
    margin-left: 21px;
    margin-top: 7px;
`;

const CategoryBox = styled.div`
    width: 313px;
    height:34px;
    /* background-color: white; */
    margin-left:21px;
    margin-top:8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Category = styled.div`
    width: 33px;
    height: 19px;
    font-size:16px;
    line-height:18.75px;
    font-weight:400;
    padding-left: 6px;
    color: white;
`;

const FilterCategoryBox = styled.div`
    width:300px;
    height:50px;
    background-color:white;
    margin-left: 21px;
    margin-top: 20px;
`;

const FilterCategory = styled.div`
    width: 77px;
    height:19px;
    border-radius:100px;
    background-color:#E9A945;
`;

const ContainerBox = styled.div`
    width: 100%;
    height: 70vh;
    background-color:yellow;
`;

export default Recommand;