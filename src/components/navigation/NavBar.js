import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logos/Logo-store-camel.png";
import CartWidget from "./CartWdiget";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

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

    const categoriesMobile = [
        "Todos",
        "Enteritos",
        "Abrigos",
        "Jardineras",
        "Vestidos",
        "Pantalones",
        "Accesorios",
        "Amigorumis",
        "Combos",
    ];

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (option, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        if (index === 0) {
            navigate(`/`);
        } else {
            navigate(`/category/${option}`);
        }
    };

    const buttonClose = () => {
        setAnchorEl(null);
    };

    return (
        <NavContainer>
            <Header>
                <NavLink to={"/"}>
                    <Logo src={logo} alt='Pepuno' />
                </NavLink>

                <CartWidget />
            </Header>

            <Navigation>
                <CustomLink to={`/`} variant='text'>
                    Todos
                </CustomLink>
                {categories.map((category, index) => (
                    <CustomLink to={`/category/${category}`} key={index} variant='text'>
                        {category}
                    </CustomLink>
                ))}
            </Navigation>
            <NavigationMobile>
                <Button
                    id='basic-button'
                    aria-controls='basic-menu'
                    aria-haspopup='true'
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    style={{ width: "100%", color: "#ffffff" }}
                    startIcon={<MenuRoundedIcon style={{ color: "#ffffff" }} />}
                >
                    Categorías
                </Button>

                <Menu
                    id='basic-menu'
                    anchorEl={anchorEl}
                    open={open}
                    onClose={buttonClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    {categoriesMobile.map((option, index) => (
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={() => handleClose(option, index)}
                            style={{ width: "100vw", padding: "0.5rem 1rem" }}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </NavigationMobile>
        </NavContainer>
    );
};

export default NavBar;

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    background-color: #ffffff;
    z-index: 99;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
    background-color: #ffffff;
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

    @media (max-width: 768px) {
        display: none;
    }
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

const NavigationMobile = styled(Navigation)`
    display: none;
    @media (max-width: 768px) {
        display: flex;
    }
`;
