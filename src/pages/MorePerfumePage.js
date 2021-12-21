import React from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import product from "../contents/product";
import results from "../contents/results";
import { AiOutlineLeft } from 'react-icons/ai';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  margin-top: 60px;
`;
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

const BackWrap = styled.div`
  display: flex;
  margin-left: 1rem;
`;

const RecommandWrap = styled.div`
  display: grid;
  grid-auto-rows: minmax(150px, auto);
  background-color: #ffffff;
  row-gap: 15px;
`;

const RecommandImg = styled.img`
  position: relative;
  margin: auto;
  width: 148px;
  height: 204px;
  object-fit: contain;
  grid-column-start: 1;
`;

const RecommandName = styled.div`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 14px;
  line-height: 119%;
  color: #2d2d2d;
`;

const RecommandHouse = styled.div`
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 10px;
  line-height: 120%;
  color: #6e6e6e;
`;

const RecommandNote = styled.div`
  font-family: "Open Sans";
  font-weight: normal;
  font-size: 9px;
  line-height: 120%;
  color: #6e6e6e;
`;

function MorePerfumePage() {
  const { finalType } = useParams();
  const mbtiType = results[finalType].type;

  let navigate = useNavigate();
  const onClickBack = () => {
    navigate("/result/" + finalType);
  }

  return (
    <>
      <Header>boonboon</Header>
      <Wrapper>
        <BackWrap>
          <AiOutlineLeft onClick={onClickBack} /> 
        </BackWrap>
        <Container>
          <RecommandWrap>
            {product[mbtiType].map((perfume, index) => {
              return (
                <div key={index}>
                  <RecommandImg src={perfume.img} />
                  <RecommandName>{perfume.name}</RecommandName>
                  <RecommandHouse>{perfume.house}</RecommandHouse>
                  <RecommandNote>{perfume.top}</RecommandNote>
                  <RecommandNote>{perfume.middle}</RecommandNote>
                  <RecommandNote>{perfume.base}</RecommandNote>
                </div>
              );
            })}
          </RecommandWrap>
        </Container>
      </Wrapper>
    </>
  );
}

export default MorePerfumePage;
