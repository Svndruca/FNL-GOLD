import React from "react";
import { Paper, Box, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";


const exampleItems = [
  {
    name: "First Item",
    description: "Description for first item",
    src: "img/fotos_carrusel/img-AlexzGallardo.jpg",
  },
  {
    name: "Second Item",
    description: "Description for second item",
    src: "img/fotos_carrusel/img-Nebula.jpg",
  },
  {
    name: "Second Item",
    description: "Description for second item",
    src: "img/fotos_carrusel/img-AlexzyVazquez.jpg",
  },
];

const Carrusel = () => {
  return (
    <div className="carousel__container">
    <Carousel
      animation="slide"
      indicators={true}
      timeout={500}
      navButtonsAlwaysVisible={true}
      navButtonsAlwaysInvisible={false}
      cycleNavigation={true}
      fullHeightHover={false}
      className="carousel"
    >
      {exampleItems.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
    </div>
  );
};

function Item(props) {
  return (
    <Paper
      className="carousel__item" 
      style={{
        backgroundImage: `url(${props.item.src})`, // Imagen de fondo
      }}
      elevation={10}
    >
      <Typography variant="h4">{props.item.name}</Typography>
      <Typography>{props.item.description}</Typography>
    </Paper>
  );
}

export default Carrusel;