import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 4rem;
    gap: 1rem;

    @media (min-width: 576px) {
        width: 540px;
    }
    @media (min-width: 768px) {
        width: 720px;
    }
    @media (min-width: 992px) {
        width: 960px;
    }
    @media (min-width: 1200px) {
        width: 1140px;
    }
`;

export const PageHeader = styled.div`
    font-size: 2rem;
    padding: 2rem 0 0 0;
    width: 100%;
    color: #222222;
`;

export const EmptyCart = styled.div`
    background-color: #f1f1f1;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 100px 0;
    gap: 1rem;
`;

export const CounterContainer = styled.div`
    display: flex;
    gap: 0.3rem;
    align-items: center;
    justify-content: left;
    margin: 0;
    padding: 0;
`;

export const UnitsValue = styled.div`
    font-size: 1rem;
    font-weight: 700;
    color: #222222;
`;

export const SimpleDiv = styled.div`
    background-color: #ffffff;
    padding: 0;
    margin: 0;
`;

export const DrawerContainer = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    overflow-y: scroll;
    min-width: 30vw;
    max-width: 100vw;
    gap: 1rem;
`;

export const DrawerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 0 0 1rem 0;

    .title {
        font-size: 1.5rem;
        font-weight: 700;
    }
`;

export const ItemCard = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 0.5rem;
    box-sizing: border-box;
`;

export const ProductImage = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 5px;
`;

export const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const ItemTitle = styled.div`
    display: flex;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.div`
    font-size: 2rem;
    color: #616161;
`;

export const Totals = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        font-size: 1.1rem;
    }
`;
