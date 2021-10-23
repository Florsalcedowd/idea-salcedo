import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/images/logos/Logo-store-camel.png";
import ItemList from "../components/items/ItemList";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import data from "../data/data";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    

    useEffect(() => {

        const getProducts = new Promise((resolve, reject) => {
        
            if(data.length > 0) {
                setTimeout(() => {resolve(data)}, 2000);
            } else {
                reject("no hay productos");
            }
        });

        if (products.length <= 0) {
            getProducts
                .then((res) => {
                    console.log(res);
                    setProducts(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [products]);

    return (
        <Container>
            {/* <img src={logo} alt="logo" width="500px" />

            <Typography
                variant="h2"
                component="div"
                gutterBottom
                color="secondary"
            >
                ¡Próximamente!
            </Typography> */}
            {products.length > 0 ? (<ItemList products={products} />) : (<LoadingSpinner/>)}
            
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    box-sizing: border-box;
`;

export default ItemListContainer;
