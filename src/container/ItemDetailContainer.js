import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import ItemDetail from "../components/items/ItemDetail";
import LoadingSpinner from "../components/shared/LoadingSpinner";
/* import data from "../data/data"; */
import { getFirestoreDb } from "../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const db = getFirestoreDb();

    useEffect(() => {
        setLoading(true);
        /* const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(data.find((i) => i.id === id));
            }, 1000);
        });

        getItems
            .then((res) => {
                console.log(res);
                setProduct(res);
            })
            .finally(() => setLoading(false)); */
        const getProductByID = async () => {
            const productRef = collection(db, "products");
            const queryCollection = query(productRef, where("id", "==", id));
            try {
                const querySnapshot = await getDocs(queryCollection);
                let aux = {};
                querySnapshot.forEach((doc) => {
                    aux = { ...doc.data() };
                });
                setProduct(aux);
            } catch (error) {
                console.log("Ha ocurrido un error", error);
            } finally {
                setLoading(false);
            }
        };
        getProductByID();
    }, [id, db]);

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
