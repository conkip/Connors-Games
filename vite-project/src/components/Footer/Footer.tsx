/*
    Author: Connor Kippes
*/

import styles from "./Footer.module.css"

function Footer () {
    return (
        <footer>
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} Connor's Boardgames. All rights reserved.</p>
        </footer>
    );
}

export default Footer