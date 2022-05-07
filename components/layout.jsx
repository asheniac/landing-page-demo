import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

import React, { useState } from "react";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar ToggleMobileMenu={ToggleMobileMenu} />
      <MobileMenu isOpen={isOpen} ToggleMobileMenu={ToggleMobileMenu} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
