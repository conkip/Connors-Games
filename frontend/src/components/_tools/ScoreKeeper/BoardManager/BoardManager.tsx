/*
    Author: Connor Kippes
*/

import styles from "./BoardManager.module.css";

import ScoreBoard from "../ScoreBoard/ScoreBoard";
import BoardPreview from "../BoardPreview/BoardPreview";
import Navbar from "../../../Navbar/Navbar";
import NavItem from "../../../NavItem/NavItem";
import MenuIcon from "../../../MenuIcon/MenuIcon";
import DeleteItems from "../DeleteItems/DeleteItems";
import AddItems from "../AddItems/AddItems";
import Button from "../../../Button/Button";

import useWindowWidth from "../../../../hooks/useWindowWidth";

import { useState, useEffect } from "react";

import type * as Types from "../../../../types";

//export const UserContext = createContext();

const player1History: number[] = [];

const player1: Types.PlayerScore = {
    id: "1",
    name: "Player1",
    color: "#7700ff",
    totalScore: 0,
    history: player1History,
};

const player2History: number[] = [];

const player2: Types.PlayerScore = {
    id: "2",
    name: "Player2",
    color: "#26a500",
    totalScore: 0,
    history: player2History,
};

const player3History: number[] = [];

const player3: Types.PlayerScore = {
    id: "3",
    name: "Player3",
    color: "#ffe600",
    totalScore: 0,
    history: player3History,
};

let players: Types.PlayerScore[] = [];
players.push(player1);
players.push(player2);
players.push(player3);

let board1: Types.Board = {
    id: "1",
    name: "Example Board",
    players: players,
};

let boards: Types.UserPreferences = {
    boards: [],
    presetPlayers: players,
};

boards.boards.push(board1);

function BoardManager() {
    const playerCountArray = ["1", "2", "3", "4", "5", "6", "7", "8"];

    const width = useWindowWidth();
    const isMobile = width < 1024;

    const [message, setMessage] = useState("No Boards");
    const [boardsState, setBoardsState] = useState(boards.boards);
    const [presetPlayers, setPresetPlayers] = useState(boards.presetPlayers);

    const [boardName, setBoardName] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [playerColor, setPlayerColor] = useState("#FF0000");
    const [playerCount, setPlayerCount] = useState(-1);
    const [curPresetPlayers, setCurPresetPlayers] = useState<Types.PlayerScore[]>([]);

    const [menuOpen, setMenuOpen] = useState(false);
    const [boardManagerOpen, setBoardManagerOpen] = useState(true);
    const [addBoardOpen, setAddBoardOpen] = useState(false);
    const [deleteBoardOpen, setDeleteBoardOpen] = useState(false);
    const [addPlayerOpen, setAddPlayerOpen] = useState(false);
    const [deletePlayerOpen, setDeletePlayerOpen] = useState(false);

    const [curBoard, setCurBoard] = useState<React.ReactElement>(<></>);
    const [boardOpen, setBoardOpen] = useState(false);

    function handleCloseAll() {
        setMenuOpen(false);
        setBoardManagerOpen(false);
        setAddBoardOpen(false);
        setDeleteBoardOpen(false);
        setAddPlayerOpen(false);
        setDeletePlayerOpen(false);
        handleResetAddBoard();
        handleResetAddPlayer();
    }

    function handleCloseToBoard() {
        handleCloseAll();
        setBoardManagerOpen(true);
    }

    function handleAddBoard() {
        //first add players from the selected preset playters and then add rest of players to player count
        let newPlayers: Types.PlayerScore[] = [];

        curPresetPlayers.forEach((elem) => {
            newPlayers.push(elem);
        });

        for (let i = 1 + curPresetPlayers.length; i < playerCount + 2; i++) {
            newPlayers.push({
                id: crypto.randomUUID(),
                name: "New Player",
                color: "#FF0000",
                totalScore: 0,
                history: [],
            });
        }

        const newBoard: Types.Board = {
            id: crypto.randomUUID(),
            name: boardName == "" ? "New Board" : boardName,
            players: newPlayers,
        };

        setBoardsState((b) => [...b, newBoard]);
        setAddBoardOpen(false);
        setBoardManagerOpen(true);
        handleResetAddBoard();
    }

    function handleResetAddBoard() {
        setBoardName("");
        setPlayerCount(-1);
        setCurPresetPlayers([]);
    }

    function handleAddPlayer() {
        const newPlayer: Types.PlayerScore = {
            id: crypto.randomUUID(),
            name: playerName == "" ? "New Player" : playerName,
            color: playerColor,
            totalScore: 0,
            history: [],
        };
        setPresetPlayers((p) => [...p, newPlayer]);
        setAddPlayerOpen(false);
        setBoardManagerOpen(true);
        handleResetAddPlayer();
    }

    function handleResetAddPlayer() {
        setPlayerName("");
        setPlayerColor("#FF0000");
    }

    function handleOpenBoard(boardName: string, players: Types.PlayerScore[]) {
        handleCloseAll();

        setCurBoard(
            <ScoreBoard
                boardName={boardName}
                players={players}
                handleClose={() => {
                    setBoardOpen(false);
                    setBoardManagerOpen(true);
                }}
            ></ScoreBoard>
        );

        setBoardOpen(true);
    }

    useEffect(() => {
        if (boardsState.length === 0) {
            setMessage("");
        } else {
            setMessage("No Boards");
        }
        // also update database userboards
    }, [boardsState]);

    return (
        <>
            {!boardOpen && (
                <Navbar>
                    <button
                        className={styles.button}
                        onClick={handleCloseToBoard}
                    >
                        <h3 className={styles.title}>Board Manager</h3>
                    </button>
                    {isMobile ? (
                        <MenuIcon
                            onClick={() => setMenuOpen(!menuOpen)}
                            isOpen={menuOpen}
                        />
                    ) : (
                        <div className={styles.navItems}>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    handleCloseAll();
                                    setAddBoardOpen(true);
                                }}
                            >
                                <NavItem>Add Board</NavItem>
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    handleCloseAll();
                                    setDeleteBoardOpen(true);
                                }}
                            >
                                <NavItem>Delete Board</NavItem>
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    handleCloseAll();
                                    setAddPlayerOpen(true);
                                }}
                            >
                                <NavItem>Add Player</NavItem>
                            </button>
                            <button
                                className={styles.button}
                                onClick={() => {
                                    handleCloseAll();
                                    setDeletePlayerOpen(true);
                                }}
                            >
                                <NavItem>Delete Player</NavItem>
                            </button>
                        </div>
                    )}
                </Navbar>
            )}

            {menuOpen && (
                <div className={styles.navItems}>
                    <button
                        className={styles.button}
                        onClick={() => {
                            handleCloseAll();
                            setAddBoardOpen(true);
                        }}
                    >
                        <NavItem>Add Board</NavItem>
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => {
                            handleCloseAll();
                            setDeleteBoardOpen(true);
                        }}
                    >
                        <NavItem>Delete Board</NavItem>
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => {
                            handleCloseAll();
                            setAddPlayerOpen(true);
                        }}
                    >
                        <NavItem>Add Player</NavItem>
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => {
                            handleCloseAll();
                            setDeletePlayerOpen(true);
                        }}
                    >
                        <NavItem>Delete Player</NavItem>
                    </button>
                </div>
            )}
            {boardsState.length < 1 && (
                <h2 className={styles.message}>{message}</h2>
            )}

            {boardManagerOpen && (
                <div className={styles.previewContainer}>
                    {boardsState.map((b) => (
                        <BoardPreview
                            players={b.players}
                            name={b.name}
                            key={b.id}
                            onClick={() => handleOpenBoard(b.name, b.players)}
                        />
                    ))}
                </div>
            )}

            {addBoardOpen && (
                <AddItems
                    title="Add Board"
                    handleAddItem={handleAddBoard}
                    handleClose={() => {handleCloseToBoard(); handleResetAddBoard();}}
                >
                    <div className={styles.addItemsRow}>
                        <h3>Board Name:</h3>
                        <input
                            className={styles.nameInput}
                            type="text"
                            placeholder="New Board"
                            value={boardName}
                            onChange={(n) => setBoardName(n.target.value)}
                        />
                    </div>

                    <h3>Player Count:</h3>

                    <div className={styles.playerCountContainer}>
                        {playerCountArray.map((c, index) => (
                            <button
                                key={index}
                                className={`${styles.playerCountItem} ${
                                    playerCount == index &&
                                    styles.selectedPlayerCount
                                }`}
                                onClick={() => setPlayerCount(index)}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    <h6 className={styles.addBoardSubscript}>
                        Can add more players later
                    </h6>

                    <h3>Choose Preset Players:</h3>

                    <div className={styles.choosePlayersContainer}>
                        {presetPlayers.map((p) => (
                            <div
                                key={p.id}
                                className={styles.choosePlayersItem}
                            >
                                <h3>{p.name}</h3>
                                <Button
                                    color={
                                        curPresetPlayers.includes(p)
                                            ? "var(--color-red)"
                                            : "var(--color-green)"
                                    }
                                    onClick={() => {
                                        setCurPresetPlayers((prev) => {
                                            const newPlayers = prev.includes(p)
                                                ? prev.filter((elem) => elem.id !== p.id)
                                                : [...prev, p];

                                            if (newPlayers.length <9 && newPlayers.length - 1 > playerCount) {
                                                setPlayerCount(newPlayers.length - 1);
                                            }

                                            return newPlayers;
                                            });
                                        }
                                    }
                                >
                                    {curPresetPlayers.includes(p)
                                        ? "Remove"
                                        : "Add"}
                                </Button>
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
                    handleAddItem={handleAddPlayer}
                    handleClose={() => {handleCloseToBoard(); handleResetAddPlayer();}}
                >
                    <div className={styles.addItemsRow}>
                        <h3>Name:</h3>
                        <input
                            className={styles.nameInput}
                            type="text"
                            placeholder="New Player"
                            value={playerName}
                            onChange={(n) => setPlayerName(n.target.value)}
                        />
                    </div>
                    <div className={styles.addItemsRow}>
                        <h3>Color:</h3>
                        <input
                            className={styles.colorInput}
                            style={{ backgroundColor: playerColor }}
                            type="color"
                            value={playerColor}
                            onChange={(c) => setPlayerColor(c.target.value)}
                        />
                    </div>
                </AddItems>
            )}

            {deletePlayerOpen && (
                <DeleteItems
                    list={presetPlayers}
                    setList={setPresetPlayers}
                    handleClose={handleCloseToBoard}
                    title="Delete Player:"
                ></DeleteItems>
            )}

            {boardOpen && curBoard}
        </>
    );
}

export default BoardManager;
