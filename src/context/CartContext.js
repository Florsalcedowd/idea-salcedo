import React, { useState } from "react";

const CartContext = React.createContext();

const CartContextFunction = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [unidades, setUnidades] = useState(0);
    const [total, setTotal] = useState(0);

    const addItem = (product, quantity) => {
        const itemExists = cart.find((item) => item.id === product.id);

        if (!itemExists) {
            setCart([
                ...cart,
                {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    quantity: quantity,
                    subtotal: product.price * quantity,
                },
            ]);
            setTotal(total + product.price * quantity);
            setUnidades(unidades + 1);
        } else {
            const cartAux = cart.map((item) => {
                if (item.id === product.id) {
                    item.quantity += quantity;
                    item.subtotal += product.price * quantity;
                }
                return item;
            });
            setCart(cartAux);
            setTotal(total + product.price * quantity);
        }

        console.table(cart);
    };

    const removeItem = (product) => {
        const itemExists = cart.find((item) => item.id === product.id);
        if (itemExists) {
            setCart(cart.filter((item) => item.id != product.id));
            setUnidades(unidades - 1);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, unidades, total, addItem, clearCart, removeItem }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContextFunction, CartContext };
