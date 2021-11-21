import React from "react";
import styled from "styled-components";
import image from "../../assets/images/media/Empty-pana.svg";

const EmptyProducts = ({ isCategory }) => {
    return (
        <Container>
            <Image src={image} />
            {isCategory ? (
                <Title>No encontramos productos para esta categoría</Title>
            ) : (
                <Title>No encontramos productos</Title>
            )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
`;

const Image = styled.img`
    width: 200px;
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 200;
`;

export default EmptyProducts;
