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
    padding: 2rem 0;
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
    gap: 1rem;
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
