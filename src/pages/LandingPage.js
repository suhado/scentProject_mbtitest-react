import React, { useState } from 'react';
import styled from 'styled-components';
import StartBtn from '../components/StartBtn';
import StartImg from '../contents/START.png';
import QuizPage from './QuizPage';

const Wrapper = styled.div`
    display: ${props => props.isShow === true ? 'flex' : 'none'};
    width:100%;
    background-color: #ffffff;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const Container = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    background: #ffffff;
    margin-top: 60px ;
`
const Header = styled.div`
    margin-top: 15px;
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #9706ED;
`

const Invitation = styled.img`
    display: inline-block;
    margin: auto;
    position: relative;
    width: 280px;
    height: 187px;
`

const MainTitle = styled.h1`
    position: relative;
    margin-top: 20px;
    font-family: 'GmarketSansBold';
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 30px;
    text-align: center;
    color: #2D2D2D;
`
const SubTitle = styled.h3`
    position: relative;
    margin-top: 1px;
    font-family: 'GmarketSansMedium';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 25%;
    text-align: center;
    color: #6E6E6E;
`

function LandingPage() {
    const [isShow, setIsShow] = useState(true);
    const [isQuizShow, setIsQuizShow] = useState(false);

    const onClickStartBtn = () => {
        setIsShow(false);
        setIsQuizShow(true);
    }
    return (
        <>
            <Header>boonboon</Header>    
            <Wrapper isShow={isShow}>
                <Container>
                    <Invitation src={StartImg}></Invitation>
                    <MainTitle>나와 어울리는 파티는?</MainTitle>
                    <SubTitle>나의 성향과 어울리는 파티 찾기 테스트</SubTitle>
                    <StartBtn text={"테스트 하기"} onclick={onClickStartBtn}/>
                </Container>
            </Wrapper>
            <QuizPage isShow={isQuizShow} />
        </>
    );
}

export default LandingPage;