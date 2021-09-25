/*global kakao*/ 
import React, { useEffect } from 'react'

const Location=({address})=>{

    const { kakao } = window;

    console.log(address)

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
        
            <div id='map' style={{width: '80vw',height: '30vh'}}></div>
        
    );
}

export default Location;