/*
    Author: Connor Kippes
*/

import styles from './DiceUI.module.css'

import Dice from '../Dice/Dice'

import { useState} from 'react'

interface Props{
    size?: number;
}

const DiceRoll = ({size = 10}: Props) => {
    const [face, setFace] = useState(6);
    const [isDone, setIsDone] = useState(true);

    return (
        <div className={styles.container}>
            <Dice size={size} setFaceState={setFace} setIsDone={setIsDone}></Dice>
            <h2>{isDone ? face : "..."}</h2>
            <h5 className={styles.instructions}>Click on the die to roll</h5>
        </div>
    )
}

export default DiceRoll