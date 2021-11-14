import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const ItemCount = (props) => {
    const { stock, addToCart } = props;

    const [itemStock, setItemStock] = useState(stock);
    const [units, setUnits] = useState(1);

    const addUnits = () => {
        if (itemStock > 0) {
            setUnits(units + 1);
            setItemStock(itemStock - 1);
        }
    };

    const removeUnits = () => {
        if (units > 1) {
            setUnits(units - 1);
            setItemStock(itemStock + 1);
        }
    };

    return (
        <>
            <CounterContainer>
                <IconButton
                    aria-label='delete'
                    size='large'
                    onClick={() => {
                        removeUnits();
                    }}
                    disabled={units <= 1}
                >
                    <RemoveRoundedIcon />
                </IconButton>
                <UnitsValue>{units}</UnitsValue>
                <IconButton
                    aria-label='delete'
                    size='large'
                    onClick={() => {
                        addUnits();
                    }}
                    disabled={units === stock}
                >
                    <AddRoundedIcon />
                </IconButton>
            </CounterContainer>
            <Button variant='contained' onClick={() => addToCart(units)}>
                Añadir al carrito
            </Button>
        </>
    );
};

const CounterContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: left;
`;

const UnitsValue = styled.div`
    font-size: 2rem;
    font-weight: 700;
    color: #222222;
`;

export default ItemCount;
