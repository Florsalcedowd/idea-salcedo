import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import ItemDetail from "../components/items/ItemDetail";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import { getFirestoreDb } from "../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import { MainContainer } from "../assets/styles/SharedComponents";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    const db = getFirestoreDb();

    useEffect(() => {
        setLoading(true);
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

    return <MainContainer>{loading ? <LoadingSpinner /> : <ItemDetail item={product} />}</MainContainer>;
};

export default ItemDetailContainer;
