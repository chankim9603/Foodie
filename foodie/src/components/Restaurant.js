import React from "react";
import { GoogleMap, Marker, useLoadScript } from "react-google-maps/api";
import { useMemo } from "react";
import styled from "styled-components";


const Restaurant = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });
    const center = useMemo(() => ({ lat: 33.753746, long: -84.386330 }), []);


    return (
        <div className="Map">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={10}>

                    <Marker position={{ lat: 33.753746, long: -84.386330 }} />
                </GoogleMap>

            )}
        </div>
    );
};
const RestaurantStyle = styled.div`
.Map {
    height: 100vh;
    width: 100vh;
}

.map-container {
    height: 100%;
    width: 100%;
}
`;
export default Restaurant;