import React from 'react';
import styled from 'styled-components';
import title from '../../img/title.png';
import gwangalli from '../../img/gwangalli.png';
import Location from './Location';

const Detail = () =>{

    return(
        <>
            <Container>

                <Title>
                    <WaveImg src={title}/>
                    <div style={{
                        position: "absolute", 
                        top: "0",
                        color: "white",
                        margin: "2vh",
                        fontWeight: "bold",
                        fontSize: "30px"
                    }}>수영간데이 카페</div>
                </Title>

                <ImgContent>
                    <Img src={gwangalli}/>
                </ImgContent>
                        
                <Content>
                    <Flexbox>
                        <Contents>
                            <ContetnsTitle>문의 및 안내 : </ContetnsTitle>
                            <DataContents>  051-610-4951</DataContents>
                        </Contents>
                        <Contents>
                            <ContetnsTitle>체험안내 : </ContetnsTitle>
                            <DataContents>  SUP(Stand Up Paddle Board)</DataContents>
                        </Contents>
                        <Contents>
                            <ContetnsTitle>수용인원 : </ContetnsTitle>
                            <DataContents>  300명</DataContents>
                        </Contents>
                        <Contents>
                            <ContetnsTitle>이용시간 : </ContetnsTitle>
                            <DataContents>  일몰 전 30분 ~ 일몰 후 30분까지</DataContents>
                        </Contents>
                        <Contents>
                            <ContetnsTitle>SUP Zone 이용시간 : </ContetnsTitle>
                            <DataContents>  24시간</DataContents>
                        </Contents>
                        <Contents>
                            <ContetnsTitle>주차시설 : </ContetnsTitle>
                            <DataContents>  없음(수영구청 주차장 이용)</DataContents>
                        </Contents>
                        <Contents>
                            <ContetnsTitle>유모차 대여 여부 : </ContetnsTitle>
                            <DataContents>  없음</DataContents>
                        </Contents>
                        <Contents>
                            <ContetnsTitle>반려동물 동반 기능 여부 : </ContetnsTitle>
                            <DataContents>  가능</DataContents>
                        </Contents>
                        <Contents>
                            <ContetnsTitle>신용카드 가능 여부 : </ContetnsTitle>
                            <DataContents>  없음</DataContents>
                        </Contents>
                        
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
                    <Location/>
                </LocationContainer>


            </Container>

        </>
    )

}

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Title = styled.div`
    width: 100%;
    height: 13vh;
    background-color:white;
`;
const WaveImg = styled.img`
    width: 100%;
    height: 13vh;
`;

const ImgContent = styled.div`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
`;
const Img = styled.img`
    width: 80vw;
    height: 12vh;
`;


const Content = styled.div`
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items:center;
`;

const Flexbox = styled.div`
    width: 80vw;
    height: 100%;
`;

const Contents = styled.div`
    width: 100%;
    height: 3.8vh;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    //padding-left: 10px;
    margin: 0 20px;
`;
const ContetnsTitle = styled.div`
    // font-size: 4.5vw;
    font-weight: bold;
`;

// 데이터 받은 것
const DataContents = styled.div`
    // font-size: 3.5vw;
    
`;

const LocationTitle = styled.div`
    height: 5vh;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    margin: 10px 20px;
`;

const LocationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    margin: 10px 20px;
`;
export default Detail;