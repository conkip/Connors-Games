/*
    Author: Connor Kippes
*/

import styles from './WurfelBohnanza.module.css'

import wurfelRules1 from '../../../assets/images/wurfel/Wurfel-Bohnanza-rules1-EN.webp'
import wurfelRules2 from '../../../assets/images/wurfel/Wurfel-Bohnanza-rules2-EN.webp'

import Button from '../../../components/Button/Button'

import { useState } from 'react'

function WurfelBohnanza() {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.container}>
            <h1 className={styles.center}>WurfelBohnanza - Under Construction</h1>
            <p>Designed by <b>Uwe Rosenberg</b></p>
            <p>Art by Björn <b>Pertoft</b></p>
            <p>Published by <b>999 Games, AMIGO</b></p>
            <p>Year <b>2012</b></p>
            <p>AMIGO <a className={styles.link} href="https://www.amigo-spiele.de/kartenspiele/bohnanza-das-wuerfelspiel_2253_1194" target="_blank">Link</a></p>

            <h2>How to play:</h2>
            <a className={styles.link} href="https://www.youtube.com/watch?v=MdvqgBNVmHo" target="_blank">Video Link</a>
            <Button onClick={() => setOpen(!open)}>{open ? "Close Rules" : "Open Rules"}</Button>
            {open && 
                <div>
                    <img className={styles.ruleBook} src={wurfelRules1}></img>
                    <img className={styles.ruleBook} src={wurfelRules2}></img>
                </div>
            }
        </div>
    )
}

export default WurfelBohnanza;
