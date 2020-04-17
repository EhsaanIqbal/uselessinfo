import React from "react";

const Navbar = () => {
  return (
    <header>
      <a href="/">
        <h1 className="title">UselessInfo</h1>
      </a>
      <ul className="top">
        <li className="menu">
          <a href="/about" className="links">
            about us
          </a>
        </li>
        <li className="menu">
          <a href="/contribute" className="links">
            contribute
          </a>
        </li>
        <li className="menu">
          <a href="/contact" className="links">
            contact us
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
