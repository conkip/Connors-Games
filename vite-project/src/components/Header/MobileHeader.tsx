/*
    Author: Connor Kippes
*/

import styles from './Header.module.css'

import WebsiteTitle from '../WebsiteTitle/WebsiteTitle'
import MenuIcon from '../MenuIcon/MenuIcon'
import Dropdown from '../Dropdown/Dropdown'
import HeaderItems from './HeaderItems/HeaderItems'
import NavItem from '../NavItem/NavItem'

import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false);
    const [item1Open, setItem1Open] = useState(false);


    function handleOpen() {
        setOpen(!open);
    }

    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                <WebsiteTitle />

                <MenuIcon isOpen={open} onClick={() => handleOpen()} />
            </div>

            {open && (
                <>
                <div className={styles.spacer}></div>
                <Dropdown>
                    <HeaderItems onClick={() => setOpen(false)}/>
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
