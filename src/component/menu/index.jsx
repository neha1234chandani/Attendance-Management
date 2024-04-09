import Wrapper from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const currentUser = useSelector((state) => state.currentUser);

  const menuOpenHandler = () => {
    setOpenMenu((prevValue) => !prevValue);
  };

  let links = null;

  if (currentUser.role === "student") {
    links = (
      <ul>
        <li onClick={menuOpenHandler}>
          <NavLink to="/student-home-page" activeClass="active">
            Home
          </NavLink>
        </li>
        <li onClick={menuOpenHandler}>
          <NavLink to="/student-attendance-view " activeClass="active">
            View Attendance
          </NavLink>
        </li>
        <li onClick={menuOpenHandler}>
          <NavLink to="/update-profile" activeClass="active">
            Update Profile
          </NavLink>
        </li>
      </ul>
    );
  } else if (currentUser.role === "faculty") {
    links = (
      <ul>
        <li onClick={menuOpenHandler}>
          <NavLink to="/faculty-home-page" activeClass="active">
            Home
          </NavLink>
        </li>
        <li onClick={menuOpenHandler}>
          <NavLink to="/attendance-mark" activeClass="active">
            Mark Attendance
          </NavLink>
        </li>
        <li onClick={menuOpenHandler}>
          <NavLink to="/faculty-view" activeClass="active">
            View Attendance
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <Wrapper
      style={currentUser.name ? { display: "block" } : { display: "none" }}
    >
      <div className="hamburger-icon" onClick={menuOpenHandler}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div
        className="black-background"
        style={openMenu ? { display: "block" } : { display: "none" }}
        onClick={menuOpenHandler}
      ></div>
      <div
        className="menu"
        style={
          openMenu
            ? { animationName: "menuSlideIn" }
            : { animationName: "menuSlideOut" }
        }
      >
        <div className="close" onClick={menuOpenHandler}>
          X
        </div>
        {links}
      </div>
    </Wrapper>
  );
};

export default Menu;
