import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const ItemList = ({products}) => {

    return (
        <Container>
        {products.map((product, index) => <Item product={product} key={index}/>)}
        </Container>
    );
}


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    width:100%;
    /* padding: 4rem; */
    box-sizing: border-box;
`;

export default ItemList;