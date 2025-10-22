/*
    Author: Connor Kippes
*/

import styles from './Squirrels.module.css'

import squirrelsTitleImg from '../../../assets/images/squirrels/squirrels-title.webp'
import squirrelsBoxImg from '../../../assets/images/squirrels/squirrels-box.webp'

import PreviewPage from '../PreviewPage/PreviewPage'

import { useState } from 'react'

function Squirrels() {
    const [gameOpen, setGameOpen] = useState(false);

    return (
        <>
        {!gameOpen &&
            <PreviewPage
                gameName="Squirrels: The Card Game"
                titleImgPath={squirrelsTitleImg}
                boxImgPath={squirrelsBoxImg}
                designer="Joe Ward and Christine Ward"
                artist="Monkey Frog Studio"
                publisher="Friendzy Games"
                year={2024}
                about={`A fast, fun, and easy-to-learn card game with amazing squirrel art. 
                    Players battle to get the lowest score each round by getting rid of their 
                    cards. Push, Skip, and Wild Cards wreak havoc on you and your opponents! 
                    Use the powerful Squirrel Cards to instantly clear the center pile of 
                    cards and keep your turn going! Each game is challenging and exciting. 
                    This is a game that everyone will go nuts over!`}
                players ="2-5"
                playtimeMinutes="30"
                publisherLink="https://friendzygames.com/products/squirrels-the-card-game"
                rulesLink="https://friendzygames.com/pages/how-to-play"
                videoDemoLink= "https://youtu.be/RadWTKLj_Dk"
                setGameOpen = {setGameOpen}
            />
        }

        {gameOpen &&
            <h1 className={styles.center}>Squirrels: The Card Game - Under Construction</h1>
        }
        </>
    )
}

export default Squirrels;
