import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const ItemListContainer = () => {

    const categories = ["Enteritos", "Sacos", "Buzos", "Jardineras","Pantalones", "Accesorios", "Amigorumis"]

    return (
        <Container>
            {categories.map(category => (<CustomButton variant="text">{category}</CustomButton>))}
        </Container>
    );
}


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #BA9568;
    color: #ffffff;
    width: 100%;
    gap: 1rem;
    padding: 0.5rem;
    box-sizing: border-box;
`;

const CustomButton = styled(Button)`
    color: #ffffff !important;
`;

export default ItemListContainer;