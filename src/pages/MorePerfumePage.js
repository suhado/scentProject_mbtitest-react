import React from "react";
import styled from "styled-components";
import product from "../contents/product";
import results from "../contents/results";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const RecommandWrap = styled.div`
  position: relative;
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

/*TODO: 이전 페이지로 되돌아가는 버튼, 링크 추가*/

function MorePerfumePage({ match }) {
  const finalType = match.params.finalType;
  const mbtiType = results[finalType].type;

  return (
    <>
      <Header>boonboon</Header>
      <Wrapper>
        <Container>
          <RecommandWrap>
            {product[mbtiType].map((perfume, index) => {
              return (
                <div key={index}>
                  <RecommandImg src={perfume.img} />
                  <RecommandName>{perfume.name}</RecommandName>
                  <RecommandHouse>{perfume.house}</RecommandHouse>
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
