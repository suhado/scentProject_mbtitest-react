import React from "react";
import styled from "styled-components";

const Button = styled.div`
  cursor: pointer;

  position: relative;
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

function MoreBtn({ mbtiType, text, onclick }) {
  {
    /* 링크 연결을 위한 기본 useState 설정을 위해 작성해야 할 기본 세팅 코드-수정 요망. 
  const [isShow, setIsShow] = useState(true);
  const [isMorePerfumePage, setMorePerfumePage] = useState(false);
*/
  }
  const onClickBtn = () => {
    {
      /* 클릭 버튼시 link 이동위함. 버튼 클릭시 mbtiType, finalType 가져와야 함.
    setIsShow(false);
    setMorePerfumePage(true);
    */
    }
  };

  return <Button onClick={onClickBtn}>{text}</Button>;
}

export default MoreBtn;
