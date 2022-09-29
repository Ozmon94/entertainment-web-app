import React, { useState, useEffect, useContext } from "react";
import Search from "components/Search/Search";
import VideoList from "components/VideoList/VideoList";
import { VideoContext } from "contex/VideoProvider";

const TvSeries = () => {
  const { videos } = useContext(VideoContext);
  const [searchValue, setSearchValue] = useState("");

  const [tvSeries, setTvSeries] = useState([]);
  useEffect(() => {
    setTvSeries(videos.filter((video) => video.category === "TV Series"));
  }, [videos]);

  useEffect(() => {
    if (searchValue.trim().length > 0) {
      setTvSeries(
        videos.filter(
          (video) =>
            video.category === "TV Series" &&
            video.title.toLowerCase().includes(searchValue.toLowerCase().trim())
        )
      );
    } else {
      setTvSeries(videos.filter((video) => video.category === "TV Series"));
    }
  }, [searchValue]);

  return (
    <>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        placeholder={"Search for TV series"}
      />
      <VideoList title={"TV Series"} videos={tvSeries} />
    </>
  );
};

export default TvSeries;
