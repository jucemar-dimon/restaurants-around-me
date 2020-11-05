import React, { useState, useEffect } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';

const MapContainer = (props) => {
  const [map, setMap] = useState(null);
  const { google, query, placeId } = props;
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);

  function getRestaurnatById(placeId) {
    dispatch(setRestaurant(null));
    const service = new google.maps.places.PlacesService(map);
    const request = {
      placeId,
      fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
    };
    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurant(place));
      }
    });
  }

  useEffect(() => {
    if (placeId) {
      getRestaurnatById(placeId);
    }
  }, [placeId]);

  function searchByQuery(query) {
    dispatch(setRestaurants([]));
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: map.center,
      radius: '2000',
      type: ['restaurant'],
      query,
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
        console.log('restaurants', results);
      }
    });
  }

  useEffect(() => {
    if (query) {
      searchByQuery(query);
    }
  }, [query]);

  function searchNearby(map, center) {
    dispatch(setRestaurants([]));
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: center,
      radius: '2000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        dispatch(setRestaurants(results));
        console.log('restaurants', results);
      }
    });
  }

  function onMapReady(e, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  return (
    <Map google={google} centerAroundCurrentLocation onReady={onMapReady} {...props}>
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-BR',
})(MapContainer);
