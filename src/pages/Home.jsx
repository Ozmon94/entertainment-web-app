import React, { useContext, useEffect, useState } from "react";
import Search from "components/Search/Search";
import Trending from "components/Trending/Trending";
import VideoList from "components/VideoList/VideoList";
import { VideoContext } from "contex/VideoProvider";

const Home = () => {
  const { videos } = useContext(VideoContext);
  const [searchValue, setSearchValue] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    setTrending(videos.filter((video) => video.isTrending));
    setVideoList(videos.filter((video) => !video.isTrending));
  }, [videos]);

  useEffect(() => {
    if (searchValue.trim().length > 0) {
      setVideoList(
        videos.filter(
          (video) =>
            !video.isTrending &&
            video.title.toLowerCase().includes(searchValue.toLowerCase().trim())
        )
      );
    } else {
      setVideoList(videos.filter((video) => !video.isTrending));
    }
  }, [searchValue]);

  return (
    <>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        placeholder={"Search for movies or TV series"}
      />
      <Trending trending={trending} />
      <VideoList title={"Recommended for you"} videos={videoList} />
    </>
  );
};

export default Home;
