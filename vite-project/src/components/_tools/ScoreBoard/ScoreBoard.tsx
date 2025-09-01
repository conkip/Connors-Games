/*
    Author: Connor Kippes
*/
import styles from "./ScoreBoard.module.css";

import ScoreKeeper from "../ScoreKeeper/ScoreKeeper";
import { useRef, useState } from "react";

interface Props {
    name?: string;
}

const ScoreBoard = ({ name = "New Game" }: Props) => {
    // check user logged in in the database and checks for information on that name
    let loggedIn = false;

    const [smallIncr, setSmallIncr] = useState(1);
    const [medIncr, setMedIncr] = useState(5);
    const [largeIncr, setLargeIncr] = useState(10);

    function openMenu() {
        document.getElementById("");
    }

    return (
        <>
            <div className={styles.navbar}>
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
                <h4>{name}</h4>
                {/*MENU ICON*/}
                <svg
                    className={styles.icon}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                >
                    {/*<!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->*/}
                    <path
                        d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 
                    110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 
                    512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"
                    />
                </svg>
            </div>

            <div className={styles.menu}>
                <ol className={styles.list}>
                    <li>
                        <button className={styles.button}>Add Player</button>
                    </li>
                    <li>
                        <button className={styles.button}>Delete Player</button>
                    </li>
                    <li>
                        <button className={styles.button}>Edit Player</button>
                    </li>
                </ol>
            </div>
            <ScoreKeeper
                name="connor"
                color="red"
                increments={[smallIncr, medIncr, largeIncr]}
            ></ScoreKeeper>
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
