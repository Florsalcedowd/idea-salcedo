import React, { useContext, useState } from "react";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { CartContext } from "../../context/CartContext";
import {
    CounterContainer,
    DrawerContainer,
    DrawerHeader,
    EmptyCart,
    ItemCard,
    ItemContent,
    ItemTitle,
    ProductImage,
    Title,
    Totals,
    UnitsValue,
} from "../../assets/styles/SharedComponents";
import { Drawer, IconButton, Button, Badge } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { makeStyles } from "@material-ui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    drawerPaper: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
});

const CartWidget = () => {
    const { cart, units, total, removeItem, updateItem, clearCart } = useContext(CartContext);
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
                {cart.length > 0 ? (
                    <Badge badgeContent={cart.length} color='secondary'>
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
                                <ItemCard key={index}>
                                    <ProductImage src={row.picture} />
                                    <ItemContent>
                                        <ItemTitle>
                                            <div>{row.title}</div>
                                            <div>
                                                <strong>${row.price}</strong>
                                            </div>
                                        </ItemTitle>
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
                            <AddShoppingCartRoundedIcon size='large' />
                            <Title>¡Tu carrito está vacío!</Title>
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
