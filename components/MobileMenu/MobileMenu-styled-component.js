import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export const MobileMenuContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000000;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #2ca01c;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.6rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const MobileMenuWrapper = styled.div`
  color: #ffffff;
`;

export const MobileMenuUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 30px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 30px);
  }
`;

export const MobileMenuLink = styled(ScrollLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #2ca01c;
    transition: 0.2s ease-in-out;
  }
`;

export const MobileMenuButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const MobileMenuButton = styled.a`
  border-radius: 50px;
  background: #2ca01c;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000000;
  }
`;
