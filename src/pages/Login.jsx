import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled.input`
  border: solid 1px black;
`;
const StyledLoginButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 8px;
  color: white;
`;

export default function Login({ isLogined, setLogin }) {
  const [loginButtonAble, setLoginButtonAble] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const emailRegeEx = /^([a-zA-z0-9]+)@([a-z]+).com$/;

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handlePwChange = (e) => {
    setPwValue(e.target.value);
  };

  useEffect(() => {
    if (emailRegeEx.test(emailValue)) {
      if (pwValue.length >= 8) {
        setLoginButtonAble(true);
      }
    }
  }, [emailValue, pwValue]);
  const navigator = useNavigate();
  const onSubmit = () => {
    setLogin(true);
    navigator("/");
  };

  return (
    <div style={{ display: isLogined ? "none" : "block" }}>
      <h3>이메일과 비밀번호를 입력해주세요</h3>
      <StyledLoginForm onSubmit={onSubmit}>
        <label htmlFor="email">이메일 주소</label>
        <StyledInput
          type="email"
          id="email"
          onChange={handleEmailChange}
        ></StyledInput>
        <label htmlFor="password">비밀번호</label>
        <StyledInput
          type="password"
          id="password"
          onChange={handlePwChange}
        ></StyledInput>
        <StyledLoginButton
          type="submit"
          style={{ backgroundColor: loginButtonAble ? "blue" : "grey" }}
          disabled={!loginButtonAble}
        >
          확인
        </StyledLoginButton>
      </StyledLoginForm>
    </div>
  );
}
