import React from "react";
import Ad from "./Ad";
import { useState } from "react";
import styled from "styled-components";

const StyledAdButton = styled.button`
  width: 80px;
  height: 30px;
`;
export default function AdPage() {
  const [adState, setAdState] = useState(true);
  const [adButton, setAdButton] = useState("광고 안 보기");

  const handleClick = () => {
    if (adState == true) {
      setAdButton("광고 보기");
      setAdState(false);
    } else {
      setAdButton("광고 안 보기");
      setAdState(true);
    }
  };
  return (
    <div>
      <Ad adState={adState}></Ad>
      <StyledAdButton onClick={handleClick}>{adButton}</StyledAdButton>
    </div>
  );
}
