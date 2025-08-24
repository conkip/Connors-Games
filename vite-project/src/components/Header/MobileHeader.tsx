/*
    Author: Connor Kippes
*/

import styles from "./Header.module.css"
import WebsiteTitle from "../WebsiteTitle/WebsiteTitle";
import SquishyButton from "../SquishyButton/SquishyButton"
import { Link } from "react-router-dom";

function Header () {
    return (

        <header className={styles.header}>
            <WebsiteTitle />

            <ol className={styles.nav}>
                <li><a>Login</a></li>
                <li><SquishyButton>Get Started</SquishyButton></li>
            </ol>

            {/* menu bars */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {/*<!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 
                302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 
                512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
            </svg>

            <ol className={styles.nav}>
                <li><a href = "#">About</a></li>
                <li><a href = "#">Games</a></li>
                <li>
                    <div className={styles.dropdown}>
                        <a href = "#">Tools</a>
                        {/* down caret

                        <?xml version="1.0" encoding="utf-8"?>
                        <!-- License: MIT. Made by phosphor: https://github.com/phosphor-icons/phosphor-icons -->*/}
                        <svg className={`${styles.card} ${styles.shadow}`} fill="#000000" width="20px" height="20px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,188a11.96187,11.96187,0,0,1-8.48535-3.51465l-80-80a12.0001,12.0001,0,0,1,16.9707-16.9707L128,159.0293l71.51465-71.51465a12.0001,12.0001,0,0,1,16.9707,16.9707l-80,80A11.96187,11.96187,0,0,1,128,188Z"/>
                        </svg>

                        {/* up caret
                        
                        <?xml version="1.0" encoding="utf-8"?>
                        <!-- License: MIT. Made by phosphor: https://github.com/phosphor-icons/phosphor-icons -->*/}
                        <svg className={styles.caretUp} fill="#000000" width="20px" height="20px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                            <path d="M208,172a11.96187,11.96187,0,0,1-8.48535-3.51465L128,96.9707,56.48535,168.48535a12.0001,12.0001,0,0,1-16.9707-16.9707l80-80a11.99975,11.99975,0,0,1,16.9707,0l80,80A12,12,0,0,1,208,172Z"/>
                        </svg>
                    </div>
                </li>
                <li><a href = "#">Contact</a></li>
                <li><Link to="/pricing">Pricing</Link></li>
            </ol>

        </header>
    );
}

export default Header