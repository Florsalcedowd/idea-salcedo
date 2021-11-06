import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "../shared/LoadingSpinner";
import Item from "./Item";

const ImageGallery = ({ images }) => {
    const [selectedImg, setSelectedImg] = useState("");

    useEffect(() => {
        if (images.length > 0) {
            setSelectedImg(images[0]);
        } else {
            setSelectedImg([
                "https://www.reservacostanera.com.ar/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png",
            ]);
        }
    }, []);

    const handleChange = (img) => {
        setSelectedImg(img);
    };

    return (
        <Container>
            <SelectImage>
                {images.length > 0 ? (
                    images.map((img, key) => (
                        <img
                            src={img}
                            alt={key}
                            key={key}
                            onClick={() => {
                                setSelectedImg(img);
                            }}
                        />
                    ))
                ) : (
                    <LoadingSpinner />
                )}
            </SelectImage>
            <MainImage src={selectedImg} alt={selectedImg} />
        </Container>
    );
};

export default ImageGallery;

const Container = styled.div`
    display: flex;
    gap: 1rem;
    box-sizing: border-box;
`;

const SelectImage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
        object-fit: cover;
        width: 80px;
        height: 80px;
        border-radius: 5px;
    }

    img:hover {
        opacity: 0.8;
    }
`;

const MainImage = styled.img`
    width: 100%;
    height: 500px;
    object-fit: contain;
    
`;
