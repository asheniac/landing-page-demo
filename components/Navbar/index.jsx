import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavButton,
  NavLink,
  NavButtonLink,
} from "./Navbar-styled-components";

const Navbar = ({ ToggleMobileMenu }) => {
  const [scroll, setScroll] = useState(false);

  const NavScrolling = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", NavScrolling);
  }, []);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <Logo to="/">Quick Book</Logo>
          <MobileIcon onClick={ToggleMobileMenu}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
        <NavMenu>
          <NavItem>
            <NavLink to="about">ABOUT</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="product">PRODUCT</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact">CONTACT</NavLink>
          </NavItem>
          <NavButton>
            <NavButtonLink to="signup">SIGN UP</NavButtonLink>
          </NavButton>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
