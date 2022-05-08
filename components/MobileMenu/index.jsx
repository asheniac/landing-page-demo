import React from "react";
import {
  MobileMenuContainer,
  CloseIcon,
  Icon,
  MobileMenuWrapper,
  MobileMenuUl,
  MobileMenuLink,
  MobileMenuButtonWrap,
  MobileMenuButton,
} from "./MobileMenu-styled-component";

const MobileMenu = ({ isOpen, ToggleMobileMenu }) => {
  return (
    <MobileMenuContainer isOpen={isOpen} onClick={ToggleMobileMenu}>
      <Icon>
        <CloseIcon />
      </Icon>
      <MobileMenuWrapper>
        <MobileMenuUl>
          <MobileMenuLink to="about" onClick={ToggleMobileMenu}>
            ABOUT
          </MobileMenuLink>
        </MobileMenuUl>
        <MobileMenuUl>
          <MobileMenuLink to="product" onClick={ToggleMobileMenu}>
            PRODUCT
          </MobileMenuLink>
        </MobileMenuUl>
        <MobileMenuUl>
          <MobileMenuLink to="contact" onClick={ToggleMobileMenu}>
            CONTACT
          </MobileMenuLink>
        </MobileMenuUl>
        <MobileMenuButtonWrap>
          <MobileMenuButton to="signup">Sign UP</MobileMenuButton>
        </MobileMenuButtonWrap>
      </MobileMenuWrapper>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
