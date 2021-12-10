import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const Item = ({ product }) => {
    const { addItem } = useContext(CartContext);

    const navigate = useNavigate();

    const addToCart = () => {
        addItem(product, 1);
        Swal.fire("¡Producto añadido!", "Ve al carrito para finalizar la compra", "success");
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
                <Button component={Link} to={`/item/${product.id}`} variant='text' color='primary'>
                    Ver detalle
                </Button>
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
