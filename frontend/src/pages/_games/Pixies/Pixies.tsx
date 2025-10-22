/*
    Author: Connor Kippes
*/

import styles from "./Pixies.module.css";

import pixiesTitleImg from "../../../assets/images/pixies/pixies-title.webp";
import pixiesBoxImg from "../../../assets/images/pixies/pixies-box.webp";

import cardBack from "../../../assets/images/pixies/deck/pixies-card-back.webp";

/*import card1 from "../../../assets/images/pixies/deck/pixies-card-1.webp"*/

import PreviewPage from "../PreviewPage/PreviewPage";
import Button from "../../../components/Button/Button";
import ScoreBoard from "../../../components/_tools/ScoreKeeper/ScoreBoard/ScoreBoard";
import NavItem from "../../../components/NavItem/NavItem";

import { useState, useEffect } from "react";

import type * as Types from "../../../types";

let gameState = {
    curPlayer: "hi",
};
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
        if (tableCards.length == 0) {
            //refill table cards
        }
    }, tableCards);
    function chooseCard() {}

    return (
        <>
            {!gameOpen && (
                <PreviewPage
                    gameName="Pixies"
                    titleImgPath={pixiesTitleImg}
                    boxImgPath={pixiesBoxImg}
                    designer="Johannes Goupy"
                    artist="Sylvain Trabut"
                    publisher="Bombyx"
                    year={2024}
                    about={`In Pixies, you move through the seasons to meet little creatures 
                        emerging from a flower or sheltering in the hollow of a tree. 
                        Choose one of the revealed cards, but be careful which ones you 
                        leave to your opponents! Place that card in your playing area 
                        according to its number. Cards placed one on top of another are 
                        validated and earn you points at the end of the round, as do your 
                        largest color zone and your spirals. Easy...yet you'll find that 
                        the other players won't be short of bad advice.`}
                    players ="2-5"
                    playtimeMinutes="30"
                    publisherLink="https://studiobombyx.com/en/jeu/pixies/"
                    rulesLink="https://studiobombyx.com/assets/PIXIES_rulebook_EN.pdf"
                    videoDemoLink= "https://www.youtube.com/watch?v=Md3J335rZWM"
                    setGameOpen = {setGameOpen}
                />
            )}

            {gameOpen && (
                <div className={styles.gameContainer}>
                    <div className={styles.roundContainer}>
                        <div className={styles.roundLabel}>Round</div>
                        <div className={styles.roundNumber}>
                            {roundNumber} / 3
                        </div>
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

                    <Button
                        isSquishy={true}
                        color={
                            scoreBoardOpen
                                ? "var(--color-red)"
                                : "var(--color-green)"
                        }
                        onClick={() => setScoreBoardOpen(!scoreBoardOpen)}
                    >
                        {" "}
                        {scoreBoardOpen
                            ? "Close Scoreboard"
                            : "Show Scoreboard"}
                    </Button>
                    <a
                        className={styles.link}
                        target="_blank"
                        href="https://boardgamegeek.com/filepage/278431/english-rulebook"
                    >
                        <NavItem>Rules Link</NavItem>
                    </a>

                    {
                        scoreBoardOpen && <></>
                        /* <ScoreBoard boardName="Pixies Game"></ScoreBoard> */
                    }
                </div>
            )}
        </>
    );
};

export default Pixies;
