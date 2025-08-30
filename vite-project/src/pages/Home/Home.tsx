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
import SquishyButton from "../../components/SquishyButton/SquishyButton";
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
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("Fun Button");

    const handleFunButtonClick = () => {
        const newCount = count + 1;
        setCount(newCount);

        if(newCount >= 8 && newCount <= 10){
            setMessage("Pretty Fun Right?");
        }
        else if(newCount >= 20 && newCount <= 22) {
            setMessage("rm -rf system32");
        }
        else if(newCount >= 100 && newCount <= 102) {
            setMessage("100 Clicks! Impressive...");
        }
        else if(newCount >= 120 && newCount <= 122) {
            setMessage("Ok this is the last message.");
        }
        else if(newCount >= 1000 && newCount <= 1002) {
            setMessage("You really got nothing better to do");
        }
        else {
            setMessage("Fun Button"); 
        }
    }

    return (
        <>
            <Link to="/tools/boardmanager">Board Manager</Link>
            <div className={styles.funButtonContainer}>
                <SquishyButton
                    onClick={handleFunButtonClick}
                >
                    {message}
                </SquishyButton>
            </ div>

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
