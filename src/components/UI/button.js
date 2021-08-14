import styled from "styled-components";

export const Button = styled.button`
    left: 5%;
    top: 50%;
    position: absolute;
    transform: translate(0, -50%);
    background: none;
    border: 2px solid #fbfbfb;
    border-radius: 100%;
    color: #fbfbfb;
    cursor: pointer;
    font-family: 'Work Sans', sans-serif;
    font-size: 34px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    padding: 25px 0 20px;
    width: 300px;
    z-index: 1;

    @media (max-width: 700px) {
        font-size: 24px;
        width: 220px;
    }
`