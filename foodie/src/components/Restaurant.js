import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import styled from "styled-components";

const containerStyle = {
    width: "400px",
    height: "400px",
};

const Restaurant = () => {
    const REACT_APP_GOOGLE_MAPS_API_KEY =
        "AIzaSyDC2SFtvrCtHCJkCdWKiXoLTn8CI7F8pIg";
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
    });
    const center = useMemo(() => ({ lat: 33.753746, lng: -84.38633 }), []);

    return (
        <div className="Map">
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                    <Marker position={{ lat: 33.753746, lng: -84.38633 }} />
                </GoogleMap>
            )}
        </div>
    );
};

export default Restaurant;