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
import Button from '../../../Button/Button'

import useWindowWidth from '../../../../hooks/useWindowWidth'

import { createContext, useState, useEffect } from 'react'

import type * as Types from '../../../../types'

//export const UserContext = createContext();

const player1History: number[] = []

const player1: Types.PlayerScore = {
    id: "1",
    name:"Player1",
    color:"#7700ff",
    totalScore:10,
    history: player1History,
}

const player2History: number[] = []

const player2: Types.PlayerScore = {
    id: "2",
    name:"Player2",
    color:"#26a500",
    totalScore:10,
    history: player2History,
}

const player3History: number[] = []

const player3: Types.PlayerScore = {
    id: "3",
    name:"Player3",
    color:"#ffe600",
    totalScore:10,
    history: player3History,
}

let players: Types.PlayerScore[] = []
players.push(player1);
players.push(player2);
players.push(player3);


let board1: Types.Board = {
    id: "1",
    name: "Example",
    players: players
}

let boards: Types.UserPreferences = {
    boards: [],
    presetPlayers: players,
}

boards.boards.push(board1);

function BoardManager() {
    const playerCountArray = ["1", "2", "3", "4", "5", "6", "7", "8"];

    const width = useWindowWidth();
    const isMobile = width < 1024;

    const [message, setMessage] = useState("No Boards");
    const [boardsState, setBoardsState] = useState(boards.boards);
    const [playersState, setPlayersState] = useState(boards.presetPlayers);

    const [name, setName] = useState("");
    const [color, setColor] = useState("#FF0000");
    const [playerCount, setPlayerCount] = useState(0);

    const [menuOpen, setMenuOpen] = useState(false);
    const [boardManagerOpen, setBoardManagerOpen] = useState(true);
    const [addBoardOpen, setAddBoardOpen] = useState(false);
    const [deleteBoardOpen, setDeleteBoardOpen] = useState(false);
    const [addPlayerOpen, setAddPlayerOpen] = useState(false);
    const [deletePlayerOpen, setDeletePlayerOpen] = useState(false);

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

    function handleAddBoard() {
        //first add players from the selected preset playters and then add rest of players to player count
        let newPlayers: Types.PlayerScore[] = []
        for(let i = 0; i < playerCount; i++){
            newPlayers.push(
                {
                    id: crypto.randomUUID(),
                    name: name == "" ? `Player ${i}` : name,
                    color: "FF0000",
                    totalScore: 0,
                    history: [],
                }
            )
        }



        const newBoard: Types.Board = {
            id: crypto.randomUUID(),
            name: name == "" ? `Board ${boardsState.length}` : name,
            players: newPlayers,
        };
        setBoardsState((b) => [...b, newBoard]);
        setAddBoardOpen(false);
        setBoardManagerOpen(true);
    }

    function handleAddPlayer() {
        const newPlayer: Types.PlayerScore = {
            id: crypto.randomUUID(),
            name: name == "" ? `Player ${playersState.length}` : name,
            color: color,
            totalScore: 0,
            history: [],
        };
        setPlayersState((p) => [...p, newPlayer]);
        setAddPlayerOpen(false);
        setBoardManagerOpen(true);
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
                <button className={styles.button} onClick={handleCloseToBoard}><h3 className={styles.title}>Board Manager</h3></button>
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
                            players={b.players} 
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
                    handleAddItem = {handleAddBoard}
                    handleClose = {handleCloseToBoard}
                >
                    <div className={styles.addItemsRow}>
                        <h3>Board Name:</h3>
                        <input
                            className={styles.nameInput}
                            type="text"
                            placeholder={`Board ${boardsState.length}`}
                            value={name}
                            onChange={(n) => setName(n.target.value)}
                        />
                    </div>

                    <h3>Player Count:</h3>

                    <div className = {styles.playerCountContainer}>
                        {playerCountArray.map((c) => (
                            <button className={styles.playerCountItem}>{c}</button>
                        ))}
                    </div>

                    <h6 className={styles.addBoardSubscript}>Can add more players later</h6>

                    <h3>Choose Preset Players:</h3>

                    <div className={styles.choosePlayersContainer}>
                        {playersState.map((p) => (
                            <div className={styles.choosePlayersItem}>
                                <h3>{p.name}</h3>
                                <Button color="var(--color-green)">Add</Button>
                            </div>
                        ))}
                    </div>

                </AddItems>
            )}

            {deleteBoardOpen && (
                <DeleteItems 
                    list={boardsState} 
                    setList={setBoardsState} 
                    handleClose={handleCloseToBoard}
                    title="Delete Board:"
                ></DeleteItems>
            )}

            {addPlayerOpen && (
                <AddItems
                    title="Add Player"
                    handleAddItem = {handleAddPlayer}
                    handleClose = {handleCloseToBoard}
                >
                    <div className={styles.addItemsRow}>
                        <h3>Name:</h3>
                        <input
                            className={styles.nameInput}
                            type="text"
                            placeholder={`Player ${playersState.length}`}
                            value={name}
                            onChange={(n) => setName(n.target.value)}
                        />
                    </div>
                    <div className={styles.addItemsRow}>
                        <h3>Color:</h3>
                        <input
                            className={styles.colorInput}
                            style={{ backgroundColor: color }}
                            type="color"
                            value={color}
                            onChange={(c) => setColor(c.target.value)}
                        />
                    </div>
                </AddItems>
            )}

            {deletePlayerOpen && (
                <DeleteItems 
                    list={boardsState} 
                    setList={setBoardsState} 
                    handleClose={handleCloseToBoard}
                    title="Delete Player:"
                ></DeleteItems>
            )}
        </>
    );
}

export default BoardManager;
