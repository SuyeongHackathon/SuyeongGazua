import React from "react";
import styled from "styled-components";
import gwangalli from "../../img/gwangalli.png";

const Content = () => {
  return (
    <>
      <ContentsBox>
        <RecommendImg src={gwangalli} />
        <FlexBox>
          <Title>수영간데이 카페</Title>
          <Explanation>
            asdasdsafasgfgsadfasdfasdfsadfsadfadsfasdfasdfasfasdfasd
          </Explanation>
        </FlexBox>
      </ContentsBox>

      <ContentsBox>
        <RecommendImg src={gwangalli} />
        <FlexBox>
          <Title>수영간데이 카페</Title>
          <Explanation>
            asdasdsafasgfgsadfasdfasdfsadfsadfadsfasdfasdfasfasdfasd
          </Explanation>
        </FlexBox>
      </ContentsBox>

      <ContentsBox>
        <RecommendImg src={gwangalli} />
        <FlexBox>
          <Title>수영간데이 카페</Title>
          <Explanation>
            asdasdsafasgfgsadfasdfasdfsadfsadfadsfasdfasdfasfasdfasd
          </Explanation>
        </FlexBox>
      </ContentsBox>

      <ContentsBox>
        <RecommendImg src={gwangalli} />
        <FlexBox>
          <Title>수영간데이 카페</Title>
          <Explanation>
            asdasdsafasgfgsadfasdfasdfsadfsadfadsfasdfasdfasfasdfasd
          </Explanation>
        </FlexBox>
      </ContentsBox>

      <ContentsBox>
        <RecommendImg src={gwangalli} />
        <FlexBox>
          <Title>수영간데이 카페</Title>
          <Explanation>
            asdasdsafasgfgsadfasdfasdfsadfsadfadsfasdfasdfasfasdfasd
          </Explanation>
        </FlexBox>
      </ContentsBox>

      <ContentsBox>
        <RecommendImg src={gwangalli} />
        <FlexBox>
          <Title>수영간데이 카페</Title>
          <Explanation>
            asdasdsafasgfgsadfasdfasdfsadfsadfadsfasdfasdfasfasdfasd
          </Explanation>
        </FlexBox>
      </ContentsBox>
    </>
  );
};

const ContentsBox = styled.div`
  width: 80%;
  height: 76px;
  margin: 24px 34px 0 29px;
  display: flex;
`;

const FlexBox = styled.div`
  width: 201px;
  height: 76px;
  margin-left: 20px;
`;

const RecommendImg = styled.img`
  width: 76px;
  height: 76px;
`;

const Title = styled.div`
  width: 201px;
  height: 19px;
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  margin-top: 10px;
`;
const Explanation = styled.div`
  width: 201px;
  height: 30px;
  font-size: 13px;
  line-height: 15px;
  margin-top: 6px;
  word-break: break-all;
`;

export default Content;
