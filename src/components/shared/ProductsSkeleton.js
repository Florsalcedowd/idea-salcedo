import React from "react";
import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";

const ProductsSkeleton = () => {
    const aux = [1, 2, 3, 4, 5, 6];
    return (
        <Container>
            {aux.map((item) => (
                <CardContainer key={item}>
                    <Skeleton variant='rectangular' width='100%' height={300} />

                    <Body>
                        <Skeleton variant='rectangular' width='100%' height={24} />
                        <Skeleton variant='rectangular' width='30%' height={24} />
                    </Body>
                    <ButtonSkeleton>
                        <Skeleton variant='rectangular' width='100%' height={36} />
                        <Skeleton variant='rectangular' width='100%' height={36} />
                    </ButtonSkeleton>
                </CardContainer>
            ))}
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 5px;
    border: 1px #f1f1f1 solid;
    width: 100%;
    min-width: 300px;
`;

const ButtonSkeleton = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    padding: 0 1rem 1rem 1rem;
    box-sizing: border-box;
`;

export default ProductsSkeleton;
