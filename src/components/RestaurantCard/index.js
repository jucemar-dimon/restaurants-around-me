import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import Skeleton from '../Skeleton';
import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoader, setImageLoader] = useState(false);
  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          count={5}
          value={restaurant.rating}
          edited={false}
          isHalf
          activeColor="#e7711c"
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoader={imageLoader}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        onLoad={() => setImageLoader(true)}
        alt="Foto do restaurante"
      />
      {!imageLoader && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;
