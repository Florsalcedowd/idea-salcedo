import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import logo from "../../assets/images/logos/Logo-store-camel.png";
import CartWidget from "./CartWdiget";

const NavBar = () => {
    const categories = [
        "Enteritos",
        "Sacos",
        "Buzos",
        "Jardineras",
        "Pantalones",
        "Accesorios",
        "Amigorumis",
    ];
    return (
        <NavContainer>
            <Header>
                <Logo src={logo} alt="Pepuno" />
                <CartWidget />
            </Header>

            <Navigation>
                {categories.map((category) => (
                    <CustomButton variant="text">{category}</CustomButton>
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
    background-color: #BA9568;
    color: #ffffff;
    width: 100%;
    gap: 1rem;
    padding: 0.5rem;
    box-sizing: border-box;
`;

const CustomButton = styled(Button)`
    color: #ffffff !important;
`;

const Logo = styled.img`
    height: 60px;
`;
