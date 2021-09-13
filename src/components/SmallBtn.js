import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    cursor:pointer;
    
    position: relative;
    margin-top: 60px;

    width: 216px;
    height: 56px;

    background: #ffffff;
    border-radius: 28px;
    border: 1px;
    border-color: #9706ED;

    font-family: "GmarketSansmedium";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 131%;
    align-items: center;
    text-align: center;

    color: #2d2d2d;
`

function SmallBtn({ idx, text, onclick }) {
    const onClickBtn = () => {
        onclick(idx);
    }

    return (
        <Button onClick={onClickBtn}>{text}</Button>
    );

}

export default SmallBtn;