import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Container, Search, Logo, Wrapper, Map, CarouselTitle, Carousel } from './styles';
import LogoApp from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard } from '../../components';
import Modal from '../../components/Modal';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={LogoApp} alt="Logotipo Restaurants Around Me" />
          <TextField
            label="Pesquisar restaurante"
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} />
          </TextField>
        </Search>
        <CarouselTitle>Na sua área</CarouselTitle>
        <Carousel {...settings}>
          <Card image={restaurante} title="Nome do restaurante" />
          <Card image={restaurante} title="Nome do restaurante" />
          <Card image={restaurante} title="Nome do restaurante" />
          <Card image={restaurante} title="Nome do restaurante" />
          <Card image={restaurante} title="Nome do restaurante" />
          <Card image={restaurante} title="Nome do restaurante" />
          <Card image={restaurante} title="Nome do restaurante" />
          <Card image={restaurante} title="Nome do restaurante" />
        </Carousel>
        <button type="button" onClick={() => setModalOpened(true)}>
          Abrir modal
        </button>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} />
    </Wrapper>
  );
};

export default Home;
