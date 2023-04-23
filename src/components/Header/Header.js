import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        <button type="button" className="mode">
          on
        </button>
        <nav className="nav">
          <Link to="/me">Home</Link>
          <Link to="/me/Archive">Archive</Link>
          <Link to="/me/About">About</Link>
          <Link to="/me">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 512 512"
              fill="#ED812E"
            >
              <title>RSS</title>
              <path d="M108.56,342.78a60.34,60.34,0,1,0,60.56,60.44A60.63,60.63,0,0,0,108.56,342.78Z"></path>
              <path d="M48,186.67v86.55c52,0,101.94,15.39,138.67,52.11s52,86.56,52,138.67h86.66C325.33,312.44,199.67,186.67,48,186.67Z"></path>
              <path d="M48,48v86.56c185.25,0,329.22,144.08,329.22,329.44H464C464,234.66,277.67,48,48,48Z"></path>
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;