import styled from "styled-components";
import { ReactComponent as Logo } from "assets/logo.svg";
import { NavLink } from "react-router-dom";

export const StyledLogo = styled(Logo)`
  transform: scale(0.75);

  @media screen and (min-width: 376px) {
    transform: scale(1);
  }
`;

export const StyledNav = styled.nav`
  width: 20px;
  flex: 1;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media screen and (min-width: 1025px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  transform: scale(0.8);

  &.active svg path {
    fill: ${(props) => props.theme.colors.pureWhite};
  }
  &:hover svg path {
    fill: ${(props) => props.theme.colors.red};
  }

  @media screen and (min-width: 376px) {
    transform: scale(1);
  }
`;

export const LogoWrapper = styled.div`
  margin-left: 16px;
  a {
    display: flex;
  }
  @media screen and (min-width: 376px) {
    margin-left: 24px;
  }
  @media screen and (min-width: 1025px) {
    margin: 35px 0 75px;
  }
`;

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.semiDarkBlue};

  align-items: center;
  position: fixed;
  top: 0;
  bottom: unset;
  right: 0;
  left: 0;
  display: flex;
  height: 56px;
  z-index: 1000;

  @media screen and (min-width: 376px) {
    top: 24px;
    left: 24px;
    right: 24px;
    border-radius: 10px;
    height: 72px;
  }

  @media screen and (min-width: 1025px) {
    width: 96px;
    flex-direction: column;
    top: 32px;
    left: 32px;
    bottom: 32px;
    right: unset;
    height: unset;
    border-radius: 20px;
  }
`;
export const UserAvatarWrapper = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.pureWhite};
  margin-right: 16px;

  @media screen and (min-width: 376px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1025px) {
    width: 40px;
    height: 40px;
    margin-right: 0;
    margin-bottom: 32px;
  }
`;

export const UserAvatarImage = styled.img`
  width: 100%;
`;
