import * as React from 'react';
import { Typography, Button, CardMedia, CardContent, CardActions, Card } from '@mui/material';

export default function Slider() {

  return (

    <Card sx={{ 
      width:'100%',
      height: 360,
      backgroundColor: '#000'
      }}>
      <CardMedia
        sx={{ height: 220 }}
        image="https://sleepmarket.co/wp-content/uploads/2022/07/BANNER-TV-NEVERA-SLEEP-MARKET_BANNER-ELECTRODOMESTICOS.jpg"
      />
      <CardContent sx={{ backgroundColor: 'primary.dark'}}>
        <Typography gutterBottom variant="h5"  color="#fff" component="div">
          Proyecto final React JS
        </Typography>
        <Typography variant="body2" color="#fff">
          Carrito desarrollado para el proyecto final del curso de React JS de Coderhouse.
          Alumno Facundo Hernández
        </Typography>

      </CardContent>
      <CardActions  sx={{ backgroundColor: '#3b4b9594'}}>
        <Button variant="outlined" size="small">Share</Button>
        <Button size="small">Learn More</Button>

      </CardActions>

    </Card>
  );
}
