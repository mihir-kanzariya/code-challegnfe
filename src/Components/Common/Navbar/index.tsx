import * as React from "react";
import DefaultProfile from "Assets/Images/Profile/default.png";
import Wrapper, { MenuListIcon, MenuWrapper } from "./style";

const Menu: React.FunctionComponent<{ open: boolean }> = ({ open }) => (
  <MenuWrapper open={open}>
    <div className="navbar__profile--wrapper">
      <div className="navbar__profile--image">
        <img src={DefaultProfile} alt="profile" />
      </div>
      <div className="navbar__profile--name">
        <h3>Jimmy Hendrix</h3>
      </div>
      <div className="navbar__profile--link">
        <span>View Profile</span>
      </div>
    </div>
    <div className="navbar__menu--links">
      <ul>
        <li className="navbar__menu--items active">
          <span className="navbar__menu--name">Dashboard</span>
        </li>
        <li className="navbar__menu--items">
          <span className="navbar__menu--name">Tasks</span>
        </li>
        <li className="navbar__menu--items">
          <span className="navbar__menu--name">Gym Clubs</span>
        </li>
        <li className="navbar__menu--items">
          <span className="navbar__menu--name">Your Connections</span>
        </li>
      </ul>
    </div>
    <div className="navbar__box--wrapper">
      <div className="navbar__box--title">My Mentor</div>
    </div>
  </MenuWrapper>
);

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Wrapper>
      {/* Mobile Navbar with Drawer */}
      <div className="navbar__mobile--wrapper">
        <MenuListIcon open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </MenuListIcon>
        <Menu open={open} />
      </div>
      {/* Desktop Navbar */}
      <div className="navbar__desktop--wrapper">
        <Menu open={true} />
      </div>
    </Wrapper>
  );
};

export default Navbar;
