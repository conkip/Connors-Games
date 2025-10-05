/*
    Author: Connor Kippes
*/
import styles from './CoinUI.module.css'

import Coin from '../Coin/Coin'
import Button from '../../../Button/Button'

import { useState } from 'react'

interface Props{
    size?: number;
}

const CoinFlip = ({size = 10}: Props) => {
    const [face, setFace]= useState("Heads");
    const [isDone, setIsDone] = useState(true);

    return (
        <div className={styles.container}>
            <Coin size={size} setFace={setFace} setIsDone={setIsDone}></Coin>
            <h2>{isDone ? face : "..."}</h2>
            <h5 className={styles.instructions}>Click on the coin to flip</h5>
        </div>
    )
}

export default CoinFlip