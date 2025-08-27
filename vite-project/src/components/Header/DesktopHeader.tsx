/*
    Author: Connor Kippes
*/

import styles from "./Header.module.css"
import WebsiteTitle from "../WebsiteTitle/WebsiteTitle";
import SquishyButton from "../SquishyButton/SquishyButton"
import { Link } from "react-router-dom";

function DesktopHeader () {
    return (

        <header className={styles.header}>
            <>
                <ol className={styles.nav}>
                    <li>
                        <div className={styles.dropdown}>
                            <a className={styles.navItem} href = "#">Products</a>

                            {/* <?xml version="1.0" encoding="utf-8"?>      License: MIT. Made by phosphor: https://github.com/phosphor-icons/phosphor-icons*/}
                            <svg className={styles.caret} fill="#000000" width="15px" height="15px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                <path d="M128,188a11.96187,11.96187,0,0,1-8.48535-3.51465l-80-80a12.0001,12.0001,0,0,1,16.9707-16.9707L128,159.0293l71.51465-71.51465a12.0001,12.0001,0,0,1,16.9707,16.9707l-80,80A11.96187,11.96187,0,0,1,128,188Z"/>
                            </svg>
                        </div>
                    </li>

                    <li>
                        <div className={styles.dropdown}>
                            <a className={styles.navItem} href = "#">Solutions</a>
                            
                            {/* <?xml version="1.0" encoding="utf-8"?>      License: MIT. Made by phosphor: https://github.com/phosphor-icons/phosphor-icons*/}
                            <svg className={styles.caret} fill="#000000" width="15px" height="15px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                <path d="M128,188a11.96187,11.96187,0,0,1-8.48535-3.51465l-80-80a12.0001,12.0001,0,0,1,16.9707-16.9707L128,159.0293l71.51465-71.51465a12.0001,12.0001,0,0,1,16.9707,16.9707l-80,80A11.96187,11.96187,0,0,1,128,188Z"/>
                            </svg>
                        </div>
                    </li>

                    <li>
                        <div className={styles.dropdown}>
                            <a className={styles.navItem} href = "#">Resources</a>
                            
                            {/* <?xml version="1.0" encoding="utf-8"?>      License: MIT. Made by phosphor: https://github.com/phosphor-icons/phosphor-icons*/}
                            <svg className={styles.caret} fill="#000000" width="15px" height="15px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                <path d="M128,188a11.96187,11.96187,0,0,1-8.48535-3.51465l-80-80a12.0001,12.0001,0,0,1,16.9707-16.9707L128,159.0293l71.51465-71.51465a12.0001,12.0001,0,0,1,16.9707,16.9707l-80,80A11.96187,11.96187,0,0,1,128,188Z"/>
                            </svg>
                        </div>
                    </li>
                    <li><Link className={styles.navItem} to="/pricing">Pricing</Link></li>
                </ol>

                <WebsiteTitle />

                <ol className={styles.nav}>
                    <li><a className={styles.navItem} href = "#" >Login</a></li>
                    <li><SquishyButton>Get Started</SquishyButton></li>
                </ol>
            </>

        </header>
    );
}

export default DesktopHeader