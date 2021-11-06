import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import ItemDetail from "../components/items/ItemDetail";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import data from "../data/data";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(data.find((i) => i.id === id));
            }, 1000);
        });

        getItems
            .then((res) => {
                console.log(res);
                setProduct(res);
            })
            .finally(() => setLoading(false));
    }, [id]);

    return <Container>{loading ? <LoadingSpinner /> : <ItemDetail item={product} />}</Container>;
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 4rem;
    max-width: 100vw;
    box-sizing: border-box;
`;

export default ItemDetailContainer;
