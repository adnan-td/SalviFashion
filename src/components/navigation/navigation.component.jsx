import { Fragment, useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "./navigation.style.scss";

const navResponse = 790;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenwidth, Setscreenwidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      Setscreenwidth(window.innerWidth);
      if (window.innerWidth > navResponse) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Fragment>
      <div className="navigation">
        <div className="nav-links-container" style={!isOpen && screenwidth < navResponse ? { display: "none" } : { display: "flex" }} open={isOpen}>
          <NavLink className="nav-link" to="/products">
            <span>Products</span>
          </NavLink>
          <NavLink className="nav-link" to="/about">
            <span>About</span>
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            <span>Contact</span>
          </NavLink>
        </div>
        <div className="nav-link-header">
          <NavLink className="nav-link" to="/">
            SalviFashion
          </NavLink>
        </div>
        <div className="nav-button-container" style={!isOpen && screenwidth < navResponse ? { display: "none" } : { display: "flex" }} open={isOpen}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <NavLink className="nav-b1" to="#">
              Log In
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <NavLink className="nav-b2" to="#">
              Sign Up
            </NavLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }}>
            <NavLink className="nav-b3" to="#">
              <i className="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </motion.div>
        </div>
        <NavLink className="nav-b3-duplicate" to="#" style={screenwidth < navResponse ? { display: "flex" } : { display: "none" }} open={isOpen}>
          <i className="fa-solid fa-cart-shopping"></i>
        </NavLink>
        <button
          className="nav-toggle"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
