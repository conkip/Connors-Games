/*
    Author: Connor Kippes
*/
import styles from './CoinFlip.module.css'

import Coin from '../Coin/Coin'
import Button from '../../../Button/Button'

import { useState } from 'react'

function CoinFlip() {
    const [face, setFace]= useState("Heads");
    return (
        <div className={styles.container}>
            <Coin size={10} setIsHeadsState={setFace}></Coin>
            <h2>{face}</h2>
            <Button isSquishy={true}><h2>Flip Coin</h2></Button>
        </div>
    )
}

export default CoinFlip