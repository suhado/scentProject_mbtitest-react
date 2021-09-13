import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    cursor:pointer;

    position: relative;
    margin-top: 18%;
    width: 216px;
    height: 56px;
    background: #9706ED;
    border-radius: 28px;
    border-color: #9706ED;
    font-family: 'GmarketSansBold';
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 55px;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
`

function StartBtn({ idx, text, onclick }) {
    const onClickBtn = () => {
        onclick(idx);
    }

    return (
        <Button onClick={onClickBtn}>{text}</Button>
    );

}

export default StartBtn;