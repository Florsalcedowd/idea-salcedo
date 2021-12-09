import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const LoadingSpinner = ({ products }) => {
    return (
        <Container>
            <CircularProgress />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    padding: 5rem 0;
`;

export default LoadingSpinner;
