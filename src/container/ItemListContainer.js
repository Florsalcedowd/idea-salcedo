import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "../components/items/ItemList";
import { getFirestoreDb } from "../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import EmptyProducts from "../components/shared/EmptyProducts";
import { MainContainer, PageHeader } from "../assets/styles/SharedComponents";
import { Divider } from "@mui/material";
import ProductsSkeleton from '../components/shared/ProductsSkeleton';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    const db = getFirestoreDb();

    useEffect(() => {
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
            <PageHeader>{categoryId ? categoryId : "Todos los productos"}</PageHeader>
            <Divider light style={{ width: "100%" }} />
            {loading ? (
                <ProductsSkeleton/>
            ) : products.length > 0 ? (
                <ItemList products={products} />
            ) : (
                <EmptyProducts isCategory={categoryId ? true : false} />
            )}
        </MainContainer>
    );
};

export default ItemListContainer;
