import * as movie from "./Movie.style.jsx";
import Detail from "./Detail.jsx";
import { useNavigate } from "react-router-dom";

function Movie({ coverImg, title, vote_average, overview }) {
  const navigator = useNavigate();

  const onClick = () => {
    navigator(`/detail/${title}`, {
      state: { coverImg: coverImg, title: title },
    });
  };

  return (
    <movie.StyledMovie onClick={onClick}>
      <img src={coverImg} />
      <movie.StyledInfo>
        <movie.StyledMovieSpan>
          {title.length > 7 ? title.slice(0, 7) + "..." : title}
        </movie.StyledMovieSpan>
        <movie.StyledMovie>{vote_average}</movie.StyledMovie>
      </movie.StyledInfo>
      <Detail title={title} overview={overview} />
    </movie.StyledMovie>
  );
}

export default Movie;
