import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import ItemList from "../components/items/ItemList";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import data from "../data/data";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            if (data.length > 0) {
                setTimeout(() => {
                    resolve(data);
                }, 2000);
            } else {
                reject("no hay productos");
            }
        });

        getProducts
            .then((res) => {
                categoryId
                    ? setProducts(res.filter((product) => product.category.toLowerCase() === categoryId.toLowerCase()))
                    : setProducts(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <Container>
            {loading ? (
                <LoadingSpinner />
            ) : products.length > 0 ? (
                <ItemList products={products} />
            ) : (
                <p>No hay productos para esta categoría</p>
            )}
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
