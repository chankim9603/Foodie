import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import styled from "styled-components";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <div>
      <input
        type="text"
        id="searchTerm"
        name="searchTerm"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={searchTerm}
      />
      <button onClick={() => onSearch(searchTerm)}>Search</button>
    </div>
  );
};

const Restaurant = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [map, setMap] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDC2SFtvrCtHCJkCdWKiXoLTn8CI7F8pIg",
  });

  useEffect(() => {
    if (isLoaded && searchTerm && map) {
      const searchRestaurants = async () => {
        try {
          const response = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`,
            {
              headers: {
                Authorization: `Bearer kk8a2BP-9sEjKki126oia8BYJurhKXV5UDpW0Zb3zuzfh3WA-K4VsdeQm0u5T7fSTidUy8PFkhx2ZZ0sqwPov0zkK1F95Eg05ZYDMjKqLyOa9iLUEHFCJIbcn6SYZHYx`,
                "X-Requested-With": "XMLHttpRequest",
              },
              params: {
                categories: searchTerm,
                location: "Atlanta",
                limit: 5,
              },
            }
          );
          setSearchResults(response.data.businesses);
        } catch (error) {
          console.error(
            "Error occurred while fetching data from Yelp API:",
            error
          );
        }
      };
      searchRestaurants();
    }
  }, [isLoaded, searchTerm, map]);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleMarkerClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleInfoWindowClose = () => {
    setSelectedRestaurant(null);
  };

  const onMapLoad = (map) => {
    setMap(map);
  };

  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  return (
    <RestaurantStyled>
      <div className="Map">
        <Search onSearch={handleSearch} />
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: 33.749, lng: -84.388 }}
            zoom={10}
            onLoad={onMapLoad}
          >
            {searchResults.map((result) => (
              <Marker
                key={result.id}
                position={{
                  lat: result.coordinates.latitude,
                  lng: result.coordinates.longitude,
                }}
                onClick={() => handleMarkerClick(result)}
              />
            ))}
            {selectedRestaurant && (
              <InfoWindow
                position={{
                  lat: selectedRestaurant.coordinates.latitude,
                  lng: selectedRestaurant.coordinates.longitude,
                }}
                onCloseClick={handleInfoWindowClose}
              >
                <div>
                  <h2>{selectedRestaurant.name}</h2>
                  <p>{selectedRestaurant.location.address}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </RestaurantStyled>
  );
};

const RestaurantStyled = styled.div`
  padding: 15rem 0;
`;

export default Restaurant;
