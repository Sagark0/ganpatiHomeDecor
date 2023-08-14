import "./appbar.css";
import { useState, useEffect } from "react";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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
        Ganpati Home Decor <span>.</span>
      </a>
      <IconButton
        className={`menuToggle ${menuToggleActive} ${headerStickyActive}`}
        size="large"
        edge="start"
        aria-label="menu"
        sx={{ color: "#fff" }}
        onClick={handleMenuToggle}
      >
        {menuToggleActive ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <ul className={`nav ${menuToggleActive}`}>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Our Work</a>
        </li>
        <li>
          <a>Contact Us</a>
        </li>
      </ul>
    </header>
  );
}
