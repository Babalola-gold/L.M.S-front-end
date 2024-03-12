import React, { useState } from 'react'; // Add this line to import React
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import img from "../../assets/notion11.png";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // Change React.useState to useState
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation();
  
  return (
    <nav className="bg-[#3E6CC1] fixed top-0 w-full flex justify-between text-white z-10 px-10 py-10">
      <div>
        <Link to="/home">
          <img src={img} alt="" className='h-10'/>
        </Link>
      </div>
      <div className="flex lg:gap-5 lg:me-10">
        <Button
          id="home-button"
          className={`nav-button ${location.pathname === '/home' ? 'active' : ''}`}
          component={Link}
          to="/"
        >
          Home
        </Button>
        <Button
          id="portal-button"
          className={`nav-button ${location.pathname.startsWith('/user') || location.pathname.startsWith('/admin') ? 'active' : ''}`}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          E-Portal
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "portal-button",
          }}
        >
          <MenuItem
            onClick={handleClose}
            component={Link}
            to="/admin/signup"
          >
            Staff
          </MenuItem>
          <MenuItem
            onClick={handleClose}
            component={Link}
            to="/user/signup"
          >
            Student
          </MenuItem>
        </Menu>
        <Button
          id="about-button"
          className={`nav-button ${location.pathname === '/about' ? 'active' : ''}`}
          component={Link}
          to="/about"
        >
          About
        </Button>
        <Button
          id="news-button"
          className={`nav-button ${location.pathname === '/career' ? 'active' : ''}`}
          component={Link}
          to="/career"
        >
          Careers
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;