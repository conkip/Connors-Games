/*
    Author: Connor Kippes
*/

import styles from '../styles/Home.css'
import { useState } from "react";

import Card from '../components/Card/Card';
import Button from '../components/Button/Button'
import Carousel from '../components/Carousel/Carousel'
import UserGreeting from '../components/UserGreeting/UserGreeting'
import List from '../components/List/List'
import SquishyButton from '../components/SquishyButton/SquishyButton'

//images
import battlelineImg from '../assets/images/battleline.webp';
import codenamesImg from '../assets/images/codenames.webp';
import lostCitiesImg from '../assets/images/lost-cities.webp';
import loveLetterImg from '../assets/images/love-letter.webp';
import noahImg from '../assets/images/noah.webp';
import wurfelBohnanzaImg from '../assets/images/wurfel-bohnanza.webp';

import meepleImg from '../assets/images/meeple.webp'


function Home() {
    const [count, setCount] = useState(0);

    const boardgameImages: string[] = [battlelineImg, codenamesImg, lostCitiesImg, loveLetterImg, noahImg, wurfelBohnanzaImg];

    const users = [{id: 1, name:"Connor"},
                    {id: 2, name:"Luke"}];
    return (
        <>
            {users.length > 0 ? <List itemList= {users} category = "Users" /> : null}
            <SquishyButton onClick={() => {setCount(count+1); console.log(count)}}><h1 className="squishyButton">Click Me!</h1></SquishyButton>
            <UserGreeting isLoggedIn={true} username="connor" />
            <Button onClick = {() => console.log("hello")}>Name</Button>
            <Carousel imageNames={boardgameImages}></Carousel>
            <div className = "card-container">
                <Card image={noahImg} title="Noah" description="AI generated short description"/>
                <Card image={lostCitiesImg} title="Lost Cities" description="AI generated short description"/>
                <Card image={codenamesImg} title="Codenames" description="AI generated short description"/>
            </div>
        </>
    );
}

export default Home