/*
    Author: Connor Kippes
*/

import styles from './Header.module.css'

import WebsiteTitle from '../WebsiteTitle/WebsiteTitle'
import MenuIcon from '../MenuIcon/MenuIcon'
import Dropdown from '../Dropdown/Dropdown'
import NavItem from '../NavItem/NavItem'

import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                <WebsiteTitle />

                <MenuIcon isOpen={open} onClick={() => setOpen(!open)} />
            </div>

            {open && (
                <>
                <div className={styles.spacer}></div>
                <Dropdown>
                    <NavItem
                        text="Products"
                        expandable={true}
                        onClick={() => {setOpen1(!open1); setOpen11(false); setOpen12(false);}}
                    />
                    {open1 && (
                        <Dropdown>
                            <NavItem
                                text="Games"
                                expandable={true}
                                onClick={() => setOpen11(!open11)}
                            />
                            {open11 && (
                                <Dropdown>
                                    <Link onClick={() => setOpen(false)} className={styles.link} to="/games/pixies">
                                        <NavItem text="Pixies" />
                                    </Link>
                                    <Link
                                        onClick={() => setOpen(false)}
                                        className={styles.link}
                                        to="/games/wurfel-bohnanza"
                                    >
                                        <NavItem text="Wurfel Bohnanza" />
                                    </Link>
                                    <Link onClick={() => setOpen(false)} className={styles.link} to="/games/codenames">
                                        <NavItem text="Codenames" />
                                    </Link>
                                </Dropdown>
                            )}

                            <NavItem
                                text="Tools"
                                expandable={true}
                                onClick={() => setOpen12(!open12)}
                            />
                            {open12 && (
                                <Dropdown>
                                    <Link
                                        onClick={() => setOpen(false)}
                                        className={styles.link}
                                        to="/tools/board-manager"
                                    >
                                        <NavItem text="Score Keeper" />
                                    </Link>
                                </Dropdown>
                            )}
                        </Dropdown>
                    )}

                    <NavItem
                        text="Solutions"
                        expandable={true}
                        onClick={() => setOpen2(!open2)}
                    />
                    {open2 && (
                        <Dropdown>
                            <div>Multiplayer</div>
                        </Dropdown>
                    )}

                    <NavItem
                        text="Resources"
                        expandable={true}
                        onClick={() => setOpen3(!open3)}
                    />
                    {open3 && (
                        <Dropdown>
                            <div>Contact</div>
                        </Dropdown>
                    )}

                    <Link onClick={() => setOpen(false)} className={styles.link} to="/pricing">
                        <NavItem text="Pricing" />
                    </Link>
                    <Link className={styles.link} to="/login">
                        <NavItem text="Login"></NavItem>
                    </Link>
                    <Link className={styles.link} to="/signup">
                        <NavItem text="Signup"></NavItem>
                    </Link>
                </Dropdown>
                </>
            )}
        </header>
    );
}

export default Header;
