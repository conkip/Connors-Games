/*
    Author: Connor Kippes
*/

import styles from "./ScoreKeeper.module.css";
import { useState, useEffect, useRef } from "react";

interface Props {
    name: string;
    color: string;
    increments: number[];
    initialScore?: number;
    initialHistory?: number[];
}
const ScoreKeeper = ({
    name,
    color,
    increments,
    initialScore = 0,
    initialHistory = [],
}: Props) => {
    const [playerName, setName] = useState(name);
    const [totalScore, setTotalScore] = useState(initialScore);
    const [history, setHistory] = useState(initialHistory);
    const [curScore, setCurScore] = useState(0);

    const [filling, setFilling] = useState(false);
    const [resetKey, setResetKey] = useState(0); // used to force animation reset

    function resetBoard() {
        setTotalScore(0);
        setHistory([]);
        setFilling(false);
        setCurScore(0);
    }

    function handleIncrement(amount: number) {
        setCurScore((c) => c + amount);
        setResetKey((prev) => prev + 1);
        setFilling(true);
    }

    function handleCancel() {
        setCurScore(0);
        setFilling(false);
    }

    useEffect(() => {
        const container = document.getElementById("scrollContainer");
        if(container !== null)
            container.scrollTop = container.scrollHeight;
    }, [history])

    useEffect(() => {
        if (!filling) {
            if (curScore != 0) {
                setTotalScore((t) => t + curScore);
                setHistory((h) => [...h, curScore]);
                setCurScore(0);
            }
        }

        const duration = 2500; // 2.5 seconds
        const timeout = setTimeout(() => {
            setFilling(false);
        }, duration);

        return () => clearTimeout(timeout);
    }, [filling, resetKey]);

    function handleFilling(bool: boolean) {
        setFilling(bool);
    }

    return (
        <div className={styles.container} style={{ backgroundColor: color }}>
            <div className={styles.topContainer}>
                <input className={styles.name} maxLength={13} onChange={(e) => setName(e.target.value)} />
                {/*<input type="text" placeholder="Enter name:"></input>*/}
                <div className={styles.turnNumber}>{history.length}</div>
            </div>

            <div className={styles.middleContainer}>
                <div className={styles.incrementContainer}>
                    <button
                        className={styles.scoreButton}
                        onClick={() => handleIncrement(-increments[0])}
                    >
                        -{increments[0]}
                    </button>
                    <button
                        className={styles.scoreButton}
                        onClick={() => handleIncrement(-increments[1])}
                    >
                        -{increments[1]}
                    </button>
                    <button
                        className={styles.scoreButton}
                        onClick={() => handleIncrement(-increments[2])}
                    >
                        -{increments[2]}
                    </button>
                </div>

                {!filling ? (
                    <>
                        <h1 className={styles.middleContainer}>{totalScore}</h1>
                    </>
                ) : (
                    <div className={styles.middleContainer}>
                        <div className={styles.scoringContainer}>
                            <svg
                                className={`${styles.icon} ${styles.cancelIcon}`}
                                onClick={() => handleCancel()}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                            >
                                {/* Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                                <path
                                    d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 
                                455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 
                                124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 
                                536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 
                                547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z"
                                />
                            </svg>

                            <h6>{curScore}</h6>

                            <svg
                                className={`${styles.icon} ${
                                    styles.checkIcon
                                } ${filling ? styles.circleSvg : ""}`}
                                onClick={() => handleFilling(false)}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                            >
                                {/* Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                                <path
                                    d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 
                                538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 
                                406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 
                                361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                                />
                            </svg>
                            
                            <svg className={styles.circleSvg} viewBox="0 0 20 20">
                                <circle
                                    className={styles.circleBorder}
                                />
                            </svg>
                        </div>
                    </div>
                )}

                <div className={styles.incrementContainer}>
                    <button
                        className={styles.scoreButton}
                        onClick={() => handleIncrement(increments[0])}
                    >
                        +{increments[0]}
                    </button>
                    <button
                        className={styles.scoreButton}
                        onClick={() => handleIncrement(increments[1])}
                    >
                        +{increments[1]}
                    </button>
                    <button
                        className={styles.scoreButton}
                        onClick={() => handleIncrement(increments[2])}
                    >
                        +{increments[2]}
                    </button>
                </div>

                <ol id="scrollContainer" className={styles.historyContainer}>
                    {history.map((item) => {
                        return (
                            <li style={{ color: item < 0 ? "red" : "green" }}>
                                {item < 0 ? item *-1: item}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
};

export default ScoreKeeper;