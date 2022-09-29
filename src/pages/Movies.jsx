import React, { useState, useEffect, useContext } from "react";
import Search from "components/Search/Search";
import VideoList from "components/VideoList/VideoList";
import { VideoContext } from "contex/VideoProvider";

const Movies = () => {
  const { videos } = useContext(VideoContext);
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(videos.filter((video) => video.category === "Movie"));
  }, [videos]);

  useEffect(() => {
    if (searchValue.trim().length > 0) {
      setMovies(
        videos.filter(
          (video) =>
            video.category === "Movie" &&
            video.title.toLowerCase().includes(searchValue.toLowerCase().trim())
        )
      );
    } else {
      setMovies(videos.filter((video) => video.category === "Movie"));
    }
  }, [searchValue]);

  return (
    <>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        placeholder={"Search for movies"}
      />
      <VideoList title={"Movies"} videos={movies} />
    </>
  );
};

export default Movies;
