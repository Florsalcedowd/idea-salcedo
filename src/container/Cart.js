import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { EmptyCart, MainContainer, PageHeader } from "../assets/styles/SharedComponents";
import { Divider, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, units, total, removeItem, updateItem, clearCart } = useContext(CartContext);

    return (
        <MainContainer>
            <PageHeader>Mi carrito</PageHeader>
            <Divider light style={{ width: "100%" }} />
            {cart.length > 0 ? (
                <>
                    <HeaderRow>
                        <HeaderCell justify='left'>Producto</HeaderCell>
                        <HeaderCell justify='right'>Precio</HeaderCell>
                        <HeaderCell justify='center'>Cantidad</HeaderCell>
                        <HeaderCell justify='right'>Subtotal</HeaderCell>
                    </HeaderRow>
                    {cart.map((row) => (
                        <Row key={row.id}>
                            <ProductImage src={row.picture} alt={row.title} />
                            <RowContent>
                                <RowCell align='left' justify='left'>
                                    {row.title}
                                </RowCell>
                                <RowCell justify='right'>{row.price}</RowCell>
                                <RowCell justify='right'>
                                    <CounterContainer>
                                        <IconButton
                                            aria-label='delete'
                                            size='large'
                                            onClick={() => {
                                                updateItem(row, row.quantity - 1);
                                            }}
                                            disabled={row.quantity <= 1}
                                        >
                                            <RemoveRoundedIcon />
                                        </IconButton>
                                        <UnitsValue>{row.quantity}</UnitsValue>
                                        <IconButton
                                            aria-label='delete'
                                            size='large'
                                            onClick={() => {
                                                updateItem(row, row.quantity + 1);
                                            }}
                                            disabled={units === row.stock}
                                        >
                                            <AddRoundedIcon />
                                        </IconButton>

                                        <IconButton
                                            aria-label='delete'
                                            size='large'
                                            onClick={() => {
                                                removeItem(row);
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </CounterContainer>
                                </RowCell>
                                <RowCell justify='right'>{row.subtotal}</RowCell>
                            </RowContent>
                        </Row>
                    ))}
                    <Divider light style={{ width: "100%" }} />
                    <TotalsRow>
                        <TotalCell>
                            <div className='title'>Unidades:</div>
                            <div className='value'>{units}</div>
                        </TotalCell>
                        <TotalCell>
                            <div className='title'>Total:</div>
                            <div className='value'>${total}</div>
                        </TotalCell>
                    </TotalsRow>
                    <ButtonContainer>
                        <Button
                            onClick={() => {
                                clearCart();
                            }}
                            variant='outlined'
                            color='primary'
                        >
                            Vaciar carrito
                        </Button>
                        <Button component={Link} to='/checkout' variant='contained' color='primary'>
                            Finalizar Compra
                        </Button>
                    </ButtonContainer>
                </>
            ) : (
                <EmptyCart>
                    <AddShoppingCartRoundedIcon size='large' />
                    <Title>¡Tu carrito está vacío!</Title>
                    <Button component={Link} to='/' variant='contained' color='primary'>
                        Ir a comprar
                    </Button>
                </EmptyCart>
            )}
        </MainContainer>
    );
};

export default Cart;

const Row = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    width: 100%;
`;

const RowContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 100px 250px 100px;
    justify-content: center;
    align-items: center;
`;

const RowCell = styled.div`
    display: flex;
    justify-self: ${(props) => (props.justify ? props.justify : "center")};
    align-self: ${(props) => (props.align ? props.align : "center")};
    padding: 0 0.5rem 0 1rem;
`;

const HeaderRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 100px 250px 100px;
    font-size: 1.1rem;
    font-weight: 400;
    width: 100%;
    padding: 1rem 0;
`;

const HeaderCell = styled.div`
    display: flex;
    justify-self: ${(props) => (props.justify ? props.justify : "center")};
    align-self: ${(props) => (props.align ? props.align : "center")};
    font-size: 0.8rem;
    text-transform: uppercase;
    color: #616161;
`;

const ProductImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
`;

const CounterContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: left;
    margin: 0;
    padding: 0;
`;

const UnitsValue = styled.div`
    font-size: 1rem;
    font-weight: 700;
    color: #222222;
`;

const TotalsRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-end;
    align-items: center;
    justify-self: flex-end;
    width: 100%;
`;

const TotalCell = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 0.5rem;
    .title {
        font-size: 1.5rem;
        font-weight: 700;
    }
    .value {
        font-size: 1.5rem;
    }
`;

const Title = styled.div`
    font-size: 2rem;
    color: #616161;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    width: 100%;
`;
