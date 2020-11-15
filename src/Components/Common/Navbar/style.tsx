import styled from "@emotion/styled";
import { SIDEBAR, COLORS } from "Helpers/theme";

const { PRIMARY, SECONDARY } = COLORS;
const { WIDTH, COLOR, FONT_COLOR } = SIDEBAR;

type DrawereProps = {
  open: boolean;
};

export default styled("section")`
  position: relative;
  width: ${WIDTH}px;
  .navbar__mobile--wrapper{
    display : none;
  }
  .navbar__desktop--wrapper {
    display: flex;
  }
  @media (max-width: 800px) {
    .navbar__desktop--wrapper {
      display : none;
    }
    .navbar__mobile--wrapper {
      display: flex;
    }
  }
`;

export const MenuWrapper = styled.nav<DrawereProps>`
  display: flex;
  flex-direction: column;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  width: ${WIDTH}px;
  height: 765px;
  background: transparent linear-gradient(345deg, ${COLOR} 0%, ${PRIMARY} 100%)
    0% 0% no-repeat padding-box;
  box-shadow: rgb(243, 243, 251) 0 -50px 0;
  border-radius: 0px 47px 0px 0px;
  color: ${FONT_COLOR};
  padding: 50px 0;
  opacity: 1;
  .navbar__profile--wrapper {
    margin-bottom: 25px;
    padding: 0 40px;
    .navbar__profile--image {
      width: 60px;
      height: 60px;
    }
    .navbar__profile--name {
      font-size: 14px;
      letter-spacing: 0px;
    }
    .navbar__profile--link {
      text-decoration: underline;
      font-size: 12px;
      opacity: 0.8;
    }
  }
  .navbar__menu--links {
    ul {
      padding: 0;
      list-style: none;
    }
    .navbar__menu--items {
      font-weight: bold;
      padding: 0 40px;
      display: flex;
      height: 47px;
      align-items: center;
      cursor: pointer;
      position: relative;
      &.active {
        ::after {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0px 23px 0px 24px;
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          content: "";
        }
      }
      .navbar__menu--name {
        font-size: 12px;
        text-transform: capitalize;
      }
    }
  }
  .navbar__box--wrapper {
    height: 156px;
    width: 176px;
    padding: 0 40px;
    margin: 0 23px;
    position: absolute;
    bottom: 23px;
    ::after {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 0px 23px 0px 24px;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      content: "";
    }
    .navbar__box--title {
      font-size: 12px;
      font-weight: bold;
      letter-spacing: 0px;
      text-transform: uppercase;
      margin: 20px 0;
    }
  }
`;

export const MenuListIcon = styled.button<DrawereProps>`
  display: flex;
  position: absolute;
  top: 25px;
  left: 25px;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 30px;
    height: 0.25rem;
    background: ${({ open }) => (open ? SECONDARY : PRIMARY)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
