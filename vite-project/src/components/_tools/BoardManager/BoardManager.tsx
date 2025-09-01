/*
    Author: Connor Kippes
*/

import styles from "./BoardManager.module.css";

import ScoreBoard from "../ScoreBoard/ScoreBoard";
import Button from "../../Button/Button";

import { useState } from "react";

function BoardManager() {
    const [message, setMessage] = useState("No Boards");

    //check if there is a user logged in and change to their preferences

    return (
        <>
            <div className={styles.options}>
                <Button>Add Board</Button>
                <Button>Delete Board</Button>
                <Button>Add Player</Button>
                <Button>Delete Player</Button>
            </div>

            <p className={styles.message}>{message}</p>

            <div className={styles.boardContianer}>
                {/*maybe have a preview board thing here and then make and attach the score board element when chosen*/}
                <ScoreBoard></ScoreBoard>
            </div>
        </>
    );
}

export default BoardManager;
