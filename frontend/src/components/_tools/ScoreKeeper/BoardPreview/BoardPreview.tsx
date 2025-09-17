/*
    Author: Connor Kippes
*/

import styles from './BoardPreview.module.css'

import Dropdown from '../../../Dropdown/Dropdown'
import Card from '../../../Card/Card'

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
                    <div className={styles.playerName}>{player.name}</div>
                </div>
                <div className={styles.totalScore}>{player.totalScore}</div>
            </div>
        );
    });

    const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleClick = () => {
        if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setDropdownPos({
            top: rect.bottom + window.scrollY,
            left: rect.right + window.scrollX,
        });
        }
    };

    // close popup when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
        if (
            dropdownPos &&
            buttonRef.current &&
            !buttonRef.current.contains(e.target as Node)
        ) {
            setDropdownPos(null);
        }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [dropdownPos]);

    return (
        <Card>
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.name}>{name}</div>

                {/* 3 dots icon*/}
                <button className={styles.button} ref={buttonRef} onClick={handleClick}>
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

                {dropdownPos && (
                    <Dropdown top={dropdownPos.top + 3} left={dropdownPos.left}>
                        <p>Delete</p>
                        <p>Resume</p>
                        <p>Create a Copy</p>
                    </Dropdown>
                )}
            </div>

            <div className={styles.bottom}>{playerRows}</div>
        </div>
        </Card>
    )
}

export default BoardPreview