import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, units, total } = useContext(CartContext);
    return (
        <>
            <p>
                El total del carrito es {total} y tenés {units} unidades
            </p>
            {cart.map((item) => (
                <div>
                    <h2>nombre:{item.title}</h2>
                    <h2>precio:{item.price}</h2>
                    <h2>cantidad:{item.quantity}</h2>
                    <h2>subtotal:{item.subtotal}</h2>
                </div>
            ))}
        </>
    );
};

export default Cart;
