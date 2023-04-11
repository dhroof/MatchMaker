import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`navbar ${scroll ? "scroll" : ""}`}
    >
      <Link to="/" className="navbar-component">
        Home
      </Link>
      <Link to="/chat" className="navbar-component">
        Chat
      </Link>
      <Link to="/help" className="navbar-component">
        Help
      </Link>
      <div className="navbar-component matchmaker">
        <span className="match">Match</span>
        <span className="maker">Maker</span>
      </div>
      <Link to="/login" className="navbar-component login">
        Log In
      </Link>
      <Link to="/signup" className="navbar-component signup">
        Sign Up
      </Link>
    </nav>
  );
}

export default Navbar;
