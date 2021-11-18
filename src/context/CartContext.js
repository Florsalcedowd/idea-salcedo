import React, { useState } from "react";

const CartContext = React.createContext();

const CartContextFunction = ({ children }) => {
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) !== null ? JSON.parse(localStorage.getItem("cart")) : []
    );
    const [units, setUnits] = useState(
        localStorage.getItem("cartTotal") !== null ? Number(localStorage.getItem("cartTotal")) : 0
    );
    const [total, setTotal] = useState(
        localStorage.getItem("cartUnits") !== null ? Number(localStorage.getItem("cartUnits")) : 0
    );

    const getLocalCart = () => {
        const localCart = JSON.parse(localStorage.getItem("cart"));
        if (localCart != null && localCart.length > 0) {
            setCart(localCart);
        }
    };

    const addItem = (product, quantity) => {
        const itemExists = cart.find((item) => item.id === product.id);

        if (!itemExists) {
            const cartAux = [
                ...cart,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: quantity,
                    subtotal: product.price * quantity,
                },
            ];

            //SET STATE
            setCart(cartAux);
            setTotal(total + product.price * quantity);
            setUnits(units + 1);

            //SET LOCAL STORAGE
            localStorage.setItem("cart", JSON.stringify(cartAux));
            localStorage.setItem("cartTotal", JSON.stringify(total + product.price * quantity));
            localStorage.setItem("cartUnits", JSON.stringify(units + 1));
        } else {
            const cartAux = cart.map((item) => {
                if (item.id === product.id) {
                    item.quantity += quantity;
                    item.subtotal += product.price * quantity;
                }
                return item;
            });

            //SET STATE
            setCart(cartAux);
            setTotal(total + product.price * quantity);

            //SET LOCAL STORAGE
            localStorage.setItem("cart", JSON.stringify(cartAux));
            localStorage.setItem("cartTotal", JSON.stringify(total + product.price * quantity));
        }
    };

    const updateItem = (product, quantity) => {
        const cartAux = cart.map((item) => {
            if (item.id === product.id) {
                setTotal(total - item.subtotal);
                localStorage.setItem("cartTotal", JSON.stringify(total - item.subtotal));
                item.quantity = quantity;
                item.subtotal = product.price * quantity;
            }
            return item;
        });

        // SET STATE
        setCart(cartAux);
        setTotal(total + product.price * quantity);

        // SET LOCAL STORAGE
        localStorage.setItem("cart", JSON.stringify(cartAux));
        localStorage.setItem("cartTotal", JSON.stringify(total + product.price * quantity));
    };

    const removeItem = (product) => {
        const itemExists = cart.find((item) => item.id === product.id);
        if (itemExists) {
            const cartAux = cart.filter((item) => item.id !== product.id);

            // SET STATE
            setCart(cartAux);
            setUnits(units - 1);
            setTotal(total - product.subtotal);

            // SET LOCAL STORAGE
            localStorage.setItem("cart", JSON.stringify(cart));
            localStorage.setItem("cartUnits", JSON.stringify(units - 1));
            localStorage.setItem("cartTotal", JSON.stringify(total - product.subtotal));
        }
    };

    const clearCart = () => {
        setCart([]);
        localStorage.setItem("cart", JSON.stringify([]));
        localStorage.setItem("cartTotal", JSON.stringify(0));
        localStorage.setItem("cartUnits", JSON.stringify(0));
    };

    const isInCart = (productID) => {
        return cart.find((item) => item.id === productID);
    };

    return (
        <CartContext.Provider
            value={{ cart, units, total, addItem, clearCart, removeItem, updateItem, isInCart, getLocalCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContextFunction, CartContext };
