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

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Nav scroll={scroll}>
        <NavbarContainer>
          <Logo to="/" onClick={scrollToTop}>
            Quick Book
          </Logo>
          <MobileIcon onClick={ToggleMobileMenu}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
        <NavMenu>
          <NavItem>
            <NavLink
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              ABOUT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="product"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              PRODUCT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              CONTACT
            </NavLink>
          </NavItem>
          <NavButton>
            <NextLink href="/signup">
              <NavButtonLink>SIGN UP</NavButtonLink>
            </NextLink>
          </NavButton>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
