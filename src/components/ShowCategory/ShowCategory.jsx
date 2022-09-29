import { ReactComponent as MovieIcon } from "assets/icon-category-movie.svg";
import { ReactComponent as TvSeriesIcon } from "assets/icon-category-tv.svg";

const ShowCategory = ({ category }) => {
  return (
    <>
      {category === "Movie" ? (
        <>
          <MovieIcon style={{ marginRight: "8px" }} /> {category}
        </>
      ) : null}
      {category === "TV Series" ? (
        <>
          <TvSeriesIcon style={{ marginRight: "8px" }} /> {category}
        </>
      ) : null}
    </>
  );
};

export default ShowCategory;
