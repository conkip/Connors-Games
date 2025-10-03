/*
    Author: Connor Kippes
*/
import DesktopHeader from "./DesktopHeader"
import MobileHeader from "./MobileHeader"

import useWindowWidth from '../../hooks/useWindowWidth'

function Header() {
    const width = useWindowWidth();
    const isMobile = width < 1024;

    return isMobile ? <MobileHeader /> : <DesktopHeader />;
}

export default Header;
