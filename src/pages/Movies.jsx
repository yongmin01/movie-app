import React, { useEffect } from "react";
import Movie from "../components/Movie";
import { movies } from "../movieDummy.js";
import styled from "styled-components";

const StyledMoviePage = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  width: 90%;
  margin: 20px auto;
  font-size: 13px;
`;

export default function Movies() {
  return (
    <StyledMoviePage>
      {movies.results.map((item) => (
        <Movie
          coverImg={item.poster_path}
          title={item.title}
          vote_average={item.vote_average}
          overview={item.overview}
        />
      ))}
    </StyledMoviePage>
  );
}
