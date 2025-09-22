/*
    Author: Connor Kippes
*/

import styles from "./Header.module.css";

import WebsiteTitle from "../WebsiteTitle/WebsiteTitle";
import MenuIcon from "../MenuIcon/MenuIcon";
import MenuSection from "../MenuSection/MenuSection";
import Navbar from '../Navbar/Navbar'
import NavItem from "../NavItem/NavItem";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false);
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

    useEffect(() => {
        if (open) {
            // disable background scroll when menu is open
            document.body.style.overflow = "hidden";
        } else {
        // re-enable background scroll
        document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <Navbar isSticky={true}>
                <WebsiteTitle />

                <MenuIcon
                    isOpen={open}
                    onClick={() => {
                        setOpen(!open);
                        handleCloseDropdowns();
                    }}
                />
            </Navbar>

            <div className={styles.menu} style={{display: `${open ? "block" : "none"}`}}>
            {open && (
                <>
                    <div className={styles.spacer}></div>
                    <MenuSection>
                        <NavItem
                            expandable={true}
                            onClick={() => {
                                setOpen1(!open1);
                                setOpen11(false);
                                setOpen12(false);
                            }}
                        >Products</NavItem>
                        {open1 && (
                            <MenuSection>
                                <NavItem
                                    expandable={true}
                                    onClick={() => setOpen11(!open11)}
                                >Games</NavItem>
                                {open11 && (
                                    <MenuSection>
                                        <Link
                                            onClick={() => {
                                                setOpen(false);
                                                handleCloseDropdowns();
                                            }}
                                            className={styles.link}
                                            to="/games/pixies"
                                        >
                                            <NavItem>Pixies</NavItem>
                                        </Link>
                                        <Link
                                            onClick={() => {
                                                setOpen(false);
                                                handleCloseDropdowns();
                                            }}
                                            className={styles.link}
                                            to="/games/wurfel-bohnanza"
                                        >
                                            <NavItem>Wurfel Bohnanza</NavItem>
                                        </Link>
                                        <Link
                                            onClick={() => {
                                                setOpen(false);
                                                handleCloseDropdowns();
                                            }}
                                            className={styles.link}
                                            to="/games/codenames"
                                        >
                                            <NavItem>Codenames</NavItem>
                                        </Link>

                                        {/*<a className={styles.link} href="https://papasgamesfree.io/papas-freezeria"target="_blank"><NavItem>Papas Games</NavItem></a>*/}
                                    </MenuSection>
                                )}

                                <NavItem
                                    expandable={true}
                                    onClick={() => setOpen12(!open12)}
                                >Tools</NavItem>
                                {open12 && (
                                    <MenuSection>
                                        <Link
                                            onClick={() => {
                                                setOpen(false);
                                                handleCloseDropdowns();
                                            }}
                                            className={styles.link}
                                            to="/tools/board-manager"
                                        >
                                            <NavItem>Score Keeper</NavItem>
                                        </Link>

                                        <Link
                                            onClick={() => {
                                                setOpen(false);
                                                handleCloseDropdowns();
                                            }}
                                            className={styles.link}
                                            to="/tools/tools-bar"
                                        >
                                            <NavItem>Tools Bar</NavItem>
                                        </Link>
                                    </MenuSection>
                                )}
                            </MenuSection>
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
                            className={styles.link}
                            to="/pricing"
                            onClick={() => {
                                setOpen(false);
                                handleCloseDropdowns();
                            }}
                        >
                            <NavItem>Pricing</NavItem>
                        </Link>
                        <Link
                            className={styles.link}
                            to="/login"
                            onClick={() => {
                                setOpen(false);
                                handleCloseDropdowns();
                            }}
                        >
                            <NavItem>Login</NavItem>
                        </Link>
                        <Link
                            className={styles.link}
                            to="/signup"
                            onClick={() => {
                                setOpen(false);
                                handleCloseDropdowns();
                            }}
                        >
                            <NavItem>SignUp</NavItem>
                        </Link>
                    </MenuSection>
                </>
            )}
            </div>
        </>
    );
}

export default Header;
