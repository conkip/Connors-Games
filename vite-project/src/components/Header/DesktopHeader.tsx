/*
    Author: Connor Kippes
*/

import styles from './Header.module.css'
import WebsiteTitle from '../WebsiteTitle/WebsiteTitle'
import Button from '../Button/Button'
import NavItem from '../NavItem/NavItem'
import HeaderItems from './HeaderItems/HeaderItems'
import { Link } from 'react-router-dom'

function DesktopHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                <div className={styles.headerItems}>
                    <HeaderItems />
                </div>

                <WebsiteTitle />

                <div className={styles.headerItems}>
                    <Link className={styles.link} to="/login">
                        <NavItem text="Login"></NavItem>
                    </Link>
                    <Button squishy={true}>Get Started</Button>
                </div>
            </div>
        </header>
    );
}

export default DesktopHeader;
