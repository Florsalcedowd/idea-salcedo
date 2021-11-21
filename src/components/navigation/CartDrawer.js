import { IconButton } from '@mui/material';
import React from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const CartDrawer = () => {
    return (
        <IconButton aria-label="add to cart" color="primary" component="span">
        <ShoppingCartRoundedIcon />
      </IconButton>
    );
}

export default CartDrawer;