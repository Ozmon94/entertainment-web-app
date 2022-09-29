import VideoCard from "components/VideoCard/VideoCard";
import {
  Wrapper,
  Title,
  VideoWrapper,
} from "components/VideoList/VideoList.styles";

const VideoList = ({ title, videos }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <VideoWrapper>
        {videos.length > 0 &&
          videos.map((video) => <VideoCard video={video} key={video.title} />)}
      </VideoWrapper>
    </Wrapper>
  );
};

export default VideoList;
