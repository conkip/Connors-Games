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

const player1History: Types.ScoreHistoryItem[] = [
{
    score:10,
    color:"red"
},
{
    score:10,
    color:"red"
},]

const player1: Types.PlayerScore = {
    id: 1,
    name:"Connor",
    color:"#FF0000",
    totalScore:10,
    history: player1History,
}

const player2History: Types.ScoreHistoryItem[] = []

const player2: Types.PlayerScore = {
    id: 2,
    name:"Kippes",
    color:"#0000FF",
    totalScore:10,
    history:player2History,
}

let players: Types.PlayerScore[] = []
players.push(player1);
players.push(player2);


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

let boards: Types.UserPreferences = {
    boards: []
}

boards.boards.push(board1);
boards.boards.push(board2);

function BoardManager() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("No Boards");
    const [boardsState, setboardsState] = useState(boards);


    useEffect(() => {
        if(boardsState.boards.length === 0) {
            setMessage("");
        }
        else {
            setMessage("No Boards");
        }
        // also update database userboards
    }, [boardsState]);

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
            { boardsState.boards.length < 1 && <h2 className={styles.message}>{message}</h2>}

            <div className={styles.previewContainer}>
                {boardsState.boards.map((b) => 
                    <BoardPreview 
                        players={b.scoreKeepers} 
                        name={b.name} 
                        key={b.id} 
                    />
                )}
            </div>
            <ScoreBoard></ScoreBoard>
        </>
    );
}

export default BoardManager;
