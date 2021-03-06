import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { MenuItem, TextField } from "@mui/material";
import axios from "axios";
import LoadingSpinner from "../shared/LoadingSpinner";
import { CartContext } from "../../context/CartContext";
import { getFirestoreDb, fb } from "../../firebase/firebaseConfig";
import { collection, updateDoc, addDoc, doc } from "firebase/firestore";
import LoadingButton from "@mui/lab/LoadingButton";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const OrderForm = () => {
    const { cart, units, total, clearCart } = useContext(CartContext);

    const db = getFirestoreDb();
    const navigate = useNavigate();

    const [orderId, setOrderId] = useState("");
    const [loading, setLoading] = useState(false);

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const [shippingInfo, setShippingInfo] = useState({
        street: "",
        number: "",
        floor: "",
        apartment: "",
        city: "",
        locality: "",
        zipCode: "",
    });

    const [cities, setCities] = useState([]);

    useEffect(() => {
        if (total === 0 && !(cart.length < 0) && units === 0 && orderId === "") {
            navigate("/");
        }
        if (total !== 0) {
            axios
                .get(`https://apis.datos.gob.ar/georef/api/provincias`)
                .then((res) => {
                    setCities(res.data.provincias);
                })
                .catch((error) => {
                    console.log("No se pudieron obtener las provincias");
                });
        }
    }, [cities, total, navigate, orderId, cart, units]);

    const handlePersonalData = (evt) => {
        setUserInfo((prevState) => {
            return { ...prevState, [evt.target.name]: evt.target.value };
        });
    };

    const handleShippingInfo = (evt) => {
        setShippingInfo((prevState) => {
            return { ...prevState, [evt.target.name]: evt.target.value };
        });
    };

    const resetForm = () => {
        setUserInfo({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        });
        setShippingInfo({
            street: "",
            number: "",
            floor: "",
            apartment: "",
            city: "",
            locality: "",
            zipCode: "",
        });
    };

    const submitForm = (event) => {
        event.preventDefault();
        setLoading(true);
        const orderInfo = {
            buyer: userInfo,
            items: cart,
            shippingInfo: shippingInfo,
            units: units,
            priceTotal: total,
            date: fb.firestore.Timestamp.now().toDate(),
        };

        postOrder(orderInfo).then((res) => {
            clearCart();
            navigate("/");
        });
    };

    const postOrder = async (orderInfo) => {
        try {
            const addedOrder = await addDoc(collection(db, "orders"), orderInfo);
            setOrderId(addedOrder.id);
            Swal.fire({
                icon: "success",
                title: "??Muchas gracias por tu compra!",
                html: `El ID de tu orden es <b>${addedOrder.id}</b>`,
            });

            cart.forEach(async (prod) => {
                await updateDoc(doc(db, "products", prod.id), {
                    stock: prod.stock - prod.quantity,
                });
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No hemos podido tomar tu orden, por favor intenta de nuevo m??s tarde",
                footer: `<p style="font-size: 0.8rem; color: #a8a8a8a8">${error}</p>`,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormContainer onSubmit={submitForm}>
            <Header>Datos personales</Header>
            <FormGrid onSubmit={submitForm}>
                <TextField
                    required
                    fullWidth
                    id='firstName'
                    name='firstName'
                    label='Nombre'
                    type='text'
                    value={userInfo.firstName}
                    onChange={handlePersonalData}
                />
                <TextField
                    required
                    fullWidth
                    id='lastName'
                    name='lastName'
                    label='Apellido'
                    type='text'
                    value={userInfo.lastName}
                    onChange={handlePersonalData}
                />
                <TextField
                    required
                    fullWidth
                    id='email'
                    name='email'
                    label='E-Mail'
                    type='email'
                    value={userInfo.email}
                    onChange={handlePersonalData}
                />
                <TextField
                    required
                    fullWidth
                    id='phone'
                    name='phone'
                    label='Tel??fono'
                    value={userInfo.phone}
                    onChange={handlePersonalData}
                />
            </FormGrid>
            <Header>Datos de env??o</Header>
            {cities ? (
                <FormGrid onSubmit={submitForm}>
                    <TextField
                        id='city'
                        select
                        label='Provincia'
                        name='city'
                        value={shippingInfo.city}
                        onChange={handleShippingInfo}
                        disabled={cities.length > 0 ? false : true}
                    >
                        {cities.map((option) => (
                            <MenuItem key={option.id} value={option.nombre}>
                                {option.nombre}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        required
                        fullWidth
                        id='locality'
                        name='locality'
                        label='Localidad'
                        type='text'
                        value={shippingInfo.locality}
                        onChange={handleShippingInfo}
                    />
                    <TextField
                        required
                        fullWidth
                        id='zipCode'
                        name='zipCode'
                        label='C??digo Postal'
                        type='text'
                        value={shippingInfo.zipCode}
                        onChange={handleShippingInfo}
                    />
                    <TextField
                        required
                        fullWidth
                        id='street'
                        name='street'
                        label='Calle'
                        type='text'
                        value={shippingInfo.street}
                        onChange={handleShippingInfo}
                    />
                    <TextField
                        required
                        fullWidth
                        id='number'
                        name='number'
                        label='N??mero'
                        type='text'
                        value={shippingInfo.number}
                        onChange={handleShippingInfo}
                    />
                    <TextField
                        fullWidth
                        id='floor'
                        name='floor'
                        label='Piso'
                        type='text'
                        value={shippingInfo.floor}
                        onChange={handleShippingInfo}
                    />
                    <TextField
                        fullWidth
                        id='apartment'
                        name='apartment'
                        label='Departamento'
                        type='text'
                        value={shippingInfo.apartment}
                        onChange={handleShippingInfo}
                    />
                </FormGrid>
            ) : (
                <LoadingSpinner></LoadingSpinner>
            )}
            <Box sx={{ mb: 2 }}>
                <div>
                    <LoadingButton loading={loading} variant='contained' type='submit' sx={{ mt: 1, mr: 1 }}>
                        Finalizar compra
                    </LoadingButton>
                    <Button onClick={resetForm} sx={{ mt: 1, mr: 1 }}>
                        Resetear
                    </Button>
                </div>
            </Box>
        </FormContainer>
    );
};

export default OrderForm;

const FormContainer = styled.form`
    width: 100%;
`;

const FormGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding-bottom: 2rem;
`;

const Header = styled.h1`
    font-size: 1.1rem;
    color: #ba9568;
    font-weight: 700;
`;
