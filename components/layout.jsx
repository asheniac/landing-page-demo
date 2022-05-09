import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { useRouter } from "next/router";

import React, { useState } from "react";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  const router = useRouter();
  console.log(router.asPath);

  return (
    <>
      {router.asPath !== "/signup" && (
        <>
          <Navbar ToggleMobileMenu={ToggleMobileMenu} />
          <MobileMenu isOpen={isOpen} ToggleMobileMenu={ToggleMobileMenu} />
        </>
      )}

      <main>{children}</main>
      <Footer />
    </>
  );
}
