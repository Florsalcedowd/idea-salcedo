import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logos/Logo-store-camel.png'

const ItemListContainer = () => {

    return (
        <Container>
            <img src={logo} alt="logo" width="500px"/>

      <Typography variant="h2" component="div" gutterBottom color="secondary">
        ¡Próximamente!
      </Typography>
        </Container>
    );
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items:center;
    justify-content: center;
    min-height: 80vh;
`;

export default ItemListContainer;