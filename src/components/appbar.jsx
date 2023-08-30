import "./appbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import logo from "../assets/logo1.png";

export default function AppBar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleMenuToggle = () => {
    setMenuToggle((prev) => !prev);
  };
  const headerStickyActive = scrolling ? "sticky" : null;
  const menuToggleActive = menuToggle ? "active" : null;
  return (
    <header className={headerStickyActive}>
      <a className="logo">
        <img src={logo} />
        Ganpati Home Decor <span>.</span>
      </a>
      <IconButton
        className={`menuToggle ${menuToggleActive} ${headerStickyActive}`}
        size="large"
        edge="start"
        aria-label="menu"
        sx={{ color: "#fff"}}
        onClick={handleMenuToggle}
      >
        {menuToggleActive ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <ul className={`nav ${menuToggleActive}`}>
        <li>
          <Link to="/" onClick={handleMenuToggle}>Home</Link>
        </li>
        <li>
          <a>Sanitary Ware & Tiles</a>
        </li>
        <li>
          <a>Construction</a>
        </li>
        <li>
          <Link to="decor" onClick={handleMenuToggle}>Ply & Decor</Link>
        </li>
        <li>
          <Link to="contact" onClick={handleMenuToggle}>Contact Us</Link>
        </li>
      </ul>
    </header>
  );
}
