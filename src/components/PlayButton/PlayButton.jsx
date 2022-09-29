import { ReactComponent as PlayIcon } from "assets/icon-play.svg";
import {
  StyledButton,
  PlayText,
} from "components/PlayButton/PlayButton.styles";

const PlayButton = () => {
  return (
    <StyledButton>
      <PlayIcon />
      <PlayText>Play</PlayText>
    </StyledButton>
  );
};

export default PlayButton;
