/*
    Author: Connor Kippes
*/

import styles from "./Dice.module.css";

import { useState, useRef } from "react";

interface Props {
    color?: string;
    size?: number;
    animateOnHover?: boolean;
    setFaceState?: (f: number) => void;
    setIsDone?: (f: boolean) => void;
}

const Dice = ({
    color = "white",
    size = 4,
    setFaceState,
    setIsDone,
    animateOnHover = false,
}: Props) => {
    const [face, setFace] = useState(6);
    const [rotation, setRotation] = useState(0);
    const [isHalfRolled, setIsHalfRolled] = useState(false);
    const rollsRemaining = useRef(0);

    function handleClick() {
        if (setIsDone) setIsDone(false);
        const endFace = Math.floor(Math.random() * 3);
        rollsRemaining.current = 3 + endFace;
        startHalfRoll();
    }

    function startHalfRoll() {
        setIsHalfRolled(true);
        setRotation((r) => r + 180);
        let randFace = Math.floor(Math.random() * 6) + 1;
        while (randFace === face) {
            randFace = Math.floor(Math.random() * 6) + 1;
        }
        setFace(randFace);
    }

    function handleTransitionEnd() {
        if (isHalfRolled) {
            let randFace = Math.floor(Math.random() * 6) + 1;
            while (randFace === face) {
                randFace = Math.floor(Math.random() * 6) + 1;
            }
            setFace(randFace);

            setIsHalfRolled(false);
            setRotation((r) => r - 180);
        } else if (rollsRemaining.current > 0) {
            rollsRemaining.current -= 1;
            startHalfRoll();
        } else if (setFaceState) {
            if (setIsDone) {
                setTimeout(() => setIsDone(true), 100);
            }
            setFaceState(face);
        }
    }
    return (
        <div
            className={`${styles.overallContainer} ${
                animateOnHover ? styles.animateOnHover : ""
            }`}
            style={
                {
                    "--coin-size": `${size}rem`,
                    transform: `rotate(${rotation}deg)`,
                    transition: "transform 0.3s ease",
                } as React.CSSProperties
            }
            onClick={handleClick}
            onTransitionEnd={handleTransitionEnd}
        >
            {face === 1 && (
                <div
                    className={`${styles.container} ${styles.d1}`}
                    style={{ background: `${color}` }}
                >
                    <div className={styles.circle}></div>
                </div>
            )}

            {face === 2 && (
                <div
                    className={`${styles.container} ${styles.d2}`}
                    style={{ background: `${color}` }}
                >
                    <div className={`${styles.circle} ${styles.d2d1}`}></div>
                    <div className={`${styles.circle} ${styles.d2d2}`}></div>
                </div>
            )}

            {face === 3 && (
                <div
                    className={`${styles.container} ${styles.d3}`}
                    style={{ background: `${color}` }}
                >
                    <div className={`${styles.circle} ${styles.d3d1}`}></div>
                    <div className={`${styles.circle} ${styles.d3d2}`}></div>
                    <div className={`${styles.circle} ${styles.d3d3}`}></div>
                </div>
            )}

            {face === 4 && (
                <div
                    className={`${styles.container} ${styles.d4}`}
                    style={{ background: `${color}` }}
                >
                    <div className={styles.d4Pair}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>

                    <div className={styles.d4Pair}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>
                </div>
            )}

            {face === 5 && (
                <div
                    className={`${styles.container} ${styles.d4}`}
                    style={{ background: `${color}` }}
                >
                    <div className={styles.d4Pair}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>

                    <div className={`${styles.circle} ${styles.d5Mid}`}></div>

                    <div className={styles.d4Pair}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>
                </div>
            )}

            {face === 6 && (
                <div
                    className={`${styles.container} ${styles.d3}`}
                    style={{ background: `${color}` }}
                >
                    <div className={styles.d4}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>

                    <div className={styles.d4}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dice;
