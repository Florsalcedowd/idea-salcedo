import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { CartContext } from "../../context/CartContext";
import swal from "sweetalert";
import { CounterContainer, UnitsValue } from "../../assets/styles/SharedComponents";

const Item = ({ product }) => {
    const { addItem } = useContext(CartContext);

    const [units, setUnits] = useState(1);
    const [itemStock, setItemStock] = useState(product.stock);
    const navigate = useNavigate();

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

    const addToCart = () => {
        addItem(product, units);
        swal("¡Producto añadido!", "Ve al carrito para finalizar la compra", "success");
        setUnits(1);
    };

    return (
        <CardContainer>
            <ActionPanel onClick={() => navigate(`/item/${product.id}`)}>
                <Image src={product.image} />
                <Content>
                    <Title>{product.title}</Title>
                    <Price>${product.price}</Price>
                </Content>
            </ActionPanel>
            <CardActions>
                <CounterContainer>
                    <IconButton
                        aria-label='delete'
                        size='small'
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
                        size='small'
                        onClick={() => {
                            addUnits();
                        }}
                        disabled={units === product.stock}
                    >
                        <AddRoundedIcon />
                    </IconButton>
                </CounterContainer>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={() => {
                        addToCart();
                    }}
                >
                    Añadir al carrito
                </Button>
            </CardActions>
        </CardContainer>
    );
};

/* const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
`; */

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 5px;
    border: 1px #f1f1f1 solid;
    width: 100%;
`;

const CardActions = styled.div`
    align-self: flex-end;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    box-sizing: border-box;
    margin-bottom: 0;
`;

const ActionPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    &:hover {
        cursor: pointer;
    }
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;

const Title = styled.h1`
    font-size: 1rem;
    font-weight: 400;
    text-align: left;
    padding: 0 1rem;
`;

const Price = styled.h1`
    font-size: 1rem;
    font-weight: 700;
    text-align: left;
    padding: 0 1rem;
    margin-bottom: 0;
`;

export default Item;
