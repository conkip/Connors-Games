/*
    Author: Connor Kippes
*/
import styles from "./ScoreBoard.module.css"

import ScoreKeeper from "../PlayerScore/PlayerScore"
import MenuIcon from "../../../MenuIcon/MenuIcon"
import Navbar from '../../../Navbar/Navbar'
import NavItem from '../../../NavItem/NavItem'
import Button from '../../../Button/Button'
import Card from '../../../Card/Card'

import type * as Types from '../../../../types'
import { useState, useEffect} from "react"

interface Props {
    name?: string;
}

// check user logged in in the database and checks for information on that name
let loggedIn = false;
const player1: Types.PlayerScore = {
    id: 1,
    name: "Connor",
    color: "#FF0000",
    totalScore: 0,
    history: [],
}

const player2: Types.PlayerScore = {
    id: 2,
    name: "Kippes",
    color: "#0000FF",
    totalScore: 0,
    history: [],
}

const players: Types.PlayerScore[] = [];
players.push(player1);
players.push(player2);

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}

const ScoreBoard = ({ name = "New Game" }: Props) => {
    const width = useWindowWidth();
    const isMobile = width < 768;

    const [playersState, setPlayersState] = useState<Types.PlayerScore[]>(players);

    const [menuOpen, setMenuOpen] = useState(false);
    const [addPlayerOpen, setAddPlayerOpen] = useState(true);

    const [curColor, setCurColor] = useState("#ff0000");

    const [smallIncr, setSmallIncr] = useState(1);
    const [medIncr, setMedIncr] = useState(5);
    const [largeIncr, setLargeIncr] = useState(10);

    function openMenu() {
        document.getElementById("");
    }

    function handleOpenAddPlayer(){
        setAddPlayerOpen(!addPlayerOpen);
    }
    function handleAddPlayer(name: string, color: string) {
        const newPlayer: Types.PlayerScore = {
            id: players.length,
            name: name,
            color: color,
            totalScore: 0,
            history: [],
        }
        setPlayersState((p) => [...p, newPlayer])
    }

    function handleOpenDeletePlayer(){
        //hi
    }

    

    return (
        <>
            {addPlayerOpen &&
                <Card>
                    <h2 className={styles.addPlayerTitle}>Add Player:</h2>
                    <div className={styles.bottom}>
                        <div className={styles.addPlayerItem}>
                            <h3>Name:</h3>
                            <input className={styles.nameInput} type="text" placeholder={`Player ${players.length}`}/>
                        </div>

                        <div className={styles.addPlayerItem}>
                            <h3>Color:</h3>
                            <input className={styles.colorInput} style={{ backgroundColor: curColor }} type="color" value={curColor} onChange={(e) => setCurColor(e.target.value)} />
                        </div>

                        <div className = {styles.addPlayerItem}>
                            <Button onClick={()=>{}} isSquishy={true} color="var(--color-green)">Confirm</Button>
                            <Button onClick={()=>{}} isSquishy={true} color="var(--color-red)">Cancel</Button>
                        </div>
                    </div>
                </Card>
            }

            <Navbar top={6}>
                <div className={styles.leftNav}>
                    {/*BACK ARROW*/}
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
                    <h3>{name}</h3>
                </div>

                {isMobile ?
                    <MenuIcon onClick={() => setMenuOpen(!menuOpen)} isOpen={menuOpen} />
                    :
                    <div className={styles.rightNav}>
                        <NavItem onClick={handleOpenAddPlayer}>Add Player</NavItem>
                        <NavItem onClick={handleOpenDeletePlayer}>Delete Player</NavItem>
                    </div>
                }
            </Navbar>

            {menuOpen && (
                <div>
                    <NavItem>Add Player</NavItem>
                    <NavItem>Delete Player</NavItem>
                </div>
            )}

            <div className={styles.boardContainer}>
                {playersState.map(p =>
                    <ScoreKeeper
                        name={p.name}
                        color={p.color}
                        increments={[smallIncr, medIncr, largeIncr]}
                    ></ScoreKeeper>
                )}
            </div>
            <div className={styles.spacer}></div>
        </>
    );
};

export default ScoreBoard;