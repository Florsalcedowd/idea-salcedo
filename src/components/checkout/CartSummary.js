import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styled from "styled-components";
import { DrawerHeader, ItemCard, ItemContent, ProductImage, Totals } from "../../assets/styles/SharedComponents";

const CartSummary = () => {
    const { cart, units, total } = useContext(CartContext);

    return (
        <SummaryContainer>
            <DrawerHeader>
                <div className='title'>Mi carrito</div>
            </DrawerHeader>
            {cart.map((row, index) => (
                <ItemCardCustom key={index}>
                    <ProductImage src={row.picture} />
                    <ItemContentCustom>
                        <NameRow>
                            {row.title} <MutedText>x{row.quantity}</MutedText>
                        </NameRow>
                        <strong>${row.price}</strong>
                    </ItemContentCustom>
                </ItemCardCustom>
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

const MutedText = styled.p`
    color: #a8a8a8;
    font-size: 1rem;
`;

const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid #f1f1f1;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
    min-width: 300px;
`;

const NameRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.3rem;
`;

const ItemContentCustom = styled(ItemContent)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

const ItemCardCustom = styled(ItemCard)`
    align-items: center;
`;
