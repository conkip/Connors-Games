/*
    Author: Connor Kippes
*/

import styles from "./Header.module.css";

import WebsiteTitle from "../WebsiteTitle/WebsiteTitle";
import MenuIcon from "../MenuIcon/MenuIcon";
import Navbar from '../Navbar/Navbar'
import NavItem from "../NavItem/NavItem";
import Dropdown from '../Dropdown/Dropdown'

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
            
                {open && (
                    <Dropdown top="4rem" left="calc(100%)" width="92%">
                        <div className={styles.menu}>
                        <div className={styles.mobileMenuContent}>
                            <NavItem
                                expandable={true}
                                onClick={() => {
                                    setOpen1(!open1);
                                    setOpen11(false);
                                    setOpen12(false);
                                }}
                            >Products</NavItem>
                            {open1 && (
                                <div className={styles.mobileMenuContent}>
                                    <NavItem
                                        expandable={true}
                                        onClick={() => setOpen11(!open11)}
                                    >Games</NavItem>
                                    {open11 && (
                                        <div className={styles.mobileMenuContent}>
                                            <Link
                                                onClick={() => {
                                                    setOpen(false);
                                                    handleCloseDropdowns();
                                                }}
                                                className={styles.link}
                                                to="/games/pixies"
                                            >
                                                <h6 className={styles.link}>Pixies</h6>
                                            </Link>
                                            <Link
                                                onClick={() => {
                                                    setOpen(false);
                                                    handleCloseDropdowns();
                                                }}
                                                className={styles.link}
                                                to="/games/wurfel-bohnanza"
                                            >
                                                <h6 className={styles.link}>Wurfel Bohnanza</h6>
                                            </Link>
                                            <Link
                                                onClick={() => {
                                                    setOpen(false);
                                                    handleCloseDropdowns();
                                                }}
                                                className={styles.link}
                                                to="/games/codenames"
                                            >
                                                <h6 className={styles.link}>Codenames</h6>
                                            </Link>

                                            {/*<a className={styles.link} href="https://papasgamesfree.io/papas-freezeria"target="_blank"><NavItem>Papas Games</NavItem></a>*/}
                                        </div>
                                    )}

                                    <NavItem
                                        expandable={true}
                                        onClick={() => setOpen12(!open12)}
                                    >Tools</NavItem>
                                    {open12 && (
                                        <div className={styles.mobileMenuContent}>
                                            <Link
                                                onClick={() => {
                                                    setOpen(false);
                                                    handleCloseDropdowns();
                                                }}
                                                className={styles.link}
                                                to="/tools/board-manager"
                                            >
                                                <h6 className={styles.link}>Score Keeper</h6>
                                            </Link>

                                            <Link
                                                onClick={() => {
                                                    setOpen(false);
                                                    handleCloseDropdowns();
                                                }}
                                                className={styles.link}
                                                to="/tools/tools-bar"
                                            >
                                                <h6 className={styles.link}>Tools Bar</h6>
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )}

                            <NavItem
                                expandable={true}
                                onClick={() => setOpen2(!open2)}
                            >Solutions</NavItem>
                            {open2 && (
                                <div className={styles.mobileMenuContent}>
                                    <h6>Multiplayer - <span className={styles.subtext}>Play with your friends!</span></h6>
                                    <h6>Easy to Use - <span className={styles.subtext}>No complicated signups.</span></h6>
                                    <h6>Built in Tools - <span className={styles.subtext}>Can use tools like a Score Keeper in game!</span></h6>
                                </div>
                            )}

                            <NavItem
                                expandable={true}
                                onClick={() => setOpen3(!open3)}
                            >Resources</NavItem>
                            {open3 && (
                                <div className={styles.mobileMenuContent}>
                                    <h6>Email - <span><a className={`${styles.link} ${styles.subtext}`} href="mailto:connorkippes1@gmail.com">connorkippes1@gmail.com</a></span></h6>
                                    <h6>Phone - <span><a className={`${styles.link} ${styles.subtext}`}  href="tel:+1-480-465-3241">(480) 465-3241</a></span></h6>
                                </div>
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
                        </div>
                        </div>
                    </Dropdown>
                )}
            </Navbar>
        </>
    );
}

export default Header;
