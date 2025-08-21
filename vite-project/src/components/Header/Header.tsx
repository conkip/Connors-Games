/*
    Author: Connor Kippes
*/

import styles from "./Header.module.css"
import WebsiteTitle from "../WebsiteTitle/WebsiteTitle";

function Header () {
    return (

        <header className={styles.header}>
            <WebsiteTitle />

            <nav className={styles.nav}>
                <ol>
                    <li><a href = "#">Home</a></li>
                    <li><a href = "#">About</a></li>
                    <li><a href = "#">Games</a></li>
                    <li><a href = "#">Tools</a></li>
                    <li><a href = "#">Contact</a></li>
                </ol>
            </nav>
        </header>
    );
}

export default Header