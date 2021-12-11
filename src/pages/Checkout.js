import React from "react";
import styled from "styled-components";
import { MainContainer, PageHeader } from "../assets/styles/SharedComponents";
import { Divider } from "@mui/material";
import OrderForm from "../components/checkout/OrderForm";
import CartSummary from "../components/checkout/CartSummary";

const Checkout = () => {
    return (
        <MainContainer>
            <PageHeader>Checkout</PageHeader>
            <Divider light style={{ width: "100%" }} />
            <ContentGrid>
                <OrderForm></OrderForm>
                <CartSummary></CartSummary>
            </ContentGrid>
        </MainContainer>
    );
};

export default Checkout;

const ContentGrid = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 4rem;

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column-reverse;
    }
`;
