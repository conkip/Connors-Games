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
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const buttonRef1 = useRef<HTMLButtonElement | null>(null);
    const buttonRef2 = useRef<HTMLButtonElement | null>(null);
    const buttonRef3 = useRef<HTMLButtonElement | null>(null);

    const navRef1 = useRef<HTMLDivElement | null>(null);
    const navRef2 = useRef<HTMLDivElement | null>(null);
    const navRef3 = useRef<HTMLDivElement | null>(null);

    function handleCloseDropdowns() {
        setOpen1(false);
        setOpen2(false);
        setOpen3(false);
    }

    // close popup when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (
                open1 &&
                navRef1.current && buttonRef1.current &&
                !navRef1.current.contains(e.target as Node) &&
                !buttonRef1.current.contains(e.target as Node)
            ) {
                handleCloseDropdowns();
            }
            if (
                open2 &&
                navRef2.current && buttonRef2.current &&
                !navRef2.current.contains(e.target as Node) &&
                !buttonRef2.current.contains(e.target as Node)
            ) {
                handleCloseDropdowns();
            }
            if (
                open3 &&
                navRef3.current && buttonRef3.current &&
                !navRef3.current.contains(e.target as Node) &&
                !buttonRef3.current.contains(e.target as Node)
            ) {
                handleCloseDropdowns();
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [open1, open2, open3]);

    return (
        <Navbar isSticky={true}>
            {/*-----WEBSITE TITlE-----*/}
            <WebsiteTitle />


            {/*-----NAV LINKS/ DROPDOWNS-----*/}
            <div className={styles.headerItems}>

                {/*------PRODUCTS------*/}
                <button ref={buttonRef1} className={styles.button}>
                    <NavItem
                        expandable={true}
                        onClick={() => {
                            handleCloseDropdowns();
                            setOpen1(!open1);
                        }}
                        active={open1}
                    >Products</NavItem>
                </button>
                {open1 && (
                    <Dropdown top="4rem" left="100%" width="70%" fadeIn={true}>
                        <div ref={navRef1} className={styles.dropdownContainer}>
                            <div className={styles.side}>
                                <h4>Games</h4>
                                <p className={styles.subtext}>
                                    Play online multiplayer versions of {" "}
                                    <Link
                                        onClick={handleCloseDropdowns}
                                        className={styles.link}
                                        to="/games/pixies"
                                    >
                                        <p className={styles.inline}>Pixies</p>
                                    </Link>, {" "}
                                    <Link
                                        onClick={handleCloseDropdowns}
                                        className={styles.link}
                                        to="/games/wurfel-bohnanza"
                                    >
                                        <p className={styles.inline}>Wurfel Bohnanza</p>
                                    </Link>, or {" "}
                                    <Link
                                        onClick={handleCloseDropdowns}
                                        className={styles.link}
                                        to="/games/wurfel-bohnanza"
                                    >
                                        <p className={styles.inline}>Codenames</p>
                                    </Link>
                                </p>
                            </div>
                            <div className={styles.side}>
                                <h4>Tools</h4>
                                <p className={styles.subtext}>Use our built in {" "} 
                                    <Link
                                        onClick={handleCloseDropdowns}
                                        className={styles.link}
                                        to="/tools/board-manager"
                                    >
                                        <p className={styles.inline}>score keeper</p>
                                    </Link> or access all other tools through the {" "} 
                                    <Link
                                        onClick={handleCloseDropdowns}
                                        className={styles.link}
                                        to="/tools/tool-bar"
                                    >
                                        <p className={styles.inline}>tool bar</p>
                                    </Link></p>
                            </div>
                        </div>
                    </Dropdown>
                )}

                {/*------SOLUTIONS------*/}
                <button ref={buttonRef2} className={styles.button}>
                    <NavItem
                        expandable={true}
                        onClick={() => {
                            handleCloseDropdowns();
                            setOpen2(!open2);
                        }}
                        active={open2}
                    >Solutions</NavItem>
                </button>
                {open2 && (
                    <Dropdown top="4rem" left="100%" width="80%" fadeIn={true}>
                        <div ref={navRef2} className={styles.dropdownContainer}>
                            <div className={styles.side}>
                                <div className={styles.gamesTitle}>
                                    <h4>Multiplayer</h4>
                                </div>
                                <p className={styles.subtext}>
                                    You can play with your friends or family right from your browser 
                                    on your phone, computer, or laptop.
                                </p>
                            </div>
                            <div className={styles.side}>
                                <h4>Ease of Use</h4>
                                <p className={styles.subtext}>
                                    No conviluted signup to start playing with your friends. 
                                    Also, its free.
                                </p>
                            </div>
                            <div className={styles.side}>
                                <h4>Built in Tools</h4>
                                <p className={styles.subtext}>
                                    Built in tools are avaliable inside a game or by themselves. Try out our Score Keeper, and log-in to save boards!
                                </p>
                            </div>
                        </div>
                    </Dropdown>
                )}

                {/*------RESOURCES------*/}
                <button ref={buttonRef3} className={styles.button}>
                    <NavItem
                        expandable={true}
                        onClick={() => {
                            handleCloseDropdowns();
                            setOpen3(!open3);
                        }}
                        active={open3}
                    >Resources</NavItem>
                </button>

                {open3 && (
                    <Dropdown top="4rem" left="100%" width="80%" fadeIn={true}>
                        <div ref={navRef3} className={styles.dropdownContainer}>
                            <div className={styles.side}>
                                <div className={styles.gamesTitle}>
                                    <h4>Contact</h4>
                                </div>
                                <p className={styles.subtext}>
                                    Feel free to contact me to build your website, or for any software development positions.<br></br><br></br>
                                    Email - <a className={styles.inline} href="mailto:connorkippes1@gmail.com">connorkippes1@gmail.com</a><br></br><br></br>
                                    Phone - <a className={styles.inline} href="tel:+1-480-465-3241">(480) 465-3241</a>
                                </p>
                            </div>

                            <div className={styles.side}>
                                <h4>About</h4>
                                <p className={styles.subtext}>
                                    I love making websites and I also love boardgames so 
                                    I made a website where you can play some boardgames 
                                    easily on the web that are some of mine and my 
                                    family's favorite games.
                                </p>
                            </div>
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
