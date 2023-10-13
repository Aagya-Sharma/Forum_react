import React from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import "../assets/css/NavBar.css";
import { useForumStore } from '../store';

function Navbar() {
  const navigate = useNavigate();
  const { logout, setUser } = useForumStore();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    if (confirmLogout) {
      logout();
      setUser({});
      navigate("/");
    }
  };
  return (
    <div className="navbar">
      <NavLink to="/forums" activeClassName="active" className="forums-button">
        Forum
      </NavLink>
      <NavLink to="/forum-creation" activeClassName="active" className="forums-button">
        Add Forum
      </NavLink>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
}

export default Navbar;
