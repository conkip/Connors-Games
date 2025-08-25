/*
    Author: Connor Kippes
*/

// STYLE
import styles from "./Home.module.css";


// DEPENDANCIES
import { useState } from "react";


// COMPONENTS
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Carousel from "../../components/Carousel/Carousel";
import UserGreeting from "../../components/UserGreeting/UserGreeting";
import List from "../../components/List/List";
import SquishyButton from "../../components/SquishyButton/SquishyButton";
import Loader from "../../components/Loader/Loader";



// GAME IMAGES
import pixiesImg from "../../assets/images/pixies.webp";
import wurfelBohnanzaImg from "../../assets/images/wurfel-bohnanza.webp";
import codenamesImg from "../../assets/images/codenames.webp";
import loveLetterImg from "../../assets/images/love-letter.webp";
import lostCitiesImg from "../../assets/images/lost-cities.webp";
import battlelineImg from "../../assets/images/battleline.webp";

import meepleImg from "../../assets/images/meeple.webp";


// EXTERNAL TYPESCRIPT
const boardgameImages: string[] = [
    pixiesImg,
    battlelineImg,
    codenamesImg,
    lostCitiesImg,
    loveLetterImg,
    wurfelBohnanzaImg,
];

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

    const users = [
        { id: 1, name: "Connor" },
        { id: 2, name: "Luke" },
    ];
    return (
        <>
            <Loader type="b"/>
            <Loader type="a"/>
            {users.length > 0 ? (
                <List itemList={users} category="Users" />
            ) : null}

            <div className={styles.funButtonContainer}>
                <SquishyButton
                    onClick={handleFunButtonClick}
                >
                    {message}
                </SquishyButton>

                <h4>This button has been pressed {count} times!</h4>
            </ div>

            

            <UserGreeting isLoggedIn={true} username="connor" />
            <Button onClick={() => console.log("hello")}>Name</Button>
            <Carousel imageNames={boardgameImages}></Carousel>
            <div className={styles.cardContainer}>
                <Card
                    image={pixiesImg}
                    title="Pixies"
                    description="AI generated short description"
                />
                <Card
                    image={wurfelBohnanzaImg}
                    title="Wurfel Bohnanza"
                    description="AI generated short description"
                />
                <Card
                    image={battlelineImg}
                    title="Codenames"
                    description="AI generated short description"
                />
            </div>
        </>
    );
}

export default Home;
