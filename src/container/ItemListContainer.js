import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import ItemList from "../components/items/ItemList";
import LoadingSpinner from "../components/shared/LoadingSpinner";
/* import data from "../data/data"; */
import { getFirestoreDb } from "../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import EmptyProducts from "../components/shared/EmptyProducts";
import { MainContainer } from '../assets/styles/SharedComponents';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    const db = getFirestoreDb();

    useEffect(() => {
        /* const getProducts = new Promise((resolve, reject) => {
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
            .finally(() => setLoading(false)); */

        const getProducts = async () => {
            const productRef = collection(db, "products");
            const queryCollection = categoryId
                ? query(productRef, where("category", "==", categoryId))
                : query(productRef);
            try {
                const querySnapshot = await getDocs(queryCollection);
                const aux = [];
                querySnapshot.forEach((doc) => {
                    aux.push(doc.data());
                });
                setProducts(aux);
            } catch (error) {
                console.log("Ha ocurrido un error", error);
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, [categoryId, db]);

    return (
        <MainContainer>
            {loading ? (
                <LoadingSpinner />
            ) : products.length > 0 ? (
                <ItemList products={products} />
            ) : (
                <EmptyProducts isCategory={categoryId ? true : false} />
            )}
        </MainContainer>
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
