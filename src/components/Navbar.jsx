import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const handleNavCollapse = (isNavCollapsed, setIsNavCollapsed) =>
  setIsNavCollapsed(!isNavCollapsed);

export const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/home">
        Minutentag
      </Link>
      <button
        className="custom-toggler navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={() => handleNavCollapse(isNavCollapsed, setIsNavCollapsed)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}>
        <div className="navbar-nav ">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/focusable"
          >
            Focusable
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/grocery"
          >
            Grocery
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/image-gallery"
          >
            Image gallery
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/list-items"
          >
            List Items
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/message"
          >
            Message
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/player-status"
          >
            Player Status
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/rating"
          >
            Rating
          </NavLink>
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            to="/teams-list"
          >
            Teams List
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
