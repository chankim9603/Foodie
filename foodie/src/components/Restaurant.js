import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClick = () => {
        onSearch(searchTerm);
    };

    return (
        <div>
            <input
                type="text"
                id="searchTerm"
                name="searchTerm"
                onChange={handleChange}
                value={searchTerm}
            />
            <button onClick={handleClick}>Search</button>
        </div>
    );
};

const Restaurant = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [map, setMap] = useState(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDC2SFtvrCtHCJkCdWKiXoLTn8CI7F8pIg',
    });

    useEffect(() => {
        if (isLoaded && searchResults.length > 0 && map) {
            const bounds = new window.google.maps.LatLngBounds();
            searchResults.forEach((result) => {
                const { latitude, longitude } = result.coordinates;
                const marker = new window.google.maps.Marker({
                    position: { lat: latitude, lng: longitude },
                    map,
                });
                bounds.extend(marker.getPosition());
                marker.addListener('click', () => {
                    setSelectedRestaurant(result);
                });
            });
            map.fitBounds(bounds);
        }
    }, [isLoaded, searchResults, map]);

    const handleSearch = async (term) => {
        try {
            setSearchResults([]);
            const response = await axios.get(
                `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search`,
                {
                    headers: {
                        Authorization: `Bearer kk8a2BP-9sEjKki126oia8BYJurhKXV5UDpW0Zb3zuzfh3WA-K4VsdeQm0u5T7fSTidUy8PFkhx2ZZ0sqwPov0zkK1F95Eg05ZYDMjKqLyOa9iLUEHFCJIbcn6SYZHYx`,
                        'X-Requested-With': 'XMLHttpRequest',
                    },
                    params: {
                        categories: term,
                        location: 'Atlanta',
                        limit: 5,
                    },
                }
            );
            setSearchResults(response.data.businesses);
        } catch (error) {
            console.error('Error occurred while fetching data from Yelp API:', error);
        }
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
        width: '400px',
        height: '400px',
    };

    return (
        <div className="Map">
            <Search onSearch={handleSearch} />
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{ lat: 33.7490, lng: -84.3880 }}
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
                                <p>{selectedRestaurant.location.address1}</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

export default Restaurant;
