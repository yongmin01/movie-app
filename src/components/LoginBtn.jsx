import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledLoginBtn = styled.button`
  width: 80px;
  font-size: 20px;
  background-color: white;
  border-radius: 16px;
`;
export default function LoginBtn({ isLogined, setLogin }) {
  const navigator = useNavigate();
  const onClick = () => {
    if (isLogined) {
      setLogin(false);
      navigator(`./login`);
    } else {
      navigator(`./login`);
    }
  };
  return (
    <div>
      <StyledLoginBtn onClick={onClick}>
        {isLogined ? "로그아웃" : "로그인"}
      </StyledLoginBtn>
    </div>
  );
}
