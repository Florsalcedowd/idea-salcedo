import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Item = ({ product }) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="240"
                    image={product.pictureUrl}
                    alt={product.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CustomCardActions>
                <Price>$ {product.price}</Price>
            </CustomCardActions>
        </Card>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
`;

const Price = styled.div`
    display: flex;
    font-size: 1rem;
    color: #222222;
    font-weight: 700;
`;

const CustomCardActions = styled(CardActions)`
    align-self: bottom;
`;

export default Item;
