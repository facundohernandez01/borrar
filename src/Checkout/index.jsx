import { useState } from "react";
import React from 'react';
import ConfirmationDialogRaw from '../Checkout/checkout_modal'
import { Button } from "@mui/material";

function CheckOut({ }) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const chekoutClose = () => {
      setOpen(false);
    };


  return (
    <>
    <Button variant="outlined" onClick={handleClickOpen}></Button>
    <ConfirmationDialogRaw 
    handleClickOpen={handleClickOpen} 
    chekoutClose={chekoutClose} 
    open={open}
    />

    </>
  );
}



export default CheckOut;