import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ImageGallery from "./ImageGallery";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";

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

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const ItemDetail = ({ item }) => {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        console.log(item);
    }, []);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };
    return (
        <MainContainer>
            <GridContainer>
                <ImageGallery images={item.picturesUrl} />
                <BuyPanel>
                    <ProductTitle>{item.title}</ProductTitle>
                    <Price>${item.price}</Price>
                    <Button variant='contained'>Añadir al carrito</Button>
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

const BreadCrumbs = styled.div``;

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
