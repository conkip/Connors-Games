/*
    Author: Connor Kippes
*/
import styles from "./ScoreBoard.module.css"

import PlayerScore from "../PlayerScore/PlayerScore"
import MenuIcon from "../../../MenuIcon/MenuIcon"
import Navbar from "../../../Navbar/Navbar"
import NavItem from "../../../NavItem/NavItem"
import AddItems from '../AddItems/AddItems'
import DeleteItems from '../DeleteItems/DeleteItems'
import Dropdown from '../../../Dropdown/Dropdown'

import useWindowWidth from '../../../../hooks/useWindowWidth'

import { useState, useEffect } from "react"

import type * as Types from "../../../../types"

interface Props {
    boardName: string;
    players: Types.PlayerScore[];
    handleClose: () => void;
}

// check user logged in in the database and checks for information on that name
let loggedIn = false;

const ScoreBoard = ({ boardName, players, handleClose }: Props) => {
    const width = useWindowWidth();
    const isMobile = width < 1024;

    const [playersState, setPlayersState] =
        useState<Types.PlayerScore[]>(players);

    const [menuOpen, setMenuOpen] = useState(false);
    const [boardOpen, setBoardOpen] = useState(false);
    const [addPlayerOpen, setAddPlayerOpen] = useState(false);
    const [deletePlayerOpen, setDeletePlayerOpen] = useState(false);

    const [name, setName] = useState("");
    const [color, setColor] = useState("#FF0000");

    function handleCloseAll() {
        setMenuOpen(false);
        setAddPlayerOpen(false);
        setDeletePlayerOpen(false);
        setBoardOpen(false);
    }

    function handleCloseToBoard() {
        handleCloseAll();
        setBoardOpen(true);
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
    }

    useEffect(() => {
        if (addPlayerOpen) {
            setDeletePlayerOpen(false);
        }
        if (!addPlayerOpen && !deletePlayerOpen) {
            setBoardOpen(true);
        }
        if (!addPlayerOpen) {
            closeAddPlayer();
        }
        if (deletePlayerOpen) {
            closeAddPlayer();
        }
        if (!deletePlayerOpen) {
            setDeletePlayerOpen(false);
        }

        function closeAddPlayer() {
            setAddPlayerOpen(false);
            setName("");
            setColor("#FF0000");
        }
    }, [addPlayerOpen, deletePlayerOpen]);

    return (
        <>
            <Navbar>
                <div className={styles.leftNav}>
                    {/*BACK ARROW*/}
                    <button className={styles.button} onClick={handleClose}>
                        <svg
                            className={styles.icon}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                        >
                            {/* Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                            <path
                                d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 
                            352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 
                            137.3L73.4 297.3z"
                            />
                        </svg>
                    </button>
                    <button className={styles.button} onClick={handleCloseToBoard}><h3>{boardName}</h3></button>
                </div>

                {isMobile ? (
                    <MenuIcon
                        onClick={() => setMenuOpen(!menuOpen)}
                        isOpen={menuOpen}
                    />
                ) : (
                    <div className={styles.rightNav}>
                        <NavItem
                            onClick={() => {
                                handleCloseAll();
                                setAddPlayerOpen(true);
                            }}
                        >
                            Add Player
                        </NavItem>
                        <NavItem
                            onClick={() => {
                                handleCloseAll();
                                setDeletePlayerOpen(true);
                            }}
                        >
                            Delete Player
                        </NavItem>
                    </div>
                )}

                {menuOpen &&
                    <Dropdown top="3rem" left="100%" width="100%">
                        <div className={styles.menuContent}>
                            <NavItem
                                onClick={() => {
                                    handleCloseAll();
                                    setAddPlayerOpen(true);
                                }}
                            >
                                Add Player
                            </NavItem>
                            
                            <NavItem
                                onClick={() => {
                                    handleCloseAll();
                                    setDeletePlayerOpen(true);
                                }}
                            >
                                Delete Player
                            </NavItem>
                        </div>
                    </Dropdown>
                }
            </Navbar>

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
                    list={playersState} 
                    setList={setPlayersState}
                    handleClose={handleCloseToBoard}
                    type="Player"
                ></DeleteItems>
            )}

            {boardOpen && (
                <div className={styles.boardContainer}>
                    {playersState.length < 1 ?
                        <h2 className={styles.emptyText}>No Players</h2>
                        
                        :
                        playersState.map((p) => (
                            <PlayerScore
                                key={p.id}
                                name={p.name}
                                color={p.color}
                                initialHistory = {p.history}
                                initialScore = {p.totalScore}
                            ></PlayerScore>
                        ))
                    }
                </div>
            )}
        </>
    );
};

export default ScoreBoard;
