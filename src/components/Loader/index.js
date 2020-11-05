import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/restaurants-loading.json';

// import { Container } from './styles';

const Loader = () => {
  const defaultOptions = {
    autoplay: true,
    loop: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidyMid slice',
    },
  };
  return <Lottie options={defaultOptions} />;
};

export default Loader;
