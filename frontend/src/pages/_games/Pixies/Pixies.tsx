/*
    Author: Connor Kippes
*/

import styles from "./Pixies.module.css"

import pixiesRules from "../../../assets/images/pixies/Pixies-rules-EN.webp"

import cardBack from "../../../assets/images/pixies/deck/pixies-card-back.webp"

/*import card1 from "../../../assets/images/pixies/deck/pixies-card-1.webp"*/

import Button from "../../../components/Button/Button"
import ScoreBoard from '../../../components/_tools/ScoreKeeper/ScoreBoard/ScoreBoard'
import NavItem from '../../../components/NavItem/NavItem'

import { useState, useEffect } from "react"

import type * as Types from "../../../types"

let gameState= {
    
    curPlayer:"hi",
    
}
interface Props {
    players: Types.PlayerScore[];
}

const deckOffsets = [
    { zIndex: 5, top: 0, left: 0 },
    { zIndex: 4, top: 1, left: 1.5 },
    { zIndex: 3, top: 2, left: 3 },
    { zIndex: 2, top: 3, left: 4.5 },
];


const Pixies = () => {
    const [gameOpen, setGameOpen] = useState(false);
    const [rulesOpen, setRulesOpen] = useState(false);
    const [scoreBoardOpen, setScoreBoardOpen] = useState(false);

    const [players, setPlayers] = useState<Types.PlayerScore[]>([]);
    const [curPlayer, setCurPlayer] = useState<Types.PlayerScore>();

    const [deck, setDeck] = useState(new Array(70).fill(true));
    const [tableCards, setTableCards] = useState([]);
    const [playerBoards, setPlayerBoards] = useState(new Array(players.length));

    const [roundNumber, setRoundNumber] = useState(1);


    useEffect(() => {
        if(tableCards.length == 0){
            //refill table cards
        }

    }, tableCards)
    function chooseCard() {

    }

    return (
        <>
            {!gameOpen && (
                <div className={styles.gamePreviewContainer}>
                    <h1 className={styles.center}>
                        Pixies - Under Construction
                    </h1>
                    <p>
                        Designed by <b>Johannes Goupy</b>
                    </p>
                    <p>
                        Art by <b>Sylvain Trabut</b>
                    </p>
                    <p>
                        Published by <b>Bombyx</b>
                    </p>
                    <p>
                        Year <b>2024</b>
                    </p>
                    <p>
                        Bombyx{" "}
                        <a
                            className={styles.link}
                            href="https://studiobombyx.com/en/jeu/pixies/"
                            target="_blank"
                        >
                            Link
                        </a>
                    </p>

                    <h2>How to play:</h2>
                    <a
                        className={styles.link}
                        href="https://www.youtube.com/watch?v=Md3J335rZWM"
                        target="_blank"
                    >
                        Video Link
                    </a>
                    <Button onClick={() => setRulesOpen(!rulesOpen)}>
                        {rulesOpen ? "Close Rules" : "Open Rules"}
                    </Button>
                    {rulesOpen && (
                        <img
                            className={styles.ruleBook}
                            src={pixiesRules}
                        ></img>
                    )}
                    <Button onClick={() => setGameOpen(!gameOpen)}>Play</Button>
                </div>
            )}

            {gameOpen && (
                <div className={styles.gameContainer}>
                    <div className={styles.roundContainer}>
                        <div className={styles.roundLabel}>Round</div>
                        <div className={styles.roundNumber}>{roundNumber} / 3</div>
                    </div>

                    <div className={styles.turnStatus}>
                        player must choose a card
                    </div>

                    <div>
                        <div className={styles.table}>
                            <div className={styles.deck}>
                                {deckOffsets.map(({ zIndex, top, left }, i) => (
                                    <img
                                        key={i}
                                        className={styles.imgContainer}
                                        style={{
                                            zIndex,
                                            position: "absolute",
                                            top: `${top}px`,
                                            left: `${left}px`,
                                        }}
                                        src={cardBack}
                                        alt="Pixies Card Back"
                                    />
                                    ))}
                            </div>

                            <div className={styles.tableCards}>
                                <img
                                    className={styles.imgContainer}
                                    src={cardBack}
                                    alt="Pixies Card Back"
                                ></img>
                                <img
                                    className={styles.imgContainer}
                                    src={cardBack}
                                    alt="Pixies Card Back"
                                ></img>
                                <img
                                    className={styles.imgContainer}
                                    src={cardBack}
                                    alt="Pixies Card Back"
                                ></img>
                                <img
                                    className={styles.imgContainer}
                                    src={cardBack}
                                    alt="Pixies Card Back"
                                ></img>
                            </div>
                        </div>
                    </div>
                    <div className={styles.playerBoards}>
                        boards.map
                        <div className={styles.playerBoard}>
                            <div className={styles.playerName}>name here</div>
                            <div className={styles.board}>
                                <div className={styles.boardRow}>
                                    <div className={styles.placeholder}>1</div>
                                    <div className={styles.placeholder}>2</div>
                                    <div className={styles.placeholder}>3</div>
                                </div>
                                <div className={styles.boardRow}>
                                    <div className={styles.placeholder}>4</div>
                                    <div className={styles.placeholder}>5</div>
                                    <div className={styles.placeholder}>6</div>
                                </div>
                                <div className={styles.boardRow}>
                                    <div className={styles.placeholder}>7</div>
                                    <div className={styles.placeholder}>8</div>
                                    <div className={styles.placeholder}>9</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button isSquishy={true} color={scoreBoardOpen ? "var(--color-red)" : "var(--color-green)"} onClick={() => setScoreBoardOpen(!scoreBoardOpen)}> {scoreBoardOpen ? "Close Scoreboard" : "Show Scoreboard"}</Button>
                    <a className={styles.link} target="_blank" href="https://boardgamegeek.com/filepage/278431/english-rulebook"><NavItem>Rules Link</NavItem></a>

                    {scoreBoardOpen && <></>
                        /* <ScoreBoard boardName="Pixies Game"></ScoreBoard> */
                    }
                </div>
            )}
        </>
    );
};

export default Pixies;
