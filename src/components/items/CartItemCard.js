import React from "react";
import styled from "styled-components";
import CardItemCounter from "./CardItemCounter";
import {
    ItemCard,
    ItemContent,
    ItemTitle,
    MutedText,
    NameRow,
    ProductImage,
} from "../../assets/styles/SharedComponents";

const CartItemCard = ({ product, hasActions }) => {
    return (
        <>
            {hasActions ? (
                <ItemCard>
                    <ProductImage src={product.picture} />
                    <ItemContent>
                        <ItemTitle>
                            <div>{product.title}</div>
                            <div>
                                <strong>${product.price}</strong>
                            </div>
                        </ItemTitle>
                        <CardItemCounter product={product} />
                    </ItemContent>
                </ItemCard>
            ) : (
                <ItemCardCustom>
                    <ProductImage src={product.picture} />
                    <ItemContentCustom>
                        <NameRow>
                            {product.title} <MutedText>x{product.quantity}</MutedText>
                        </NameRow>
                        <strong>${product.price}</strong>
                    </ItemContentCustom>
                </ItemCardCustom>
            )}
        </>
    );
};

const ItemContentCustom = styled(ItemContent)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

const ItemCardCustom = styled(ItemCard)`
    align-items: center;
`;

export default CartItemCard;
