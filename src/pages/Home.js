import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import ItemListContainer from '../container/ItemListContainer';

const Home = () => {
    return (
        <Container>
      <NavBar/>
      <ItemListContainer/>
    </Container>
    );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`