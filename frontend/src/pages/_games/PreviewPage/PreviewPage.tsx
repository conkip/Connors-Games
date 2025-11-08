/*
    Author: Connor Kippes
*/

import styles from './PreviewPage.module.css'

import Button from '../../../components/Button/Button'

import { useState } from 'react'

interface Props{
    gameName:string,
    titleImgPath: string,
    boxImgPath:string,
    designer:string,
    artist:string,
    publisher: string,
    year: number,
    about: string,
    players: string,
    playtimeMinutes: string,
    publisherLink: string,
    rulesLink: string,
    videoDemoLink: string,
    setGameOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PreviewPage =(props: Props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.gamePreviewContainer}> 
            {/*TITLE IMAGE*/}
            <img className={styles.titleImg} alt={`${props.gameName} game title`} src={props.titleImgPath}></img>

            <div className={styles.underTitleContainer}>
                {/*BOX IMAGE*/}
                <img className={styles.boxImg} alt={`${props.gameName} game box`} src={props.boxImgPath}></img>

                {/**/}
                <div className={styles.credits}>
                    <p>
                        Designed by <b>{props.designer}</b>
                    </p>
                    <p>
                        Art by <b>{props.artist}</b>
                    </p>
                    <p>
                        Published by <b>{props.publisher}</b>
                    </p>
                    <p>
                        Year <b>{props.year}</b>
                    </p>
                    <a
                        className={styles.link}
                        href={props.publisherLink}
                        target="_blank"
                    >
                        Publisher Link
                    </a>
                </div>

                {/*HOW TO PLAY*/}
                <div className={styles.howToPlay}>
                    <div className={styles.playtimeContainer}>
                        <div className={styles.iconContainer}>
                            {/*PLAYER ICON*/}
                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                {/* Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com 
                                License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                                <path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 
                                200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 
                                546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 
                                447.8 448.2 368 349.7 368L290.3 368z"/>
                            </svg>
                            <p>{props.players}</p>
                        </div>
                        
                        <div className={styles.iconContainer}>
                            {/*CLOCK ICON*/}
                            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                {/* Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com 
                                License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.*/}
                                <path d="M320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 
                                64 461.4 64 320C64 178.6 178.6 64 320 64zM296 184L296 320C296 328 300 335.5 306.7 
                                340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 
                                364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/>
                            </svg>
                            <p>{props.playtimeMinutes} min</p>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <h2>How to play:</h2>
                    <a
                        className={styles.link}
                        href={props.rulesLink}
                        target="_blank"
                    >
                        Rules
                    </a>
                    <a
                        className={styles.link}
                        href={props.videoDemoLink}
                        target="_blank"
                    >
                        Video Demo
                    </a>
                </div>
            </div>

            <div className={styles.about}>
                <h2 className={styles.center}>About</h2>
                <div>
                `<p className={expanded ? styles.desc : `${styles.desc} ${styles.clamped}`}>
                    {props.about
                        .replace(/\s+/g, " ")  // collapse all normal whitespace (spaces, tabs, real newlines)
                        .split("\\n")          // split on literal backslash-n
                        .map((line, i) => (
                        <span key={i}>
                            &ensp;{line}
                            {i < props.about.split("\\n").length - 1 && <br />}
                        </span>
                    ))}
                </p>
                <p className={styles.toggle} onClick={() => setExpanded(!expanded)}>{expanded ? "Show less" : "Read more"}</p>`
                </div>
            </div>
            <div className={styles.center}>
                <Button isSquishy={true} color ="var(--color-green)" sizeRem ={2.5} onClick={() => props.setGameOpen(true)}>Play!</Button>
            </div>
        </div>
    )
}

export default PreviewPage