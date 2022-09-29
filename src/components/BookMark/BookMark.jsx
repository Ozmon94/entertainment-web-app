import React from "react";
import { ReactComponent as BookMarkIconEmpty } from "assets/icon-bookmark-empty.svg";
import { Wrapper } from "components/BookMark/BookMark.styles";

const BookMark = ({ bookmarked, onClick }) => {
  return (
    <Wrapper bookmarked={bookmarked} onClick={onClick}>
      <BookMarkIconEmpty />
    </Wrapper>
  );
};

export default BookMark;
