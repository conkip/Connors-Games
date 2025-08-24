/*
    Author: Connor Kippes
*/

import styles from "./Home.module.css";

import { useState } from "react";

import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Carousel from "../../components/Carousel/Carousel";
import UserGreeting from "../../components/UserGreeting/UserGreeting";
import List from "../../components/List/List";
import SquishyButton from "../../components/SquishyButton/SquishyButton";
import Loader from "../../components/Loader/Loader";

//images
import battlelineImg from "../../assets/images/battleline.webp";
import codenamesImg from "../../assets/images/codenames.webp";
import lostCitiesImg from "../../assets/images/lost-cities.webp";
import loveLetterImg from "../../assets/images/love-letter.webp";
import noahImg from "../../assets/images/noah.webp";
import wurfelBohnanzaImg from "../../assets/images/wurfel-bohnanza.webp";

import meepleImg from "../../assets/images/meeple.webp";

function Home() {
    const [count, setCount] = useState(0);
    const [message1, setMessage1] = useState("Fun Button");
    const [message2, setMessage2] = useState("Compliment Button");
    const [message3, setMessage3] = useState("Insult Button");

    const handleFunButtonClick = () => {
        const newCount = count + 1;
        setCount(newCount);

        if(newCount >= 5 && newCount <= 8){
            setMessage1("Pretty Fun Right?");
        }
        else if(count >= 20 && count <= 23) {
            setMessage1("Ok heres the GPT API key:");
        }
        else if(count >= 100 && count <= 110) {
            setMessage1("100 Clicks! Impressive...");
        }
        else if(count >= 120 && count <= 130) {
            setMessage1("Ok this is the last message.");
        }
        else if(count >= 1000 && count <= 1003) {
            setMessage1("You really got nothing better to do");
        }
        else {
            setMessage1("Fun Button"); 
        }
    }

    const handleComplimentButtonClick = () => {
        const messages = [
            "Woah, you're jacked bro!",
            "You're awesome!",
            "Keep up the grind!",
        ]

        const randNum = Math.floor(Math.random() * messages.length);

        setMessage2(messages[randNum]);
    }

    const boardgameImages: string[] = [
        battlelineImg,
        codenamesImg,
        lostCitiesImg,
        loveLetterImg,
        noahImg,
        wurfelBohnanzaImg,
    ];

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

            <div className={styles.bigButtonContainer}>
                <SquishyButton
                    onClick={handleFunButtonClick}
                >
                    {message1}
                </SquishyButton>

                <h4>This button has been pressed {count} times!</h4>
            </ div>

            <div className={styles.bigButtonContainer}>
                <SquishyButton
                    onClick={handleComplimentButtonClick}
                >
                    {message2}
                </SquishyButton>

                <h4>This button has been pressed {count} times!</h4>
            </ div>

            

            <UserGreeting isLoggedIn={true} username="connor" />
            <Button onClick={() => console.log("hello")}>Name</Button>
            <Carousel imageNames={boardgameImages}></Carousel>
            <div className={styles.cardContainer}>
                <Card
                    image={noahImg}
                    title="Noah"
                    description="AI generated short description"
                />
                <Card
                    image={lostCitiesImg}
                    title="Lost Cities"
                    description="AI generated short description"
                />
                <Card
                    image={codenamesImg}
                    title="Codenames"
                    description="AI generated short description"
                />
            </div>
        </>
    );
}

export default Home;
