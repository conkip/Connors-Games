/*
    Author: Connor Kippes
*/

import styles from './Pixies.module.css'

function Pixies() {
    return (
        <>
            <h1 className={styles.center}>Pixies - Under Construction</h1>
            <p>Designed by <b>Johannes Goupy</b></p>
            <p>Art by <b>Sylvain Trabut</b></p>
            <p>Published by <b>Bombyx</b></p>
            <p>Year <b>2024</b></p>
            <p>Bombyx <a className={styles.Link} href="https://studiobombyx.com/en/jeu/pixies/">link</a></p>
        </>
    )
}

export default Pixies