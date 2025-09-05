/*
    Author: Connor Kippes
*/

import styles from './BoardManager.module.css'

import ScoreBoard from '../ScoreBoard/ScoreBoard'
import BoardPreview from '../BoardPreview/BoardPreview'
import Button from '../../../Button/Button'

import { useState, useEffect } from 'react'

import type * as Types from '../../../../types'
let players: Types.PlayerScore[] = []

let player1: Types.PlayerScore = {
    id: 1,
    name:"Connor",
    color:"#FF0000",
    totalScore:10,
    history: []
}

let player2: Types.PlayerScore = {
    id: 2,
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

let userBoards: Types.UserPreferences = {
    boards: []
}

userBoards.boards.push(board1);
userBoards.boards.push(board2);
let previewList = userBoards.boards.map((board) => {return <BoardPreview players={board.scoreKeepers} name={board.name}></BoardPreview>});

function BoardManager() {
    const [message, setMessage] = useState("No Boards");
    const [stateBoards, setStateBoards] = useState(userBoards);

    useEffect(() => {
        if(stateBoards.boards.length === 0) {
            setMessage("");
        }
        else {
            setMessage("No Boards");
        }
        // also update database userboards
    }, [stateBoards]);

    //check if there is a user logged in and change to their preferences

    return (
        <>
            <div className={styles.options}>
                <Button>Add Board</Button>
                <Button>Delete Board</Button>
                <Button>Add Player</Button>
                <Button>Delete Player</Button>
            </div>

            <h2 className={styles.message}>{message}</h2>

            <div className={styles.boardContainer}>
                {previewList}
            </div>
            <ScoreBoard></ScoreBoard>
        </>
    );
}

export default BoardManager;
