/*
    Author: Connor Kippes
*/
import styles from "./ScoreBoard.module.css";

import ScoreKeeper from "../../../components/_games/ScoreKeeper/ScoreKeeper";
import { useState } from "react";
import Button from "../../../components/Button/Button";

interface Props {
    name: string;
}

const ScoreBoard = ({name}: Props) => {
    // check user logged in in the database and checks for information on that name
    let loggedIn = false;

    const [smallIncr, setSmallIncr] = useState(1);
    const [medIncr, setMedIncr] = useState(5);
    const [largeIncr, setLargeIncr] = useState(10);

    return (
        <>
            <div className={styles.options}>
                <Button>Add Player</Button>
                <Button>Delete Player</Button>
                <Button>Edit Player</Button>
            </div>
            <ScoreKeeper
                name="connor"
                color="red"
                increments={[smallIncr, medIncr, largeIncr]}
            ></ScoreKeeper>
        </>
    );
}

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
