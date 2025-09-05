/*
    Author: Connor Kippes
*/

import styles from './BoardPreview.module.css'

import { useState, useRef, useEffect } from 'react'

import type * as Types from '../../../../types'

interface Props {
    name:string,
    players: Types.PlayerScore[];
}

const BoardPreview = ({name, players}:Props) => {
    const playerRows = players.map((player) => {
        return(
            <div className={styles.playerRow} key={player.id}>
                <div className={styles.namePair}>
                    <div className={styles.color} style={{ backgroundColor: player.color }}></div>
                    <div>{player.name}</div>
                </div>
                <div className={styles.totalScore}>{player.totalScore}</div>
            </div>
        );
    });

    const [popupPos, setPopupPos] = useState<{ top: number; left: number } | null>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setPopupPos({
            top: rect.bottom, // place below the element
            left: rect.right, // align to right edge
        });
        }
    };

    // Close popup when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
        if (
            popupPos &&
            buttonRef.current &&
            !buttonRef.current.contains(e.target as Node)
        ) {
            setPopupPos(null);
        }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [popupPos]);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div>{name}</div>

                {/* 3 dots icon*/}
                <button className={styles.button} onClick={handleClick}>
                    <svg className={styles.dots} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        {/*Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - 
                        https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.*/}
                        <path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 
                        376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 
                        488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 
                        320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 
                        289.1 264 320 264C350.9 264 376 289.1 376 320z"/>
                    </svg>
                </button>

                {popupPos && (
                    <div
                    style={{
                        position: "absolute",
                        top: popupPos.top,
                        left: popupPos.left,
                        transform: "translate(-100%, 0)", // shift so it aligns bottom-right
                        background: "white",
                        border: "1px solid #ddd",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        zIndex: 1000,
                    }}
                    >
                    I am a popup!
                    </div>
                )}
            </div>

            <div className={styles.bottom}>{playerRows}</div>
        </div>
    )
}

export default BoardPreview