/*
    Author: Connor Kippes
*/
import styles from "./ScoreBoard.module.css";

import ScoreKeeper from "../PlayerScore/PlayerScore";
import MenuIcon from "../../../MenuIcon/MenuIcon";
import Navbar from '../../../Navbar/Navbar';

import { useRef, useState } from "react";

interface Props {
    name?: string;
}

const ScoreBoard = ({ name = "New Game" }: Props) => {
    // check user logged in in the database and checks for information on that name
    let loggedIn = false;

    const [open, setOpen] = useState(false);

    const [smallIncr, setSmallIncr] = useState(1);
    const [medIncr, setMedIncr] = useState(5);
    const [largeIncr, setLargeIncr] = useState(10);

    function openMenu() {
        document.getElementById("");
    }

    return (
        <>
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

                <MenuIcon onClick={() => setOpen(!open)} isOpen={open} />
            </Navbar>

            {open && (
                <div>stuff</div>
            )}

            <div className={styles.boardContainer}>
                <ScoreKeeper
                    name="connor"
                    color="#FF0000"
                    increments={[smallIncr, medIncr, largeIncr]}
                ></ScoreKeeper>
                <ScoreKeeper
                    name="connor"
                    color="#FF0000"
                    increments={[smallIncr, medIncr, largeIncr]}
                ></ScoreKeeper>
            </div>
            <div className={styles.spacer}></div>
        </>
    );
};

export default ScoreBoard;

/*
    Preset tools are based on your login
    
    Ideas:
    layout
    - also can include as a component under any boardgame
    - board games will only take up the viewheight
    
    home:
        - menu: create board, delete bord, website title, add player, delete player
        - under that are boards (will say no boards right now if empty)
        - can click on a board to pull its view up

    board:
        - menu: clear scores, add player, delete player (only off of this board), first player picker
            -can choose from some preset players or create new
        - scoreboards in flexbox
*/
