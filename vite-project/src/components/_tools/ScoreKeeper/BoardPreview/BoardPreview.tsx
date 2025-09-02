/*
    Author: Connor Kippes
*/

import styles from './BoardPreview.module.css'

import { useState } from 'react'

import type * as Types from '../../../../types'

interface Props {
    name:string,
    players: Types.PlayerScore[];
}

const BoardPreview = ({name, players}:Props) => {
    const playerRows = players.map((player) => {
        return(
            <div className={styles.playerRow}>
                <div className={styles.namePair}>
                    <div className={styles.color} style={{ backgroundColor: player.color }}></div>
                    <div>{player.name}</div>
                </div>
                <div className={styles.totalScore}>{player.totalScore}</div>
            </div>
        );
    });

    const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

    const handleClick = (e: React.MouseEvent) => {
        // Get the click coordinates relative to the page
        setPosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div>{name}</div>

                {/* 3 dots icon*/}
                <svg className={styles.dots} onClick={handleClick}xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    {/*Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - 
                    https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.*/}
                    <path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 
                    376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 
                    488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 
                    320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 
                    289.1 264 320 264C350.9 264 376 289.1 376 320z"/>
                </svg>

                {position && (
                    <div
                    style={{
                        position: "absolute",
                        top: position.y,
                        left: position.x,
                        background: "white",
                        border: "1px solid #ccc",
                        padding: "8px",
                        borderRadius: "6px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                    }}
                    >
                    📍 Popup right where you clicked!
                    </div>
                )}
            </div>

            <div className={styles.bottom}>{playerRows}</div>
        </div>
    )
}

export default BoardPreview