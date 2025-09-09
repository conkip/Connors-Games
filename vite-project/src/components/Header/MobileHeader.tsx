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
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        // clean up in case the component unmounts while menu is open
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <>
            <Navbar>
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
                            text="Products"
                            expandable={true}
                            onClick={() => {
                                setOpen1(!open1);
                                setOpen11(false);
                                setOpen12(false);
                            }}
                        />
                        {open1 && (
                            <MenuSection>
                                <NavItem
                                    text="Games"
                                    expandable={true}
                                    onClick={() => setOpen11(!open11)}
                                />
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
                                            <NavItem text="Pixies" />
                                        </Link>
                                        <Link
                                            onClick={() => {
                                                setOpen(false);
                                                handleCloseDropdowns();
                                            }}
                                            className={styles.link}
                                            to="/games/wurfel-bohnanza"
                                        >
                                            <NavItem text="Wurfel Bohnanza" />
                                        </Link>
                                        <Link
                                            onClick={() => {
                                                setOpen(false);
                                                handleCloseDropdowns();
                                            }}
                                            className={styles.link}
                                            to="/games/codenames"
                                        >
                                            <NavItem text="Codenames" />
                                        </Link>
                                    </MenuSection>
                                )}

                                <NavItem
                                    text="Tools"
                                    expandable={true}
                                    onClick={() => setOpen12(!open12)}
                                />
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
                                            <NavItem text="Score Keeper" />
                                        </Link>

                                        <Link
                                            onClick={() => {
                                                setOpen(false);
                                                handleCloseDropdowns();
                                            }}
                                            className={styles.link}
                                            to="/tools/tools-bar"
                                        >
                                            <NavItem text="Tools Bar" />
                                        </Link>
                                    </MenuSection>
                                )}
                            </MenuSection>
                        )}

                        <NavItem
                            text="Solutions"
                            expandable={true}
                            onClick={() => setOpen2(!open2)}
                        />
                        {open2 && (
                            <MenuSection>
                                <div>Multiplayer</div>
                            </MenuSection>
                        )}

                        <NavItem
                            text="Resources"
                            expandable={true}
                            onClick={() => setOpen3(!open3)}
                        />
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
                            <NavItem text="Pricing" />
                        </Link>
                        <Link
                            className={styles.link}
                            to="/login"
                            onClick={() => {
                                setOpen(false);
                                handleCloseDropdowns();
                            }}
                        >
                            <NavItem text="Login"></NavItem>
                        </Link>
                        <Link
                            className={styles.link}
                            to="/signup"
                            onClick={() => {
                                setOpen(false);
                                handleCloseDropdowns();
                            }}
                        >
                            <NavItem text="Signup"></NavItem>
                        </Link>
                    </MenuSection>
                </>
            )}
            </div>
        </>
    );
}

export default Header;
