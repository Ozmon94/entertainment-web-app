import React, { useContext } from "react";
import BookMark from "components/BookMark/BookMark";
import ShowCategory from "components/ShowCategory/ShowCategory";
import PlayButton from "components/PlayButton/PlayButton";

import {
  Wrapper,
  Dot,
  Info,
  InfoSpan,
  InfoWrapper,
  Title,
  ImageDiv,
} from "components/VideoCard/VideoCard.styles";
import { VideoContext } from "contex/VideoProvider";
import useDownloadImageUrl from "hooks/useDownloadImageUrl";

const VideoCard = ({ video }) => {
  const {
    id,
    title,
    year,
    category,
    rating,
    isBookmarked,
    thumbnail: { regular },
  } = video;
  const { handleOnSetBookmarked } = useContext(VideoContext);
  return (
    <Wrapper>
      <ImageDiv src={useDownloadImageUrl(regular.large)}>
        <PlayButton />
      </ImageDiv>
      <InfoWrapper>
        <Info>
          <InfoSpan>{year}</InfoSpan>
          <Dot />
          <InfoSpan>
            <ShowCategory category={category} />
          </InfoSpan>
          <Dot />
          <InfoSpan>{rating}</InfoSpan>
        </Info>
        <Title>{title}</Title>
      </InfoWrapper>
      <BookMark
        bookmarked={isBookmarked}
        onClick={() => handleOnSetBookmarked(video)}
      />
    </Wrapper>
  );
};

export default VideoCard;
