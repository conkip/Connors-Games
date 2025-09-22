/*
    Author: Connor Kippes
*/

import styles from './BoardManager.module.css'

import ScoreBoard from '../ScoreBoard/ScoreBoard'
import BoardPreview from '../BoardPreview/BoardPreview'
import Navbar from '../../../Navbar/Navbar'
import NavItem from '../../../NavItem/NavItem'
import MenuIcon from '../../../MenuIcon/MenuIcon'
import DeleteItems from '../DeleteItems/DeleteItems'
import AddItems from '../AddItems/AddItems'

import { createContext, useState, useEffect } from 'react'

import type * as Types from '../../../../types'

//export const UserContext = createContext();

const player1History: number[] = [10, -10]

const player1: Types.PlayerScore = {
    id: "1",
    name:"Connor",
    color:"#FF0000",
    totalScore:10,
    history: player1History,
}

const player2History: number[] = []

const player2: Types.PlayerScore = {
    id: "2",
    name:"Kippes",
    color:"#0000FF",
    totalScore:10,
    history: player2History,
}

let players: Types.PlayerScore[] = []
players.push(player1);
players.push(player2);


let board1: Types.Board = {
    id: "1",
    name: "board1",
    increments: [1,5,10],
    scoreKeepers: players
}

let board2: Types.Board = {
    id: "2",
    name: "board2",
    increments: [1,5,10],
    scoreKeepers: players
}

let boards: Types.UserPreferences = {
    boards: []
}

boards.boards.push(board1);
boards.boards.push(board2);

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}

function BoardManager() {
    const width = useWindowWidth();
    const isMobile = width < 1024;

    const [message, setMessage] = useState("No Boards");
    const [boardsState, setBoardsState] = useState(boards.boards);

    const [menuOpen, setMenuOpen] = useState(false);
    const [boardManagerOpen, setBoardManagerOpen] = useState(true);
    const [addBoardOpen, setAddBoardOpen] = useState(false);
    const [deleteBoardOpen, setDeleteBoardOpen] = useState(false);
    const [addPlayerOpen, setAddPlayerOpen] = useState(false);
    const [deletePlayerOpen, setDeletePlayerOpen] = useState(false);

    const [name, setName] = useState("");

    function handleCloseAll() {
        setMenuOpen(false);
        setBoardManagerOpen(false);
        setAddBoardOpen(false);
        setDeleteBoardOpen(false);
        setAddPlayerOpen(false);
        setDeletePlayerOpen(false);
    }

    function handleCloseToBoard() {
        handleCloseAll();
        setBoardManagerOpen(true);
    }

    function handleAddItem() {
        console.log("added item")
    }


    useEffect(() => {
        if(boardsState.length === 0) {
            setMessage("");
        }
        else {
            setMessage("No Boards");
        }
        // also update database userboards
    }, [boardsState]);

    return (
        <>
            <Navbar>
                <h3 className={styles.title}>Board Manager</h3>
                {isMobile? 
                    <MenuIcon onClick={()=> setMenuOpen(!menuOpen)} isOpen={menuOpen} /> 
                    :
                    <div className={styles.navItems}>
                        <button className={styles.button} onClick={() => {handleCloseAll(); setAddBoardOpen(true);}}><NavItem>Add Board</NavItem></button>
                        <button className={styles.button} onClick={() => {handleCloseAll(); setDeleteBoardOpen(true);}}><NavItem>Delete Board</NavItem></button>
                        <button className={styles.button} onClick={() => {handleCloseAll(); setAddPlayerOpen(true);}}><NavItem>Add Player</NavItem></button>
                        <button className={styles.button} onClick={() => {handleCloseAll(); setDeletePlayerOpen(true);}}><NavItem>Delete Player</NavItem></button>
                    </div>
                }
            </Navbar>

            { menuOpen &&
                <div className={styles.navItems}>
                    <button className={styles.button} onClick={() => {handleCloseAll(); setAddBoardOpen(true);}}><NavItem>Add Board</NavItem></button>
                    <button className={styles.button} onClick={() => {handleCloseAll(); setDeleteBoardOpen(true);}}><NavItem>Delete Board</NavItem></button>
                    <button className={styles.button} onClick={() => {handleCloseAll(); setAddPlayerOpen(true);}}><NavItem>Add Player</NavItem></button>
                    <button className={styles.button} onClick={() => {handleCloseAll(); setDeletePlayerOpen(true);}}><NavItem>Delete Player</NavItem></button>
                </div>
            }
            { boardsState.length < 1 && <h2 className={styles.message}>{message}</h2>}

            {boardManagerOpen &&
                <>
                <div className={styles.previewContainer}>
                    {boardsState.map((b) => 
                        <BoardPreview 
                            players={b.scoreKeepers} 
                            name={b.name} 
                            key={b.id} 
                        />
                    )}
                </div>
                <ScoreBoard></ScoreBoard>
                </>
            }

            {addBoardOpen && (
                <AddItems
                    title="Add Board"
                    handleAddItem = {handleAddItem}
                    handleClose = {handleCloseToBoard}
                >
                    <div>input 1</div>
                    <div>input 2</div>
                </AddItems>
            )}

            {deleteBoardOpen && (
                <DeleteItems 
                    list={boardsState} 
                    setList={setBoardsState} 
                    handleClose={handleCloseToBoard}
                ></DeleteItems>
            )}

            {addPlayerOpen && (
                <AddItems
                    title="Add Player"
                    handleAddItem = {handleAddItem}
                    handleClose = {handleCloseToBoard}
                >
                    <div>input 1</div>
                    <div>input 2</div>
                </AddItems>
            )}

            {deletePlayerOpen && (
                <DeleteItems 
                    list={boardsState} 
                    setList={setBoardsState} 
                    handleClose={handleCloseToBoard}
                ></DeleteItems>
            )}
        </>
    );
}

export default BoardManager;
