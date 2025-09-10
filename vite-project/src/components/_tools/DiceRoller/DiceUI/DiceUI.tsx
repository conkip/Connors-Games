/*
    Author: Connor Kippes
*/

import styles from './DiceUI.module.css'

import Dice from '../Dice/Dice'
import Button from '../../../Button/Button'

import { useState} from 'react'

function DiceRoll() {
    const [face, setFace] = useState(6);

    return (
        <div className={styles.container}>
            <Dice size={10} setFaceState={setFace}></Dice>
            <h2>{face}</h2>
            <Button isSquishy={true}><h2>Roll Dice</h2></Button>
        </div>
    )
}

export default DiceRoll