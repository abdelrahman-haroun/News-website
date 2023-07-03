import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="main-footer">
      <div className="footer">
        <div className="copy-right">
          <p>CopyRight by News</p>
        </div>
        <div className="social-links">
          <i className="fa-brands fa-facebook fa-xl" />
          <i className="fa-brands fa-linkedin fa-xl" />
          <i className="fa-brands fa-github fa-xl" />
        </div>
      </div>
    </div>
  );
}
