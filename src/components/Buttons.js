import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    cursor:pointer;

    position: relative;
    width: 312px;
    height: 60px;

    margin-top: 8%;
    border: 1px solid #9706ED;
    box-sizing: border-box;
    border-radius: 30px;
    background: #FFFFFF;
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 4.5em;
    align-items: center;
    text-align: center;
    color: #2D2D2D;

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