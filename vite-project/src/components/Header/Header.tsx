/*
    Author: Connor Kippes
*/

import styles from "./Header.module.css"
import WebsiteTitle from "../WebsiteTitle/WebsiteTitle";
import SquishyButton from "../SquishyButton/SquishyButton"

function Header () {
    return (

        <header className={styles.header}>

            <ol className={styles.nav}>
                <li><a href = "#">About</a></li>
                <li><a href = "#">Games</a></li>
                <li>
                    <div className={styles.dropdown}>
                        <a href = "#">Tools</a>
                        {/*<?xml version="1.0" encoding="utf-8"?>
                        <!-- License: MIT. Made by phosphor: https://github.com/phosphor-icons/phosphor-icons -->*/}
                        <svg className={styles.caret} fill="#000000" width="20px" height="20px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,188a11.96187,11.96187,0,0,1-8.48535-3.51465l-80-80a12.0001,12.0001,0,0,1,16.9707-16.9707L128,159.0293l71.51465-71.51465a12.0001,12.0001,0,0,1,16.9707,16.9707l-80,80A11.96187,11.96187,0,0,1,128,188Z"/>
                        </svg>
                    </div>
                </li>
                <li><a href = "#">Contact</a></li>
                <li><a href = "#">Pricing</a></li>
            </ol>

            <WebsiteTitle />

            <ol className={styles.nav}>
                <li><a>Login</a></li>
                <li><SquishyButton>Get Started</SquishyButton></li>
            </ol>
        </header>
    );
}

export default Header