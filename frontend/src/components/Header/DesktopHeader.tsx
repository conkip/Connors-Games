/*
    Author: Connor Kippes
*/

import styles from './Header.module.css'
import WebsiteTitle from '../WebsiteTitle/WebsiteTitle'
import Button from '../Button/Button'
import NavItem from '../NavItem/NavItem'
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

    return (
        <Navbar isSticky={true}>
            {/*-----WEBSITE TITlE-----*/}
            <WebsiteTitle />


            {/*-----NAV LINKS/ DROPDOWNS-----*/}
            <div className={styles.headerItems}>
                <button className={styles.button}>
                    <NavItem
                        expandable={true}
                        onClick={() => {
                            handleCloseDropdowns();
                            setOpen1(!open1);
                        }}
                    >Products</NavItem>
                </button>
                {open1 && (
                    <Dropdown top="5.5rem" left="100%" width="70%" height="10rem">
                        <NavItem
                            expandable={true}
                            onClick={() => setOpen11(!open11)}
                        >Games</NavItem>
                        {open11 && (
                            <div className={styles.menuSection}>
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
                            </div>
                        )}

                        <NavItem
                            expandable={true}
                            onClick={() => setOpen12(!open12)}
                        >Tools</NavItem>
                        {open12 && (
                            <div className={styles.menuSection}>
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
                            </div>
                        )}
                    </Dropdown>
                )}

                <NavItem
                    expandable={true}
                    onClick={() => setOpen2(!open2)}
                >Solutions</NavItem>
                {open2 && (
                    <Dropdown top="5.5rem" left="100%" width="80%" height="10rem">
                        <div className={styles.menuSection}>
                            <div>Multiplayer</div>
                        </div>
                    </Dropdown>
                )}

                <NavItem
                    expandable={true}
                    onClick={() => setOpen3(!open3)}
                >Resources</NavItem>
                {open3 && (
                    <Dropdown top="5.5rem" left="100%" width="80%" height="10rem">
                        <div className={styles.menuSection}>
                            <div>Contact</div>
                        </div>
                    </Dropdown>
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
