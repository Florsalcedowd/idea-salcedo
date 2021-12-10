import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

const Footer = () => {
    return (
        <FooterContainer>
            <Socials>
                <IconButton target='_blank' href='https://github.com/Florsalcedowd' aria-label='delete'>
                    <GitHubIcon style={{ fill: "#ffffff" }} />
                </IconButton>
                <IconButton target='_blank' href='https://www.linkedin.com/in/florenciasalcedowd/' aria-label='delete'>
                    <LinkedInIcon style={{ fill: "#ffffff" }} />
                </IconButton>
            </Socials>
            <Copyright>Florencia Salcedo © 2021</Copyright>
            <Link href='https://storyset.com/web' target='_blank'>
                Web illustrations by Storyset
            </Link>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    background-color: #222222;
    text-align: center;
    padding: 2rem 1rem;
`;

const Socials = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
`;

const Copyright = styled.p`
    font-size: 0.8rem;
    color: #616161;
`;

const Link = styled.a`
    color: #616161;
    text-decoration: none;
    font-size: 0.5rem;

    &:hover {
        text-decoration: none;
        color: #616161;
        opacity: 0.8;
    }
`;
