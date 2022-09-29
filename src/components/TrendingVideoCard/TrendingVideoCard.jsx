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
  Image,
  Title,
} from "components/TrendingVideoCard/TrendingVideoCard.styles";
import { VideoContext } from "contex/VideoProvider";
import useDownloadImageUrl from "hooks/useDownloadImageUrl";

const TrendingVideoCard = ({ video }) => {
  const {
    id,
    title,
    year,
    rating,
    category,
    isBookmarked,
    thumbnail: { trending },
  } = video;

  const { handleOnSetBookmarked } = useContext(VideoContext);
  return (
    <Wrapper>
      <Image src={useDownloadImageUrl(trending.large)}>
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
        <PlayButton />
      </Image>
      <BookMark
        bookmarked={isBookmarked}
        onClick={() => handleOnSetBookmarked(video)}
      />
    </Wrapper>
  );
};

export default TrendingVideoCard;
