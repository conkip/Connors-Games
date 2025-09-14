/*
    Author: Connor Kippes
*/

import styles from './BoardManager.module.css'

import ScoreBoard from '../ScoreBoard/ScoreBoard'
import BoardPreview from '../BoardPreview/BoardPreview'
import Navbar from '../../../Navbar/Navbar'
import NavItem from '../../../NavItem/NavItem'
import MenuIcon from '../../../MenuIcon/MenuIcon'

import { createContext, useState, useEffect } from 'react'

import type * as Types from '../../../../types'

//export const UserContext = createContext();

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
    id: 1,
    name: "board1",
    increments: [1,5,10],
    scoreKeepers: players
}

let board2: Types.Board = {
    id: 2,
    name: "board2",
    increments: [1,5,10],
    scoreKeepers: players
}

let userBoards: Types.UserPreferences = {
    boards: []
}

userBoards.boards.push(board1);
userBoards.boards.push(board2);
let previewList = userBoards.boards.map((board) => {return <BoardPreview players={board.scoreKeepers} name={board.name} key={board.id}></BoardPreview>});

function BoardManager() {
    const [open, setOpen] = useState(false);
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
            <Navbar top={6}>
                <h3 className={styles.title}>Board Manager</h3>
                <MenuIcon onClick={()=> setOpen(!open)} isOpen={open} />
            </Navbar>

            { open &&
                <div className={styles.navItems}>
                    <button className={styles.button}><NavItem>Add Board</NavItem></button>
                    <button className={styles.button}><NavItem>Delete Board</NavItem></button>
                    <button className={styles.button}><NavItem>Add Player</NavItem></button>
                    <button className={styles.button}><NavItem>Delete Player</NavItem></button>
                </div>
            }
            { previewList.length < 1 && <h2 className={styles.message}>{message}</h2>}

            <div className={styles.previewContainer}>
                {previewList}
            </div>
            <ScoreBoard></ScoreBoard>
        </>
    );
}

export default BoardManager;
