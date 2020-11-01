import React from 'react';

import { Card, Title } from './styles';

const ImageCard = ({ image, title }) => (
  <Card image={image}>
    <Title>{title}</Title>
  </Card>
);

export default ImageCard;
