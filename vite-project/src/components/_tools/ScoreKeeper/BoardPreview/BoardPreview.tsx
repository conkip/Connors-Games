/*
    Author: Connor Kippes
*/

import styles from './BoardPreview.module.css'

import type * as Types from '../../../../types'

interface Props {
    players: Types.PlayerScore[];
}

const BoardPreview = ({players}:Props) => {
    const playerRows = players.map((player) => {
        return(
            <div className={styles.bottom}>
                <div className={styles.namePair}>
                    <div className="color" style={{ backgroundColor: player.color }}></div>
                    <div>{player.name}</div>
                </div>
                <div>{player.totalScore}</div>
            </div>
        );
    });

    return (
        <div>
            <div className={styles.top}>
                <div>Name</div>
                <div>date</div>
                <div>3 dots</div>
            </div>

            <div>{playerRows}</div>
        </div>
    )
}

export default BoardPreview