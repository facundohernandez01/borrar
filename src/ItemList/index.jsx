import { CartContext } from "../Context"
import { useContext, useState } from "react";
import { Button, CardActionArea, CardActions, Grid, CardContent, Typography, Skeleton, Snackbar, CardMedia, Card } from '@mui/material';
import { Link } from "react-router-dom";

function ItemList({item}) {
  const { addCart, loading } = useContext(CartContext);
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    let value = 1
    addCart(item.id, value)
    setOpened(true)
};
  const handleClose = (event, reason) => {
  setOpened(false);
};

  return (
    <>
    {loading && <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />}
    {loading ? (
      <Skeleton sx={{ height: 290 }} animation="wave" variant="rectangular" />
      ) : (  <Grid key={item.title} item xs={12} md={3}>
              <Card>
                <CardActionArea>
                    <CardMedia  style={{display: "inline"}}
                        component="img"
                        height="140"
                        sx={{ width: 250, height: 180 }}
                        image={item.image_url}
                      
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{overflow: "hidden", height:"25px"}}>
                        {item.title}
                        </Typography>
                        <Typography>${item.price}</Typography>
                        <Typography  variant="body2" color="text.secondary" style={{overflow: "hidden", height:"20px"}}>
                        {item.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                 <Button onClick={() => handleClick(item.id)}>Add to cart</Button>
                  <Link to={`/productos/${item.id}`}>
                    <Button  variant="contained"> Ver</Button>
                  </Link>
                </CardActions>
            </Card>
         
            <Snackbar
                open={opened}
                autoHideDuration={1000}
                message="Producto añadido al carrito"
                onClose={handleClose}
              />
            </Grid>
               )}
           </>
  );
};

export default ItemList