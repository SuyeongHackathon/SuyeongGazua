import React, { useContext } from "react";
import styled from "styled-components";
import title from "../../img/title.png";
import gwangalli from "../../img/gwangalli.png";
import Location from "./Location";
import { DataContext } from "../../DataProvider";

const Detail = (props, { history }) => {
    const category = props.location.state.category;
    const index = props.location.state.index;
    const { data, setWeather } = useContext(DataContext);
    let content = data[category][index];
    const exceptFieldList = ["필터", '세부카테고리', '이미지URL'];
    console.log(content['이미지URL'])
    return (

        
            <Container>
                <Title>
                    <WaveImg src={title} />
                    <div style={{
                        position: "absolute",
                        top: "0",
                        color: "white",
                        margin: "2vh",
                        fontWeight: "bold",
                        fontSize: "30px",
                        whiteSpace: "nowrap",

                    }}>{content['콘텐츠명']}</div>
                </Title>



                <Content>
                    <Flexbox>
                        {content['이미지URL'] !== 0 &&
                            (<ImgContent>
                                <Img src={content['이미지URL']} />
                            </ImgContent>)}
                        {Object.entries(content).map((e) => (
                            exceptFieldList.includes(e[0]) || e[1] == "" ? null :
                                <Contents>
                                    <ContetnsTitle>{`${e[0]} : `}</ContetnsTitle>
                                    <DataContents>{`  ${e[1]}`}</DataContents>
                                </Contents>
                        ))
                        }

                    </Flexbox>
                </Content>

                <LocationTitle>
                    <div style={{
                        position: "absolute",
                        fontWeight: "bold",
                        fontSize: "25px"
                    }}>위치</div>
                </LocationTitle>

                <LocationContainer>
                    <Location address={content['주소']} />
                </LocationContainer >


            </Container >

        
    )

}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  width: 100%;
  height: 13vh;
  background-color: white;
`;
const WaveImg = styled.img`
  width: 100%;
  height: 13vh;
`;

const ImgContent = styled.div`
  width: 200px;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;
const Img = styled.img`
  width: 200px;
  height: 100px;
`;

const Content = styled.div`
  height: 46vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  overflow: scroll;
`;

const Flexbox = styled.div`
  width: 300px;
  height: 100%;
`;

const Contents = styled.div`
  word-break: break-all;
  width: 100%;
  padding: 8px 0;
`;
const ContetnsTitle = styled.span`
  // font-size: 4.5vw;
  font-weight: bold;
`;

// 데이터 받은 것
const DataContents = styled.span`
  // font-size: 3.5vw;
`;

const LocationTitle = styled.div`
  height: 5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 20px;
`;

const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 20px;
`;
export default Detail;
