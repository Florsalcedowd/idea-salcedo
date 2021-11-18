import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
    const navigate = useNavigate();
    return (
        <Card>
            <CardActionArea onClick={() => navigate(`/item/${product.id}`)}>
                <CardMedia
                    component='img'
                    height='240'
                    image={
                        product.picturesUrl[0]
                            ? product.picturesUrl[0]
                            : "https://www.reservacostanera.com.ar/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
                    }
                    alt={product.title}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {product.title}
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
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

/* const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
`; */

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
