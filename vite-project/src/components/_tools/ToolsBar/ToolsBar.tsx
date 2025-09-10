/*
    Author: Connor Kippes
*/

import styles from './ToolsBar.module.css'

import Timer from '../Timer/Timer'
import Stopwatch from '../Stopwatch/Stopwatch'
import DiceRoll from '../DiceRoller/DiceRoll/DiceRoll'
import CoinFlip from '../CoinFlipper/CoinFlip/CoinFlip'

function ToolsBar() {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
          <h1>Timer</h1>
          <Timer />
        </div>

        <div className={styles.item}>
          <h1>Stopwatch</h1>
          <Stopwatch />
        </div>


        <div className={styles.item}>
          <h1>Dice Roller</h1>
          <DiceRoll />
        </div>

        <div className={styles.item}>
          <h1>Coin Flip</h1>
          <CoinFlip />
        </div>
    </div>
  )
}

export default ToolsBar