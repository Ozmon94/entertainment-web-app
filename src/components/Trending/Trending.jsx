import React, { useEffect, useRef } from "react";
import TrendingVideoCard from "components/TrendingVideoCard/TrendingVideoCard";
import {
  Wrapper,
  TrendingWrapper,
  Title,
} from "components/Trending/Trending.styles";

const Trending = ({ trending }) => {
  const scrollDivRef = useRef(null);

  const handleOnWheel = (e) => {
    e.preventDefault();
    if (scrollDivRef) {
      scrollDivRef.current.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    if (scrollDivRef.current) {
      scrollDivRef.current.addEventListener("wheel", handleOnWheel, {
        passive: false,
      });
    }

    return () => {
      if (scrollDivRef.current) {
        scrollDivRef.current.removeEventListener("wheel", handleOnWheel, {
          passive: false,
        });
      }
    };
  }, [scrollDivRef]);

  return (
    <Wrapper>
      <Title>Trending</Title>
      <TrendingWrapper ref={scrollDivRef}>
        {trending.length > 0 &&
          trending.map((video) => (
            <TrendingVideoCard video={video} key={video.title} />
          ))}
      </TrendingWrapper>
    </Wrapper>
  );
};

export default Trending;
