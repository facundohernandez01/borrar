import { Switch, Route, Routes } from "react-router-dom";
import {CartContext} from '././Context/index';
import React, { useContext } from "react";
import ItemListContainer from "./ItemListContainer";
import Cart from './Cart'
import Form from "./Form";
import { Box, Grid, Container, Button } from '@mui/material';
import ResponsiveAppBar from './NavBar/index.jsx'
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import Page404 from './Page404.jsx'
import Slider from './Slider'
import './index.css';

function App() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
  
  <Container>   
    <ResponsiveAppBar handleClickOpen={handleClickOpen}/>

        <Cart handleClose={handleClose} open={open} />

        <Grid container spacing={2} >
        <Box sx={{ width: '100%',
        paddingTop: 10
        }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
        <Routes>
        <Route exact path='/form' element={<Form/>}/>
        <Route path='/' element={<><Slider/><ItemListContainer/></>}/>
        <Route path='/categoria/:categoria' element={<><Slider/><ItemListContainer/></>}/>
        <Route path="/productos/:id" element={<ItemDetail />} />
        <Route path="/error404" element={<Page404 />} />
        <Route path="*" element={<Page404 />} />

        </Routes>

        </Grid>
        </Box>
        </Grid>

    </Container>
    
  );
}

export default App;
