/*
    Author: Connor Kippes
*/

import styles from "./PlayerScore.module.css";
import { useState, useEffect, useRef } from "react";

interface Props {
    name: string;
    color: string;
    initialScore?: number;
    initialHistory?: number[];
}

const ScoreKeeper = ({
    name,
    color,
    initialScore = 0,
    initialHistory = [],
}: Props) => {

    const [pColor, setColor] = useState(color);
    const [pName, setName] = useState(name);
    const [totalScore, setTotalScore] = useState(initialScore);
    const [history, setHistory] = useState(initialHistory);
    const [curScore, setCurScore] = useState(0);

    const duration =3000;
    const circumference = 2 * Math.PI * 24;
    const [dashOffset, setDashOffset] = useState(circumference);
    type Phase = "idle" | "animating";
    const [phase, setPhase] = useState<Phase>("idle");
    const [resetKey, setResetKey] = useState(0);
    const commitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const historyRef = useRef<HTMLUListElement | null>(null);


    function resetBoard() {
        setTotalScore(0);
        setHistory([]);
        setPhase("idle");
        setCurScore(0);
    }

    function handleIncrement(amount: number) {
        setCurScore(c => c + amount);

        setPhase("animating");
        setResetKey((prev) => prev + 1);

        if (commitTimeoutRef.current) {
            clearTimeout(commitTimeoutRef.current);
        }

        commitTimeoutRef.current = setTimeout(() => commitIncrement(curScore + amount), duration);
    }

    const commitIncrement = (amount: number) => {

        setCurScore(0);

        setTotalScore(t => t + amount);
        setHistory(h => [...h, amount]);
        setPhase("idle");
        setDashOffset(circumference);

        if (commitTimeoutRef.current) {
            clearTimeout(commitTimeoutRef.current);
            commitTimeoutRef.current = null;
        }
    };

    function cancelIncrement() {
        if (commitTimeoutRef.current) {
            clearTimeout(commitTimeoutRef.current);
            commitTimeoutRef.current = null;
        }

        setCurScore(0);
        setPhase("idle");
        setDashOffset(circumference);
    }

    useEffect(() => {
        if (!historyRef.current) return;

        historyRef.current.scrollTop =
            historyRef.current.scrollHeight;
    }, [history])


    // resets loading animation after adding to score
    useEffect(() => {
        if (phase === "idle") return;

        setDashOffset(circumference); // start empty
        const t = setTimeout(() => setDashOffset(0), 1000); // animate to full

        return () => clearTimeout(t);
    }, [resetKey]);



    useEffect(() => {
        return () => {
            if (commitTimeoutRef.current) {
                clearTimeout(commitTimeoutRef.current);
            }
        };
    }, []);

    return (
        <div className={styles.container} style={{ backgroundColor: pColor }}>
            <div className={styles.topContainer}>
                <input className={styles.colorInput} style={{ backgroundColor: pColor }} type="color" value={pColor} onChange={(e) => setColor(e.target.value)}></input>
                <input className={styles.nameInput} maxLength={13} type="text" value ={pName} onChange={(e) => setName(e.target.value)} />
                <div className={styles.turnNumber}>{history.length}</div>
            </div>

            <div className={styles.middleContainer}>
                <div className={styles.incrementContainer}>
                    <button
                        className={styles.scoreButton}
                        onClick={() => handleIncrement(-1)}
                    >
                        -{1}
                    </button>
                    <button
                        className={styles.scoreButton}
                        onClick={() => handleIncrement(-5)}
                    >
                        -{5}
                    </button>
                    <button
                        className={styles.scoreButton}
                        onClick={() => handleIncrement(-10)}
                    >
                        -{10}
                    </button>
                </div>

                {phase === "idle" ? (
                    <>
                        <p className={`${styles.middleContainer} ${styles.totalScore}`}>{totalScore}</p>
                    </>
                ) : (
                    <div className={styles.middleContainer}>
                        <div className={styles.scoringContainer}>
                            <button className={`${styles.button} ${styles.cancelButton}`}>
                                {/* X Icon */}
                                <svg
                                    className={styles.svg}
                                    onClick={() => cancelIncrement()}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                >
                                    {/* Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                                    <path
                                        fill="currentColor"
                                        d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 
                                        455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 
                                        124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 
                                        536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 
                                        547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z"
                                    />
                                </svg>
                            </button>

                            <p className={styles.incrementedScore}>{curScore}</p>

                            <button className={`${styles.button} ${styles.confirmButton}`}>
                                {/* Loading border circle */}
                                <svg
                                    className={styles.borderSvg}
                                    viewBox="0 0 50 50"
                                >
                                    <circle
                                        key={resetKey}
                                        cx="24.8px"
                                        cy="24.8px"
                                        r="21px"
                                        fill="none"
                                        stroke="var(--color-accent)"
                                        strokeWidth="4px"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={dashOffset}
                                        style={{
                                            transition: dashOffset === circumference ? "none" : `stroke-dashoffset ${duration-1050}ms linear`,
                                        }}
                                    />
                                </svg>

                                {/* Checkmark Icon */}
                                <svg
                                    key={resetKey}
                                    className={styles.svg}
                                    onClick={() => commitIncrement(curScore)}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                >
                                    {/* Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                                    <path
                                        fill="currentColor"
                                        d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 
                                        538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 
                                        406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 
                                        361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}

                <div className={styles.incrementContainer}>
                    <button
                        className={styles.scoreButton}
                        onClick={() => handleIncrement(1)}
                    >
                        +{1}
                    </button>
                    <button
                        className={styles.scoreButton}
                        onClick={() => handleIncrement(5)}
                    >
                        +{5}
                    </button>
                    <button
                        className={styles.scoreButton}
                        onClick={() => handleIncrement(10)}
                    >
                        +{10}
                    </button>
                </div>

                <ul ref={historyRef} className={styles.historyContainer}>
                    {history.map((elem, index) => {
                        return (
                            <li key={index} style={{ color: elem < 0 ? "red" : "green" }}>
                                {elem < 0 ? elem *-1: elem}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ScoreKeeper;