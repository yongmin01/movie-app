import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 40px;
`;
const StyledNotFoundTitle = styled.div`
  font-size: 28px;
  font-weight: 500;
  padding-bottom: 10px;
`;
const StyledNotFoundToHome = styled(Link)`
  color: red;
  text-decoration: none;
`;

export default function NotFound() {
  return (
    <StyledNotFound>
      <StyledNotFoundTitle>해당 페이지를 찾지 못했습니다.</StyledNotFoundTitle>
      <div>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</div>
      <StyledNotFoundToHome to={`./`}>메인 페이지로 이동</StyledNotFoundToHome>
    </StyledNotFound>
  );
}
