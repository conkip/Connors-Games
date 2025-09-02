/*
    Author: Connor Kippes
*/

import styles from './BoardManager.module.css'

import ScoreBoard from '../ScoreBoard/ScoreBoard'
import BoardPreview from '../BoardPreview/BoardPreview'
import Button from '../../../Button/Button'

import { useState } from 'react'

import type * as Types from '../../../../types'
let players: Types.PlayerScore[] = []

let player1: Types.PlayerScore = {
    name:"Connor",
    color:"#FF0000",
    totalScore:10,
    history: []
}

let player2: Types.PlayerScore = {
    name:"Connor",
    color:"#FF0000",
    totalScore:10,
    history:[]
}

players.push(player1);
players.push(player2);

let player1History:Types.ScoreHistoryItem = {
    score:10,
    color:"red"
};

let board1: Types.Board = {
    name: "board1",
    increments: [1,5,10],
    scoreKeepers: players
}

let board2: Types.Board = {
    name: "board2",
    increments: [1,5,10],
    scoreKeepers: players
}

let boards: Types.UserPreferences = {
    boards: []
}

boards.boards.push(board1);
boards.boards.push(board2);

function BoardManager() {
    
    const [message, setMessage] = useState("No Boards");

    //check if there is a user logged in and change to their preferences

    return (
        <>
            <div className={styles.options}>
                <Button>Add Board</Button>
                <Button>Delete Board</Button>
                <Button>Add Player</Button>
                <Button>Delete Player</Button>
            </div>

            <p className={styles.message}>{message}</p>

            <div className={styles.boardContianer}>
                <BoardPreview players={players} name="board"></BoardPreview>
                <ScoreBoard></ScoreBoard>
            </div>
        </>
    );
}

export default BoardManager;
