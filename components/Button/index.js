import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

export const Button = styled(ScrollLink)`
  border-radius: 20px;
  width: 100%;
  background: #2ca01c;
  white-space: nowrap;
  padding: 8px 40px;
  color: white;
  font-size: 30px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #ffffff;
    color: #2ca01c;
  }
`;
