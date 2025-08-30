import styles from './ScoreKeeper.module.css'
import { useState } from 'react'

interface Props {
    name: string;
    color: string;
    increments: number[];
    initialScore?: number;
    initialHistory?: number[];
}
const ScoreKeeper = ({name, color, increments, initialScore = 0, initialHistory = []}: Props) => {
    const [totalScore, setTotalScore] = useState(initialScore);
    const [history, setHistory] = useState(initialHistory);
    const [curScore, setCurScore] = useState(0);

    const[timer, setTimer] = useState(5);

    const[isScoring, setIsScoring] = useState(false);


    return (
        <div className={styles.container} style={{backgroundColor: color}} >
            <div className={styles.topContainer}>
                <h6 className={styles.name}>{name}</h6>
                <div className={styles.historyLength}>0</div>
            </div>

            <div className={styles.middleContainer}>
                <div className={styles.incrementContainer}>
                    <button className={styles.scoreButton}>-{increments[0]}</button>
                    <button className={styles.scoreButton}>-{increments[1]}</button>
                    <button className={styles.scoreButton}>-{increments[2]}</button>
                </div>

                {isScoring ? (
                    <h1 className={styles.middleItem}>✅❌{totalScore}</h1>
                ) : (
                    <div className={styles.middleContainer}>
                        <div className={styles.scoringContainer}>
                            <div className={styles.emoji}>❌</div>
                            <h6>{curScore}</h6>
                            <div className={styles.emoji}>✅</div>
                        </div>
                    </div>
                )}

                <div className={styles.incrementContainer}>
                    <button className={styles.scoreButton}>+{increments[0]}</button>
                    <button className={styles.scoreButton}>+{increments[1]}</button>
                    <button className={styles.scoreButton}>+{increments[2]}</button>
                </div>

                <div className={styles.historyContainer}></div>
            </div>
        </div>
    )
}

export default ScoreKeeper

/*
    ideas:

    layout:

            name on top 100% width
    
    sidebar    middle with total pts     sidebar    rightbar displaying
     ex- 
                                                        4
        -1                                  +1          8 (green)
        -5              36                  +5          15 (red)
        -10                                 +10         7 (green)
                                                        6 (green) (can scroll further to see all scores, but only this scrolls)
                        

    customizable increments (smallIncre: int, medIncr: int, largeIncr: int)
    customizable name (string)
    customizable color (string)

*/