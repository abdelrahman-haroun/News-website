import React, { useEffect, useState } from "react";
import "./Header.css";
import { FiMenu } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const navigateLogOut = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const userId = sessionStorage.getItem("id");
  useEffect(() => {
    if (userId !== null) {
      const res = axios
        .get(`http://localhost:3001/users/${userId}`)
        .then((res) => setUserDetails(res.data));
    }
  }, [userId]);
  function handelLogOut() {
    sessionStorage.clear();
    navigateLogOut("/");
  }
  return (
    <header className="header">
      <nav>
        <div className="header-left">
          <i className="fa-regular fa-newspaper fa-xl" />
          <h2 style={{ fontSize: "large" }}>Haroun-News</h2>
        </div>
        <div className={`header-right ${menuOpen ? "open" : ""}`}>
          <Link rel="stylesheet" to="/">
            <p>Home</p>
          </Link>
          <Link rel="stylesheet" to="/ShowNews">
            <p>News</p>
          </Link>
          {userId !== null && (
            <Link rel="stylesheet" to="/ShowPost">
              <p>Community</p>
            </Link>
          )}
          {userId === null && (
            <Link rel="stylesheet" to="/SignIn">
              <p>Community</p>
            </Link>
          )}
        </div>
        <div className={`profile-header ${menuOpen ? "open" : ""}`}>
          {userId !== null && <p>{userDetails.name}</p>}
          {userId !== null && (
            <img
              src={userDetails.imageUrl}
              alt=""
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
          )}
          <span style={{ display: "flex", alignItems: "center" }}>
            {userId === null && (
              <Link rel="stylesheet" to="/SignIn">
                <i className="fa-solid fa-arrow-right-to-bracket fa-xl" />
              </Link>
            )}
            {userId !== null && (
              <CiLogout
                style={{ fontSize: "x-large", cursor: "pointer" }}
                onClick={handelLogOut}
              />
            )}
          </span>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <FiMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
