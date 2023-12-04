import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledMovieDetail = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
`;
const StyledMovieDetailImg = styled.img`
  width: 30%;
  margin-right: 30px;
`;
const StyledMovieDetailTitle = styled.div`
  font-size: 30px;
`;

export default function MovieDetail() {
  const params = useParams();
  const location = useLocation();

  return (
    <StyledMovieDetail id={params.id}>
      <StyledMovieDetailImg
        src={location.state.coverImg}
      ></StyledMovieDetailImg>
      <StyledMovieDetailTitle>{location.state.title}</StyledMovieDetailTitle>
    </StyledMovieDetail>
  );
}
