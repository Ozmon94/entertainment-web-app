import React from "react";
import { SearchInput } from "components/SearchField/SearchField";
import { Wrapper, StyledSearchLogo } from "components/Search/Search.styles";

const Search = ({ searchValue, setSearchValue, placeholder }) => {
  return (
    <Wrapper>
      <StyledSearchLogo />
      <SearchInput
        placeholder={placeholder}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </Wrapper>
  );
};

export default Search;
