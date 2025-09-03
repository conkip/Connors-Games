/*
    Author: Connor Kippes
*/

// STYLE
import styles from "./Home.module.css";


// DEPENDANCIES
import { useState } from "react";
import { Link } from "react-router-dom";


// COMPONENTS
import Card from "../../components/Card/Card";
//import Carousel from "../../components/Carousel/Carousel";
import Button from "../../components/Button/Button";
import List from "../../components/List/List"



// GAME IMAGES
import pixiesImg from "../../assets/images/pixies.webp";
import wurfelBohnanzaImg from "../../assets/images/wurfel-bohnanza.webp";
import codenamesImg from "../../assets/images/codenames.webp";

//import meepleImg from "../../assets/images/meeple.webp";


// EXTERNAL TYPESCRIPT
/*const boardgameImages: string[] = [
    pixiesImg,
    codenamesImg,
    wurfelBohnanzaImg,
];*/

function Home() {
    return (
        <>
            <p>watch this luke</p>
            {/*<Carousel imageNames={boardgameImages}></Carousel>*/}
            <List category="Tools" itemList={[{_id: 1, name:"Score Keeper"}, {_id: 2, name:"Coin Flip"}, {_id: 3, name:"First Play Picker"}, {_id: 4, name:"Dice Roll"}, {_id: 5, name:"Timer"}]}></List>
            <List category="Games" itemList={[]}></List>
            <div className={styles.cardContainer}>
                <Card
                    image={pixiesImg}
                    title="Pixies"
                    desc="2–5 players | ~30 minutes. A light, beautiful, and strategic card game about placing cute pixie cards in a 3×3 grid to score points across three rounds."
                />
                <Card
                    image={wurfelBohnanzaImg}
                    title="Wurfel Bohnanza"
                    desc="2–5 players | ~30 minutes. A quick, push-your-luck dice game where players complete bean orders for coins, while everyone gets to profit from each roll."
                />
                <Card
                    image={codenamesImg}
                    title="Codenames"
                    desc="2–5 players | ~30 minutes. A clever word-association party game where spymasters give one-word clues to help their team find secret agents on the board—while avoiding the deadly assassin."
                />
            </div>
        </>
    );
}

export default Home;
