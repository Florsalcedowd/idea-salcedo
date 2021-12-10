import React from "react";
import styled from "styled-components";
import { MainContainer } from "../assets/styles/SharedComponents";
import image from "../assets/images/media/404Error-pana.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <MainContainer>
            <Container>
                <Image src={image} alt='Pagina no encontrada' />
                <Title>Oops.. no encontramos la página que buscabas</Title>
                <p>La página no existe o ha sido deshabilitada</p>
                <Button component={Link} to={"/"}>
                    Volver al inicio
                </Button>
            </Container>
        </MainContainer>
    );
};

export default NotFound;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Image = styled.img`
    width: 300px;
`;

const Title = styled.h1`
    color: #ba9568;
    font-size: 1.2rem;
`;
