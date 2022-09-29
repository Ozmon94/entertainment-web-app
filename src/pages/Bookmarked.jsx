import React, { useState, useEffect, useContext } from "react";
import Search from "components/Search/Search";
import VideoList from "components/VideoList/VideoList";
import { VideoContext } from "contex/VideoProvider";

const Bookmarked = () => {
  const { videos } = useContext(VideoContext);

  const [searchValue, setSearchValue] = useState("");
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
  const [bookmarkedTVSeries, setBookmarkedTVSeries] = useState([]);
  useEffect(() => {
    setBookmarkedMovies(
      videos.filter((video) => video.category === "Movie" && video.isBookmarked)
    );
    setBookmarkedTVSeries(
      videos.filter(
        (video) => video.category === "TV Series" && video.isBookmarked
      )
    );
  }, [videos]);

  useEffect(() => {
    if (searchValue.trim().length > 0) {
      setBookmarkedMovies(
        videos.filter(
          (video) =>
            video.category === "Movie" &&
            video.isBookmarked &&
            video.title.toLowerCase().includes(searchValue.toLowerCase().trim())
        )
      );
      setBookmarkedTVSeries(
        videos.filter(
          (video) =>
            video.category === "TV Series" &&
            video.isBookmarked &&
            video.title.toLowerCase().includes(searchValue.toLowerCase().trim())
        )
      );
    } else {
      setBookmarkedMovies(
        videos.filter(
          (video) => video.category === "Movie" && video.isBookmarked
        )
      );
      setBookmarkedTVSeries(
        videos.filter(
          (video) => video.category === "TV Series" && video.isBookmarked
        )
      );
    }
  }, [searchValue]);

  return (
    <>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        placeholder={"Search for bookmarked shows"}
      />
      <VideoList title={"Bookmarked Movies"} videos={bookmarkedMovies} />
      <VideoList title={"Bookmarked TV Series"} videos={bookmarkedTVSeries} />
    </>
  );
};

export default Bookmarked;
