import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as HomeLogo } from "assets/icon-nav-home.svg";
import { ReactComponent as BookmarkLogo } from "assets/icon-nav-bookmark.svg";
import { ReactComponent as MoviesLogo } from "assets/icon-nav-movies.svg";
import { ReactComponent as TvSeriesLogo } from "assets/icon-nav-tv-series.svg";
import userAvatar from "assets/image-avatar.png";
import useAuth from "hooks/useAuth";
import {
  Wrapper,
  StyledLogo,
  StyledNav,
  StyledNavLink,
  LogoWrapper,
  UserAvatarImage,
  UserAvatarWrapper,
} from "components/Navigation/Navigation.styles";

const Navigation = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleOnLogOut = () => {
    logout()
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <NavLink to={"/"}>
          <StyledLogo />
        </NavLink>
      </LogoWrapper>
      <StyledNav>
        <StyledNavLink to={"/"}>
          <HomeLogo />
        </StyledNavLink>

        <StyledNavLink to={"/movies"}>
          <MoviesLogo />
        </StyledNavLink>

        <StyledNavLink to={"/tv-series"}>
          <TvSeriesLogo />
        </StyledNavLink>

        <StyledNavLink to={"/book-marked"}>
          <BookmarkLogo />
        </StyledNavLink>
      </StyledNav>
      <UserAvatarWrapper onClick={handleOnLogOut}>
        <UserAvatarImage src={userAvatar} alt={"avatar"} />
      </UserAvatarWrapper>
    </Wrapper>
  );
};

export default Navigation;
