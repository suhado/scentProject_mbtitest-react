import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Parser from 'html-react-parser';
import CopyToClipboard from "react-copy-to-clipboard";

import results from '../contents/results';
import product from '../contents/product';
import Buttons from '../components/Buttons';
import SmallBtn from '../components/SmallBtn';
// import KakaoShareBtn from '../components/Kakao';
// import LinkCopyBtn from '../components/btn/btn_link.svg';

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
    position: relative;
    /* margin: 20px; */
    align-items: center;
`

const ResultWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    vertical-align: middle;
    margin: 15px;
    width: 248px;
    height: 248px;
    border-radius: 70%;
`

const Content = styled.li`
    position: relative;
    margin: -3px 20px;
    font-family: "GmarketSansMedium";
    font-style: normal;
    font-weight: 500;
    font-size: 0.9rem;
    line-height: 150%;
    letter-spacing: -0.02rem;
    color: #2d2d2d;
`

const DivisionLine = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin: 2% 25%;
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

const RecommandImg = styled.div`
    position: relative;
    margin: auto;
    width: 148px;
    height: 204px;
    object-fit: contain;
    grid-column-start: 1;
`

const RecommandName = styled.div`

`

const RecommandHouse = styled.div`

`

const SurveyWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SurveyTop = styled.div`
    position: relative;
    margin-top: 20px;

    font-family: "GmarketSansBold";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 132%;

    text-align: center;
`

const SurveyText = styled.h3`
    position: relative;
    margin-top: 10px;

    font-family: "GmarketSansMedium";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 132%;

    text-align: center;
    color: #6e6e6e;
`

const FlexLayout = styled.div`
    display:flex;
    justify-content:center;
    margin-left:2.2rem;
    margin-right:2.2rem;
`

const ShareSquare = styled.div`
    width:100%;
    height:20.8rem;
    background-color:white;
    border-radius: 0.5rem;
    margin-top: 7.7rem;

    display:flex;
    flex-direction:column;
    align-items:center;
`

const BtnToPage = styled(NavLink)`
    text-decoration: none;
    color:${props => props.theme.dark};
`

const Text = styled.div`
    position: relative;
    font-family: "GmarketSansMedium";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 131%;
    align-items: center;
    text-align: center;
`

function ResultPage({ match }) {
    window.scrollTo(0, 0);

    const link = window.location.href;
    const finalType = match.params.finalType;

    const alertMessage = () => {
        alert("링크가 복사되었습니다.");
    }

    // const description = (finalType) => {
    //     var des = Parser(results[finalType].description).split(\)
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
                        <ResultTitle>{results[finalType].name}</ResultTitle>
                        <Content>{Parser(results[finalType].description)}</Content>
                        
                    </ResultWrap>
                    <DivisionLine />
                    {/* <RecommandWrap>
                        <RecommandTop>오늘 파티에 이런 향수 어때요?</RecommandTop>
                        <RecommandImg isNormal={finalType} src={product[finalType].img}/>
                        <RecommandName>{product[finalType].name}</RecommandName>
                        <RecommandHouse>{product[finalType].house}</RecommandHouse>
                        <SmallBtn/>
                    </RecommandWrap> */}
                    <DivisionLine />
                    <SurveyWrap>
                        <SurveyTop>평소 향수에 관심이 있으신가요?</SurveyTop>
                        <SurveyText>향수에 관한 생각을 설문조사로 알려주세요</SurveyText>
                        <SmallBtn text={"설문조사 참여하기!!"}/>
                    </SurveyWrap>
                    <FlexLayout>
                        <ShareSquare>
                            <FlexLayout>
                                {/* <KakaoShareBtn
                                    _sub={results[finalType].title}
                                    _title={results[finalType].name}
                                    _imageUrl={results[finalType].img}
                                    _finalType={finalType}/> */}
                            </FlexLayout>
                            <CopyToClipboard text={link}>
                                <Buttons text={'링크 복사하기'} onClick={alertMessage}></Buttons>
                            </CopyToClipboard>
                            <BtnToPage exact to='/'><Buttons type={'result-activated'} text={'테스트 다시 하기'} /></BtnToPage>
                        </ShareSquare>
                    </FlexLayout>
                    {/* <ResultBottom> */}
                        <Text>결과의 MBTI가 궁금하다면...?! 아래 인스타 계정 클릭!</Text>
                        
                    {/* </ResultBottom> */}
                    
                </Container>
            </Wrapper>
        );
    }
}

export default ResultPage;