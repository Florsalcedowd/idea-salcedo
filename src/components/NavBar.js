import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logos/Logo-camel.png'
import CartWidget from './CartWdiget';

const NavBar = () => {
    return (
        <NavContainer>
                <Logo src={logo} alt="Pepuno"/>
                <CartWidget/>
        </NavContainer>
    );
}

export default NavBar;

const NavContainer = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 2rem;
background-color: #ffffff;
width:100%;
box-sizing: border-box;
width: 100%;
`;

const Logo = styled.img`
height: 60px;
`;