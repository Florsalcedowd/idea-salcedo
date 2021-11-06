import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logos/Logo-store-camel.png";
import CartWidget from "./CartWdiget";

const NavBar = () => {
    const categories = [
        "Enteritos",
        "Abrigos",
        "Jardineras",
        "Vestidos",
        "Pantalones",
        "Accesorios",
        "Amigorumis",
        "Combos",
    ];
    return (
        <NavContainer>
            <Header>
                <NavLink to={"/"}>
                    <Logo src={logo} alt='Pepuno' />
                </NavLink>

                <CartWidget />
            </Header>

            <Navigation>
                <CustomLink to={`/`} exact variant='text'>
                    Todos
                </CustomLink>
                {categories.map((category) => (
                    <CustomLink to={`/category/${category}`} exact variant='text'>
                        {category}
                    </CustomLink>
                ))}
            </Navigation>
        </NavContainer>
    );
};

export default NavBar;

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    box-sizing: border-box;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #ffffff;
    width: 100%;
    box-sizing: border-box;
    width: 100%;
`;

const Navigation = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #ba9568;
    color: #ffffff;
    width: 100%;
    gap: 0.5rem;
    padding: 0.5rem;
    box-sizing: border-box;
`;

const CustomLink = styled(NavLink)`
    color: #ffffff !important;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 400;
    font-size: 0.8rem;

    &:hover {
        background-color: rgba(256, 256, 256, 0.1);
    }

    .activeLink {
        border-bottom: 2px solid #ffffff;
    }
`;

const Logo = styled.img`
    height: 60px;
`;
