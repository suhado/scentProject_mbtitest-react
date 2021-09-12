import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    cursor:pointer;

    color: #2D2D2D;
    position: relative;
    margin-top: 25px;

    width: 312px;
    height: 60px;

    background: #ffffff;
    border-radius: 30px;
    border: 1px solid #9706ED;

    font-family: 'GmarketSansBold';
    font-style: normal;
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 131%;
    align-items: center;
    text-align: center;

`

function Buttons({ idx, text, onclick }) {

    const onClickBtn = () => {
        onclick(idx);
    }

    return (
        <Button onClick={onClickBtn}>{text}</Button>
    );

}

export default Buttons;