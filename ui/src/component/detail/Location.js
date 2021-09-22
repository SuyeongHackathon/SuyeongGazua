/*global kakao*/ 
import React, { useEffect } from 'react'

const Location=()=>{

    const { kakao } = window;

    const address = "부산광역시 금정구 장전동 420-47번지 근영테크빌 601호";

    const FindLatLng = ()=>{
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
        //위도, 경도로 변환 및 마커표시
        let geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(`${address}`, function (result, status) {
            
            if (status === kakao.maps.services.Status.OK) {

                let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                let marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                map.setCenter(coords);
            }
        });
    }


    useEffect(() => {
        FindLatLng()
    }, []);

    return (
        <>
            <div id='map' style={{width: '80vw',height: '30vh'}}></div>
        </>
    );
}

export default Location;