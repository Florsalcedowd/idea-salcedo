import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styled from "styled-components";
import { DrawerHeader, Totals } from "../../assets/styles/SharedComponents";
import CartItemCard from "../items/CartItemCard";

const CartSummary = () => {
    const { cart, units, total } = useContext(CartContext);

    return (
        <SummaryContainer>
            <DrawerHeader>
                <div className='title'>Mi carrito</div>
            </DrawerHeader>
            {cart.map((row, index) => (
                <CartItemCard product={row} key={index} hasActions={false} />
            ))}
            <Totals>
                <strong>Unidades:</strong>
                <div>{units}</div>
            </Totals>
            <Totals>
                <strong>Total:</strong>
                <div>${total}</div>
            </Totals>
        </SummaryContainer>
    );
};

export default CartSummary;

const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #f1f1f1;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
    min-width: 300px;
    height: max-content;
    box-sizing: border-box;
    position: sticky;
    top: calc(150px + 2rem);

    @media (max-width: 700px) {
        min-width: unset;
        width: 100%;
        position: relative;
        top: unset;
    }
`;
