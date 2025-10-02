/*
    Author: Connor Kippes
*/

import styles from './Header.module.css'
import WebsiteTitle from '../WebsiteTitle/WebsiteTitle'
import Button from '../Button/Button'
import NavItem from '../NavItem/NavItem'
import MenuSection from '../MenuSection/MenuSection'
import Dropdown from '../Dropdown/Dropdown'
import Navbar from '../Navbar/Navbar'

import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

function DesktopHeader() {
    const [open1, setOpen1] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    function handleCloseDropdowns() {
        setOpen1(false);
        setOpen11(false);
        setOpen12(false);
        setOpen2(false);
        setOpen2(false);
        setOpen3(false);
    }

    const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null);
    const button1Ref = useRef<HTMLButtonElement>(null);
    const button2Ref = useRef<HTMLButtonElement>(null);
    const button3Ref = useRef<HTMLButtonElement>(null);

    const handleClick = (ref: React.RefObject<HTMLButtonElement | null>) => {
        if(ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setDropdownPos({
                top: rect.bottom + window.scrollY,
                left: rect.right + window.scrollX,
            });
        }
    };

    // close popup when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (
                dropdownPos &&
                (button1Ref.current || button2Ref.current || button3Ref.current) &&
                (!button1Ref.current?.contains(e.target as Node) ||
                !button2Ref.current?.contains(e.target as Node) ||
                !button3Ref.current?.contains(e.target as Node))
            ) {
                setDropdownPos(null);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [dropdownPos]);

    return (
        <Navbar isSticky={true}>
            {/*-----WEBSITE TITlE-----*/}
            <WebsiteTitle />


            {/*-----NAV LINKS/ DROPDOWNS-----*/}
            <div className={styles.headerItems}>
                <button className={styles.button} ref={button1Ref} onClick={() => handleClick(button1Ref)}>
                    <NavItem
                        expandable={true}
                        onClick={() => {
                            setOpen1(!open1);
                            setOpen11(false);
                            setOpen12(false);
                        }}
                    >Products</NavItem>
                </button>
                {open1 && dropdownPos && (
                    <Dropdown top={dropdownPos.top} left={dropdownPos.left}>
                        <NavItem
                            expandable={true}
                            onClick={() => setOpen11(!open11)}
                        >Games</NavItem>
                        {open11 && (
                            <MenuSection>
                                <Link
                                    onClick={handleCloseDropdowns}
                                    className={styles.link}
                                    to="/games/pixies"
                                >
                                    <NavItem>Pixies</NavItem>
                                </Link>
                                <Link
                                    onClick={handleCloseDropdowns}
                                    className={styles.link}
                                    to="/games/wurfel-bohnanza"
                                >
                                    <NavItem>Wurfel Bohnanza</NavItem>
                                </Link>
                                <Link
                                    onClick={handleCloseDropdowns}
                                    className={styles.link}
                                    to="/games/codenames"
                                >
                                    <NavItem>Codenames</NavItem>
                                </Link>
                            </MenuSection>
                        )}

                        <NavItem
                            expandable={true}
                            onClick={() => setOpen12(!open12)}
                        >Tools</NavItem>
                        {open12 && (
                            <MenuSection>
                                <Link
                                    onClick={handleCloseDropdowns}
                                    className={styles.link}
                                    to="/tools/board-manager"
                                >
                                    <NavItem>Score Keeper</NavItem>
                                </Link>

                                <Link
                                    onClick={handleCloseDropdowns}
                                    className={styles.link}
                                    to="/tools/tools-bar"
                                >
                                    <NavItem>Tool Bar</NavItem>
                                </Link>
                            </MenuSection>
                        )}
                    </Dropdown>
                )}

                <NavItem
                    expandable={true}
                    onClick={() => setOpen2(!open2)}
                >Solutions</NavItem>
                {open2 && (
                    <MenuSection>
                        <div>Multiplayer</div>
                    </MenuSection>
                )}

                <NavItem
                    expandable={true}
                    onClick={() => setOpen3(!open3)}
                >Resources</NavItem>
                {open3 && (
                    <MenuSection>
                        <div>Contact</div>
                    </MenuSection>
                )}

                <Link
                    onClick={handleCloseDropdowns}
                    className={styles.link}
                    to="/pricing"
                >
                    <NavItem>Pricing</NavItem>
                </Link>
            </div>

            {/*-----LOGIN/SIGNUP-----*/}
            <div className={styles.headerItems}>
                <Link
                    onClick={handleCloseDropdowns}
                    className={styles.link}
                    to="/login"
                >
                    <NavItem>Login</NavItem>
                </Link>
                <Link className={styles.link} to="/signup">
                    <Button isSquishy={true} onClick={handleCloseDropdowns}>
                        Get Started
                    </Button>
                </Link>
            </div>
        </Navbar>
    );
}

export default DesktopHeader;
