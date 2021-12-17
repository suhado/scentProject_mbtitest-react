import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Parser from "html-react-parser";
import CopyToClipboard from "react-copy-to-clipboard";
import results from "../contents/results";
import product from "../contents/product";
import { FaInstagram } from "react-icons/fa";
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
  color: #9706ed;
`;

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
`;

//LandingPage.js 참고해서 wrapper에 일단 코드 기록해둠
const Wrapper = styled.div`
  display: ${(props) => (props.isShow === true ? "flex" : "none")};
  display: flex;
  width: 100%;
  background-color: #fff;

  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  margin: 20px;
`;

const ResultWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
`;

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
`;

const ResultImg = styled.img`
  position: relative;
  align-items: center;
  margin: 15px;
  width: 248px;
  height: 248px;
  border-radius: 70%;
`;

const ContentWrap = styled.ul`
  position: relative;
  margin: 3px;
  font-family: "GmarketSansMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;
  text-align: left;
  line-height: 150%;
  letter-spacing: -0.02rem;
  color: #2d2d2d;
`;

const Content = styled.li`
  position: relative;
`;

const DivisionLine = styled.div`
  position: relative;
  margin: 7% 25%;
  width: 50%;
  height: 1px;
  background-color: #9706ed;
`;

const RecommandWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const RecommandTop = styled.div`
  position: relative;
  margin: 20px;

  font-family: "GmarketSansBold";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 132%;

  text-align: center;
`;

const RecommandImg = styled.img`
  position: relative;
  margin: auto;
  width: 148px;
  height: 204px;
  object-fit: contain;
  grid-column-start: 1;
`;

const RecommandName = styled.div``;

const RecommandHouse = styled.div``;

const SurveyWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SurveyTop = styled.div`
  position: relative;
  margin-top: 20px;

  font-family: "GmarketSansBold";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 132%;

  text-align: center;
`;

const SurveyText = styled.h3`
  position: relative;

  font-family: "GmarketSansMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 132%;

  text-align: center;
  color: #6e6e6e;
`;

const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 2.2rem;
  margin-right: 2.2rem;
`;

const ShareSquare = styled.div`
  width: 100%;
  height: 14rem;
  background-color: white;
  border-radius: 0.5rem;
  margin-top: 8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SmallBtn = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  margin: 24px auto;
  width: 180px;
  height: 48px;
  background: #ffffff;
  border-radius: 28px;
  border: 2px solid #9706ed;
  font-family: "GmarketSansmedium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 47px;
  align-items: center;
  text-align: center;
  color: #2d2d2d;
`;

const CopyBtn = styled.button`
  cursor: pointer;

  position: relative;
  width: 312px;
  height: 60px;

  margin-top: 8%;
  border: 1px solid #9706ed;
  box-sizing: border-box;
  border-radius: 30px;
  background: #9706ed;
  font-family: "GmarketSansMedium";
  font-style: normal;
  font-weight: bold;
  font-size: 0.8rem;
  line-height: 4.5em;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const BtnToPage = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.dark};
`;

const ResultBottom = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  position: relative;
  margin-top: 5px;
  font-family: "GmarketSansMedium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 131%;
  align-items: center;
  text-align: center;
`;
const RestartBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 312px;
  height: 60px;

  margin-top: 8%;
  border: 1px solid #9706ed;
  box-sizing: border-box;
  border-radius: 30px;
  background: #ffffff;
  font-family: "GmarketSansMedium";
  font-style: normal;
  font-weight: bold;
  font-size: 0.8rem;
  line-height: 4.5em;
  align-items: center;
  text-align: center;
  color: #2d2d2d;
`;
const MoreBtn = styled(NavLink)`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  margin: 24px auto;
  width: 180px;
  height: 48px;
  background: #ffffff;
  border-radius: 28px;
  border: 2px solid #9706ed;
  font-family: "GmarketSansmedium";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-decoration: none;
  line-height: 47px;
  align-items: center;
  text-align: center;
  color: #2d2d2d;
`;
// TODO: 카카오 공유버튼
// TODO: 링크복사 alert메시지
// TODO: RecommandName House 디자인

function ResultPage({ match }) {
  window.scrollTo(0, 0);

  const link = window.location.href;
  const finalType = match.params.finalType;
  const mbtiType = results[finalType].type;

  const alertMessage = () => {
    return <div>alert</div>;
  };

  const onClicksurveyLink = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSe_SEmpnifk2MQnvHx8BALipOr8YW8S2EpaaFJNmVktDxAqKA/viewform?usp=sf_link"
    );
  };

  const onClickInsta = () => {
    window.open("https://www.instagram.com/boonboon_scent/");
  };

  return (
    <Wrapper>
      <Header>boonboon</Header>
      <ResultTop>당신에게 어울리는 파티는?</ResultTop>
      <Container>
        <ResultWrap>
          <ResultImg src={results[finalType].img} />
          <ResultSub>{Parser(results[finalType].title)}</ResultSub>
          <ResultTitle>{results[finalType].name}</ResultTitle>
          {results[finalType].description.split("\n").map((line) => {
            return (
              <ContentWrap>
                <Content>{line}</Content>
              </ContentWrap>
            );
          })}
        </ResultWrap>
        <DivisionLine />
        <RecommandWrap>
          <RecommandTop>오늘 파티에 이런 향수 어때요?</RecommandTop>
          {product[mbtiType].map((perfume, index) => {
            // TODO: 이 부분 어떻게 해결하지?
            if (index < 3) {
              return (
                <>
                  <RecommandImg src={perfume.img} />
                  <RecommandName>{perfume.name}</RecommandName>
                  <RecommandHouse>{perfume.house}</RecommandHouse>
                </>
              );
            }
          })}
          <MoreBtn exact to={`/more/${finalType}`}>
            향수 더보기
          </MoreBtn>
        </RecommandWrap>
        <DivisionLine />
        <SurveyWrap>
          <SurveyTop>평소 향수에 관심이 있으신가요?</SurveyTop>
          <SurveyText>향수에 관한 생각을 설문조사로 알려주세요</SurveyText>
          <SmallBtn onClick={onClicksurveyLink}>설문조사 참여하기!!</SmallBtn>
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
              <CopyBtn onClick={alertMessage}>링크 복사하기</CopyBtn>
            </CopyToClipboard>
            <BtnToPage exact to="/">
              <RestartBtn>테스트 다시하기</RestartBtn>
            </BtnToPage>
          </ShareSquare>
        </FlexLayout>
        <ResultBottom>
          <Text>결과의 MBTI가 궁금하다면...?! 아래 인스타 계정 클릭!</Text>
          <Text onClick={onClickInsta}>
            <FaInstagram /> boonboon_scent
          </Text>
        </ResultBottom>
      </Container>
    </Wrapper>
  );
}

export default ResultPage;
