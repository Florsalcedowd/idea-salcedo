import React, { useContext, useState } from "react";
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ImageGallery from "./ImageGallery";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { CartContext } from "../../context/CartContext";
import swal from "sweetalert";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const ItemDetail = (props) => {
    const { item } = props;
    const [activeTab, setActiveTab] = useState(0);

    const [added, setAdded] = useState(false);
    const { addItem } = useContext(CartContext);

    const addToCart = (units) => {
        setAdded(true);
        const product = {
            id: item.id,
            title: item.title,
            price: item.price,
        };

        console.log(product);
        console.log("Cantidad de unidades en detalle" + units);
        addItem(product, units);
        swal("¡Producto añadido!", "Ve al carrito para finalizar la compra", "success");
    };

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <MainContainer>
        <BreadCrumbs></BreadCrumbs>
            <GridContainer>
                <ImageGallery images={item.picturesUrl} />
                <BuyPanel>
                    <ProductTitle>{item.title}</ProductTitle>
                    <Price>${item.price}</Price>
                    {!added ? (
                        <ItemCount stock={item.stock} addToCart={addToCart} />
                    ) : (
                        <Button component={Link} to='/cart' variant='contained' color="secondary">
                            Finalizar compra
                        </Button>
                    )}
                </BuyPanel>
            </GridContainer>
            <TabContainer value={activeTab}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant='scrollable'
                    scrollButtons='auto'
                    aria-label='scrollable auto tabs example'
                >
                    <Tab label='Detalles del producto' />
                    <Tab label='Opiniones' />
                </Tabs>

                <TabPanel value={activeTab} index={0}>
                    {item.description}
                </TabPanel>
                <TabPanel value={activeTab} index={1}>
                    Aún no hay comentarios para el producto
                </TabPanel>
            </TabContainer>
        </MainContainer>
    );
};

export default ItemDetail;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    box-sizing: border-box;
`;

const BreadCrumbs = styled.div`
    display: flex;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    box-sizing: border-box;
    gap: 2rem;
    flex-wrap: wrap;
`;

const BuyPanel = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px #f1f1f1 solid;
    padding: 2rem;
    gap: 1rem;
`;

const ProductTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: #222222;
    line-height: normal;
`;

const Price = styled.div`
    font-size: 2rem;
    font-weight: 400;
    color: #222222;
`;

const TabContainer = styled.div`
    background-color: #fff;
`;

