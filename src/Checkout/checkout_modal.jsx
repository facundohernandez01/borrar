import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import db from "../../db/firebase-config.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import {CartContext} from '../Context/index';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import { Snackbar } from '@mui/material';
import { useHistory } from 'react-router-dom';

  const [redirectToHome, setRedirectToHome] = useState(false);



export function ConfirmationDialogRaw({ open, chekoutClose, setOpen }) {
  const history = useHistory();

const { cart, vaciarCarrito } = useContext(CartContext);

const [finalizada, setFinalizada] = useState(false);
function handleClose() {
        setFinalizada(false);
        history.goBack();
}

const [inputNombre, setInputNombre] = useState("");
const [inputTel, setInputTel] = useState("");
const [inputEmail, setInputEmail] = useState("");
const [inputValida, setInputValida] = useState("");

 const createItem = async (e) => {
    if (inputEmail !== inputValida) {
      alert("Emails no coinciden. Verificar");
      return;
    }
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(inputEmail)) {
      alert("Correo inválido");
      return;
    }
    
    const itemsCollectionRef = collection(db, "ordenes");
    const carrito = {};
    carrito.nombre = inputNombre,
    carrito.email = inputEmail,
    carrito.fecha = new Date().toString();
    cart.forEach(item => {
      carrito[item.id] = {
        title: item.title,
        price: item.price,
        cantidad: item.cantidad
      };
    });
    await addDoc(itemsCollectionRef, carrito);
    setInputNombre("");
    setInputEmail("");
    setInputValida("");
    setInputTel("");
    setOpen(false);
    vaciarCarrito();
    setFinalizada(true);
    setRedirectToHome(true);

  };

  React.useEffect(() => {
    if (!open) {
    //   setSelectedValue(value);
    }
  }, [open]);



  const handleCancel = () => {
    setOpen(false);
  };

  const handleOk = () => {
    onClose(selectedValue);
  };

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

  return (
    <>
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
    >
      <DialogTitle>Confirmación de compra</DialogTitle>
      <DialogContent dividers>
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <FormControl>
        <InputLabel htmlFor="component-outlined">Nombre</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={inputNombre}
          label="Nombre"
          onChange={(e) => setInputNombre(e.target.value)}

        />
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="component-outlined">Teléfono</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={inputTel}
          label="Teléfono"
          onChange={(e) => setInputTel(e.target.value)}

        />
    </FormControl>
    </Box>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
    <FormControl>
        <InputLabel htmlFor="component-outlined">Email</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={inputEmail}
          label="Email"
          onChange={(e) => setInputEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Repetir email</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={inputValida}
          label="Repetir email"
          onChange={(e) => setInputValida(e.target.value)}
        />
      </FormControl>
      </Box>

      </DialogContent>
      <DialogActions>
      <Button autoFocus onClick={handleCancel}>
        Cancelar
      </Button>
      <Button variant="contained" onClick={createItem}>Confirmar</Button>
      </DialogActions>
      </Dialog>
      
      <Snackbar
      open={finalizada}
      autoHideDuration={3000}
      message="Compra procesada con éxito"
      onClose={handleClose}
    /> 

    </>
  )
}

export default ConfirmationDialogRaw;