import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginBtn from "./LoginBtn";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 20px;
  padding: 20px 100px;
  background-color: rgb(28, 52, 124);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding-right: 20px;
  background-color: rgb(28, 52, 124);
`;

const StyledLogo = styled.img`
  padding-right: 20px;
  background=color: rgb(28, 52, 124);
`;

function Header({ isLogined, setLogin }) {
  return (
    <StyledHeader>
      <Link to="./">
        <StyledLogo
          style={{ width: "154px", height: "20px" }}
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="로고"
        />
      </Link>
      <StyledLink to="./movies">영화</StyledLink>
      <StyledLink to="./tv">TV 프로그램</StyledLink>
      <StyledLink to="./person">인물</StyledLink>
      <LoginBtn
        to="./login"
        isLogined={isLogined}
        setLogin={setLogin}
      ></LoginBtn>
      <div style={{ display: isLogined ? "block" : "none" }}>환영합니다!</div>
    </StyledHeader>
  );
}

export default Header;
