import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonComponent from '../components/Buttons';
import contents from '../contents/questions';
import Parser from 'html-react-parser';
import { Redirect } from 'react-router-dom'

const Wrapper = styled.div`
  display: ${props => props.isQuizShow === true ? 'flex' : 'none'};

  background-color:white;
  flex-direction:column;
  align-items:center;
  text-align: center;
`

const Text = styled.div`
  position: absolute;
  margin-top: 100px;
  margin-bottom: 200px;
  font-family: 'GmarketSansMedium';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 132%;
  text-align: center;
  color: #2D2D2D;
`
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 19rem;
`

function QuizPage({ isQuizShow }) {

  const [questionNum, setQuestionNum] = useState(0);
  const [linkTo, setLinkTo] = useState("");
  const [typeEI, setTypeEI] = useState(0);
  const [typeSN, setTypeSN] = useState(0);
  const [typeTF, setTypeTF] = useState(0);
  const [typeJP, setTypeJP] = useState(0);
  // const [finalType, setFinalType] = useState(0);

  const onConditionChange = (key) => {

    let record = contents[questionNum].answers[key].score;
    /* 결과 계산 알고리즘 */
    if (questionNum === 0 || questionNum === 7 || questionNum === 8) { // EI
      setTypeEI(typeEI + record);
    } else if (questionNum === 2 || questionNum === 3 || questionNum === 9) {
      setTypeSN(typeSN + record);
    } else if (questionNum === 6 || questionNum === 10) {
      setTypeTF(typeTF + record);
    } else if (questionNum === 1 || questionNum === 4 || questionNum === 5) {
      setTypeJP(typeJP + record);
    } else if (questionNum === 11) { // 마지막 문제일때
      setTypeTF(typeTF + record);

      let result = 0; //result 값 초기화

      if (typeEI >= 2) {
        result = result + 8;
      };
      if (typeSN >= 2) {
        result = result + 4;
      };
      if (typeTF >= 2) {
        result = result + 2;
      };
      if (typeJP >= 2) {
        result = result + 1;
      };

    let num = result;
    setLinkTo("/result/" + num);
    }
    setQuestionNum(questionNum + 1); /* 문제 번호 하나씩 증가 */
  }

  if (questionNum < 12) { /* 1~11 문제 버튼 누르면 */
    return (
      <>
        <Wrapper isQuizShow={isQuizShow}>
            <Text>{Parser(contents[questionNum].question)}</Text> {/* 순서대로 질문 보여주기 */}
            <ButtonWrap> 
            {contents[questionNum].answers.map((answer, i) => (
                <ButtonComponent
                  key={'answer' + i}
                  idx={i}
                  text={Parser(answer.text)}
                  onclick={onConditionChange}
                />
              ))}
            </ButtonWrap>
        </Wrapper>
      </>);
  } else if (questionNum === 12) { /* 마지막 문제 버튼 누르면 결과페이지로 이동 */
    return (
      <>
          <Redirect to={linkTo}></Redirect>
      </>
    );
  }
}

export default QuizPage;