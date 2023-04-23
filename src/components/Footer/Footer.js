import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="link">
          <Link to="https://github.com/bitnaleeeee" target="_blank">GitHub</Link>
          <Link to="https://bitnalee.dev" target="_blank">Blog</Link>
          <Link to="mailto:bitnaleeeee@gmail.com" target="_blank">Mail</Link>
        </div>
        <p className="copy">
          copyright ⓒ 2023 bitnalee All rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;