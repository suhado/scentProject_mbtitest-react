import React, { useState } from "react";
import styled from "styled-components";
import product from "../contents/product";
import results from "../contents/results";
import { Route, Link, NavLink, withRouter } from "react-router-dom";
import backIcon from "../contents/back.png";

const Wrapper = styled.div`
  display: ${(props) => (props.isShow === true ? "flex" : "none")};
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
  margin: 20px;

  font-family: "GmarketSansBold";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 132%;
  list-style: none;

  gap: 20px;
  align-items: center;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  text-align: left;
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
  margin-bottom: 7px;
`;

const RecommandGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-start: 2;
  row-gap: 15px;
  margin-bottom: 45px;
`;

const RecommandNoteGrid = styled.div``;

const BackImg = styled.img`
  display: inline-block;
  margin: auto;
  width: 20px;
  height: 20px;
  position: relative;
  top: 35px;
  left: 50px;
  align-items: left;
`;

class MorePerfumePage extends React.Component {
  render() {
    const { params } = this.props.match;
    const finalType = params.finalType;
    const mbtiType = results[finalType].type;
    return (
      <>
        <Link to={{ pathname: `/result/${finalType}` }}>
          <BackImg src={backIcon}></BackImg>
        </Link>
        <Header>boonboon</Header>
        <Container>
          <RecommandWrap>
            {product[mbtiType].map((perfume, index) => {
              const perfumeTop = perfume.top;
              const perfumeMiddle = perfume.middle;
              const perfumeBase = perfume.base;
              return (
                <>
                  <RecommandImg isNormal={finalType} src={perfume.img} />
                  <RecommandGrid>
                    <RecommandName>{perfume.name}</RecommandName>
                    <RecommandHouse>{perfume.house}</RecommandHouse>
                    <RecommandHouse>Type: {perfume.type}</RecommandHouse>
                    {perfumeTop ? (
                      <RecommandNote>
                        Top Notes: <br></br>
                        {perfumeTop}
                      </RecommandNote>
                    ) : null}
                    {perfumeMiddle ? (
                      <RecommandNote>
                        Middle Notes: <br></br>
                        {perfumeMiddle}
                      </RecommandNote>
                    ) : null}
                    {perfumeBase ? (
                      <RecommandNote>
                        Base Notes: <br></br>
                        {perfumeBase}
                      </RecommandNote>
                    ) : null}
                  </RecommandGrid>
                </>
              );
            })}
          </RecommandWrap>
        </Container>
      </>
    );
  }
}

export default MorePerfumePage;
