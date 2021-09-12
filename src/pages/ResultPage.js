import React from 'react';
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import CopyToClipboard from "react-copy-to-clipboard";

import results from '../contents/results';
import product from '../contents/product';
import Buttons from '../components/Buttons';
// import KakaoShareBtn from '../components/Kakao';
// import LinkCopyBtn from '../assets/btn/btn_link.svg';

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
const ResultTop = styled.div`
    position: relative;
    margin-top: 20px;
    font-family: "GmarketSansBold";
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 25px;
    text-align: center;

    color: #2d2d2d;
`

const Wrapper = styled.div`
    display: flex;
    width:100%;
    background-color:#fff;

    flex-direction:column;
    align-items:center;
`

const Container = styled.div`
    position: relative; /* 보여줘 */
    margin: 20px;
`

const ResultWrap = styled.div`
    position: relative;;
`

const ResultSub = styled.h3`
    position: relative;
    margin: 4px;

    font-family: "GmarketSansMedium";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 132%;

    text-align: center;
    color: #6e6e6e;
`

const ResultTitle = styled.h3`

    position: relative;
    margin-top: 4px;

    font-family: "GmarketSansBold";
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 30px;
    text-align: center;

    color: #9706ed;
`

const ResultImg = styled.img`
    position: relative;
    align-items: center;
    margin: 15px;
    width: 248px;
    height: 248px;
    border-radius: 70%;
`

const Content = styled.li`
    position:relative;
    margin-top: 50px;
    margin: 3px;
    font-family:'Spoqa-Han-Sans';
    font-size: 10px;
    color:black;
`

const DivisionLine = styled.div`
    position: relative;
    margin-top: 20px;
    width: 50%;
    height: 1px;
    background-color: #9706ed;
` 

const RecommandWrap = styled.div`
    position:relative;
`

const RecommandTop = styled.div`
    position: relative;
    margin: 20px;

    font-family: "GmarketSansBold";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 132%;

    text-align: center;
`

const FlexLayout = styled.div`
    display:flex;
    justify-content:center;
    margin-left:2.2rem;
    margin-right:2.2rem;
`

function ResultPage({ match }) {
    window.scrollTo(0, 0);

    // const link = window.location.href;
    const finalType = match.params.finalType;

    // const alertMessage = () => {
    //     alert("내 룸미 결과가 클립보드에 담겼어요!");
    // }

    if (finalType) { /* 그냥 전부일때 */
        return (
            <Wrapper>
                <Header>boonboon</Header>
                <ResultTop>당신에게 어울리는 파티는?</ResultTop>
                <Container>
                    <ResultWrap>
                        <ResultImg isNormal={finalType} src={results[finalType].img} />
                        <ResultSub>{Parser(results[finalType].title)}</ResultSub>
                        <ResultTitle>{results[finalType].name}</ResultTitle> {/* 여기는 Parser없네 */}
                        <Content>{Parser(results[finalType].description)}</Content>
                    </ResultWrap>
                    <DivisionLine />
                    {/* <RecommandWrap>
                        <RecommandTop>오늘 파티에 이런 향수 어때요?</RecommandTop>
                        <RecommandImg />
                        <RecommandName />
                        <RecommandHouse />
                        <Buttons/>
                    </RecommandWrap>
                    <DivisionLine />
                    <SurveyWrap>
                        <SurveyTop>평소 향수에 관심이 있으신가요?</SurveyTop>
                        <SurveyText>향수에 관한 생각을 설문조사로 알려주세요</SurveyText>
                        <Buttons></Buttons>
                    </SurveyWrap> */}
                    {/* <FlexLayout>
                        <ShareSquare>
                            <FlexLayout>
                                <KakaoShareBtn _sub={results[finalType].title} _title={results[finalType].name} _imageUrl={results[finalType].img} _finalType={finalType} />
                                <CopyToClipboard text={link}>
                                    <Button onClick={alertMessage}><Img src={LinkCopyBtn}/></Button>
                                </CopyToClipboard>
                            </FlexLayout>
                            <BtnToPage exact to='/'><Buttons type={'result-activated'} text={'테스트 다시 하기'} /></BtnToPage>
                        </ShareSquare>
                    </FlexLayout> */}
                    {/* <ResultBottom>

                    </ResultBottom> */}
                    
                </Container>
            </Wrapper>
        );
    }
}

export default ResultPage;