/*
    Author: Connor Kippes
*/

import styles from './Pixies.module.css'

import pixiesRules from '../../../assets/images/pixies/Pixies-rules-EN.webp'

import Button from '../../../components/Button/Button'

import { useState } from 'react'

function Pixies() {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.container}>
            <h1 className={styles.center}>Pixies - Under Construction</h1>
            <p>Designed by <b>Johannes Goupy</b></p>
            <p>Art by <b>Sylvain Trabut</b></p>
            <p>Published by <b>Bombyx</b></p>
            <p>Year <b>2024</b></p>
            <p>Bombyx <a className={styles.link} href="https://studiobombyx.com/en/jeu/pixies/" target="_blank">Link</a></p>

            <h2>How to play:</h2>
            <a className={styles.link} href="https://www.youtube.com/watch?v=Md3J335rZWM" target="_blank">Video Link</a>
            <Button onClick={() => setOpen(!open)}>{open ? "Close Rules" : "Open Rules"}</Button>
            {open && <img className={styles.ruleBook} src={pixiesRules}></img>}
        </div>
    )
}

export default Pixies