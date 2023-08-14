import './appbar.css';
import { useState, useEffect } from 'react';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function AppBar() {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const headerClassName = scrolling ? 'sticky' : null;

  return (
    <header className={headerClassName}>

        <a className='logo'>Ganpati Home Decor <span>.</span></a>
        <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{color: '#fff' }}
          >
            <MenuIcon />
          </IconButton>
        <ul className="nav">
            <li><a>Home</a></li>
            <li><a>Our Work</a></li>
            <li><a>Contact Us</a></li>
        </ul>
    </header>
  );
}
