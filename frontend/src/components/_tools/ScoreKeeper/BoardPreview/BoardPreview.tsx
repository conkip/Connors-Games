/*
    Author: Connor Kippes
*/

import styles from './BoardPreview.module.css'

import Card from '../../../Card/Card'
import Button from '../../../Button/Button'

import { useState } from 'react'

import type * as Types from '../../../../types'

interface Props {
    name:string,
    players: Types.PlayerScore[];
    onClick: () => void;
}

const BoardPreview = ({name, players, onClick}:Props) => {
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


    return (
        <Card>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.name}>{name}</div>
                </div>

                <div className={styles.bottom}>{playerRows}</div>
                <div className={styles.bottomButton}><Button color="var(--color-green)" onClick={onClick} isSquishy={true}>Open</Button></div>
            </div>
        </Card>
    )
}

export default BoardPreview