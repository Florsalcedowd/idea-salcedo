import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { CounterContainer, UnitsValue } from "../../assets/styles/SharedComponents";
import { CartContext } from '../../context/CartContext';

const CardItemCounter = (props) => {
    const { product } = props;
    const { removeItem, updateItem } = useContext(CartContext);

    return (
        <CounterContainer>
            <IconButton
                aria-label='delete'
                size='small'
                onClick={() => {
                    updateItem(product, product.quantity - 1);
                }}
                disabled={product.quantity <= 1}
            >
                <RemoveRoundedIcon />
            </IconButton>
            <UnitsValue>{product.quantity}</UnitsValue>
            <IconButton
                aria-label='delete'
                size='small'
                onClick={() => {
                    updateItem(product, product.quantity + 1);
                }}
                disabled={product.quantity === product.stock}
            >
                <AddRoundedIcon />
            </IconButton>

            <IconButton
                aria-label='delete'
                size='small'
                onClick={() => {
                    removeItem(product);
                }}
            >
                <DeleteIcon />
            </IconButton>
        </CounterContainer>
    );
};

export default CardItemCounter;
