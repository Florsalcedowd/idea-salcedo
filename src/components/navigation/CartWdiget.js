import React, { useContext, useState } from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { CartContext } from "../../context/CartContext";
import { DrawerContainer, DrawerHeader, EmptyCart, Title, Totals } from "../../assets/styles/SharedComponents";
import { Drawer, IconButton, Button, Badge } from "@mui/material";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { makeStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";
import CartItemCard from "../items/CartItemCard";

const useStyles = makeStyles({
    drawerPaper: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

const CartWidget = () => {
    const { cart, units, total, clearCart } = useContext(CartContext);
    const [openDrawer, setOpenDrawer] = useState(false);

    const styles = useStyles();
    const navigate = useNavigate();

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
                {units > 0 ? (
                    <Badge badgeContent={units} color='secondary'>
                        <ShoppingCartRoundedIcon />
                    </Badge>
                ) : (
                    <ShoppingCartRoundedIcon />
                )}
            </IconButton>

            <Drawer
                anchor='right'
                open={openDrawer}
                onClose={() => {
                    setOpenDrawer(false);
                }}
                classes={{
                    paper: styles.drawerPaper,
                }}
            >
                <DrawerContainer>
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
                                <CartItemCard product={row} key={index} hasActions={true} />
                            ))}
                            <Totals>
                                <strong>Unidades:</strong>
                                <div>{units}</div>
                            </Totals>
                            <Totals>
                                <strong>Total:</strong>
                                <div>${total}</div>
                            </Totals>
                            <Button
                                onClick={() => {
                                    setOpenDrawer(false);
                                    navigate("/cart");
                                }}
                                variant='contained'
                                color='primary'
                            >
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
                            <AddShoppingCartRoundedIcon size='large' style={{ fill: "#a8a8a8", fontSize: 50 }} />
                            <Title color='#a8a8a8' fontSize='1.2rem'>
                                ¡Tu carrito está vacío!
                            </Title>
                            <Button
                                onClick={() => {
                                    setOpenDrawer(false);
                                    navigate("/");
                                }}
                                variant='contained'
                                color='primary'
                            >
                                Ir a comprar
                            </Button>
                        </EmptyCart>
                    )}
                </DrawerContainer>
            </Drawer>
        </>
    );
};

export default CartWidget;
