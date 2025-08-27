/*
    Author: Connor Kippes
*/

import { useState, useEffect } from "react";

import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function Header() {
  const width = useWindowWidth();
  const isMobile = width < 1024;

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}

export default Header