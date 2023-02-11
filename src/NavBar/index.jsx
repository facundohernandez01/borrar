import React, {useContext, useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from '../CartWidget'
import { Link as RouterLink, MemoryRouter, useParams} from 'react-router-dom';
import CartContext from '../Context';
import WidgetsIcon from '@mui/icons-material/Widgets';

function ResponsiveAppBar({handleClickOpen, open}) {

  const { ItemsList } = useContext(CartContext);
  const resumirCategorias = Array.from(new Set(ItemsList.map(item => item.categoria)));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const abierto = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseNavMenu = () => {
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, 
    backgroundColor:'primary.dark',    }}
    >      
<Container maxWidth="xl">
        <Toolbar disableGutters>
        <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex', lg: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
        CoderStore
        </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', lg: 'none'  } }}>
        <Button
        id="basic-button"
        aria-controls={abierto ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={abierto ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
        startIcon={<WidgetsIcon  />}
      >
        Productos
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={abierto}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        {/* mobile */}
              {resumirCategorias.map((item) => (
                <MenuItem key={item} component={RouterLink} to='/'>
                  <Typography key={item} textAlign="center">{item}</Typography>
                </MenuItem>
              ))}

            </Menu>

          </Box>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {ItemsList.map((item) => (
              <Button
                key={item.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {item.categoria}
              </Button>
            ))}
          </Box> */}

      <Box sx={{ flexGrow: 10, display: { xs: 'none', md: 'flex', lg: 'flex'  } }}>
          <Button
            id="basicbutton"
            variant="contained"
            startIcon={<WidgetsIcon />}
            aria-controls={abierto ? 'basicmenu' : undefined}
            aria-haspopup="true"
            aria-expanded={abierto ? 'true' : undefined}
            onClick={handleClick}

          >

            Productos
          </Button>
          <Menu
        id="basicmenu"
        anchorEl={anchorEl}
        open={abierto}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basicbutton',
        }}
>
              {resumirCategorias.map((item) => (
                <MenuItem key={item} onClick={handleCloseNavMenu}>
                  <Button key={item} component={RouterLink} to={"/categoria/"+item}>{item}</Button>
                </MenuItem>
              ))}

            </Menu>     
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
          <Button variant="outlined" onClick={handleClickOpen}>
         
          <CartWidget/>
          </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;
