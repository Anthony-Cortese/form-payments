import React from "react";
// import { Link } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

function Navbar() {
  return (
    <section id="navbar" className="section1">
      <div className="full-navbar">
        <div className="navigation-div">
          <nav className="navigation">
            {/* <Link to="/About" style={{ textDecoration: "none" }}> */}{" "}
            <ul>ABOUT</ul> {/* </Link> */}
            {/* <Link to="/" style={{ textDecoration: "none" }}> */}
            <ul>PRODUCTIONS</ul>
            {/* </Link> */}
            {/* <Link to="/SLCOscars" style={{ textDecoration: "none" }}> */}
            <ul>SLC OSCARS</ul>
            {/* </Link> */}
          </nav>
        </div>

        <div className="navbar-logo">
          {/* <Link to="/" style={{ textDecoration: "none" }}> */}
          <img className="logos-nav" alt="logos"></img>
          {/* </Link> */}
        </div>

        <div className="logos-navbar">
          <a href="https://www.youtube.com/channel/UCWaEaluGSg-on1BsWwrsOag">
            <BsYoutube className="logos-icon" />
          </a>

          <a href="https://www.instagram.com/infinityforeverproductions/">
            <AiFillInstagram className="logos-icon" />
          </a>

          {/* <a href="/Menu" style={{ textDecoration: "none" }}>
            <RiMenuAddFill className="logos-icon1" alt="stairs" />
          </a> */}

          {/* <button
            id="sidebar-button"
            onClick={() => showSidebar}
            className="media-button"
          >
            <RiMenuAddFill className="logos-icon1" />
          </button>
          {sidebar && <Menu />} */}
          {/* <label id="hamburger" for="toggle"></label>
          <input type="checkbox" id="toggle" /> */}
        </div>
      </div>
    </section>
  );
}

export default Navbar;
