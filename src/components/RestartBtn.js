import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;

    width: 312px;
    height: 60px;

    margin-top: 8%;
    border: 1px solid #9706ED;
    box-sizing: border-box;
    border-radius: 30px;
    background: #FFFFFF;
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 4.5em;
    align-items: center;
    text-align: center;
    color: #2D2D2D;
    
`

function RestartBtn({ type, text }) {

    return (
        <Button type={type}>{text}</Button>
    );

}

export default RestartBtn;