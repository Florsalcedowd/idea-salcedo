import React, { useContext, useState } from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";
import { EmptyCart } from "../../assets/styles/SharedComponents";
import { Drawer, IconButton, Button, Badge } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    drawerPaper: {
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

const CartWidget = () => {
    const { cart, units, total, removeItem, updateItem, clearCart } = useContext(CartContext);
    const [openDrawer, setOpenDrawer] = useState(false);

    const styles = useStyles();

    return (
        <>
            <IconButton
                aria-label='add to cart'
                color='primary'
                component='span'
                onClick={() => {
                    setOpenDrawer(true);
                }}
            >
                {cart.length > 0 ? (
                    <Badge badgeContent={cart.length} color='secondary'>
                        <ShoppingCartRoundedIcon />
                    </Badge>
                ) : (
                    <ShoppingCartRoundedIcon />
                )}
            </IconButton>

            <Drawer
                component={DrawerContainer}
                anchor='right'
                open={openDrawer}
                onClose={() => {
                    setOpenDrawer(false);
                }}
                classes={{
                    paper: styles.drawerPaper,
                }}
            >
                <DrawerHeader>
                    <div className='title'>Mi carrito</div>
                    <IconButton
                        aria-label='delete'
                        size='large'
                        onClick={() => {
                            setOpenDrawer(false);
                        }}
                    >
                        <CloseRoundedIcon />
                    </IconButton>
                </DrawerHeader>
                {cart.length > 0 ? (
                    <>
                        {cart.map((row, index) => (
                            <ItemCard key={index}>
                                <ProductImage src={row.picture} />
                                <ItemContent>
                                    <div>{row.title}</div>
                                    <div>
                                        <strong>${row.price}</strong>
                                    </div>
                                    <CounterContainer>
                                        <IconButton
                                            aria-label='delete'
                                            size='small'
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
                                            size='small'
                                            onClick={() => {
                                                updateItem(row, row.quantity + 1);
                                            }}
                                            disabled={units === row.stock}
                                        >
                                            <AddRoundedIcon />
                                        </IconButton>

                                        <IconButton
                                            aria-label='delete'
                                            size='small'
                                            onClick={() => {
                                                removeItem(row);
                                            }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </CounterContainer>
                                </ItemContent>
                            </ItemCard>
                        ))}
                        <Totals>
                            <strong>Unidades:</strong>
                            <div>{units}</div>
                        </Totals>
                        <Totals>
                            <strong>Total:</strong>
                            <div>{total}</div>
                        </Totals>
                        <Button component={Link} to='/cart' variant='contained' color='primary'>
                            Finalizar compra
                        </Button>
                        <Button
                            onClick={() => {
                                clearCart();
                            }}
                            variant='outlined'
                            color='primary'
                        >
                            Vaciar carrito
                        </Button>
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
            </Drawer>
        </>
    );
};

export default CartWidget;

const DrawerContainer = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const DrawerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    .title {
        font-size: 1.5rem;
        font-weight: 700;
    }
`;

const ItemCard = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 0.5rem;
    box-sizing: border-box;
`;

const ProductImage = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 5px;
`;

const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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

const Title = styled.div`
    font-size: 2rem;
    color: #616161;
`;

const Totals = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        font-size: 1.1rem;
    }
`;
