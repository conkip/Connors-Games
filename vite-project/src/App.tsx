import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card';
import Button from './components/Button/Button'
import Carousel from './components/Carousel/Carousel'
import UserGreeting from './components/UserGreeting/UserGreeting'
import List from './components/List/List'

//images
import battlelineImg from './assets/battleline.webp';
import codenamesImg from './assets/codenames.webp';
import lostCitiesImg from './assets/lost-cities.webp';
import loveLetterImg from './assets/love-letter.webp';
import noahImg from './assets/noah.webp';
import wurfelBohnanzaImg from './assets/wurfel-bohnanza.webp';

import meepleImg from './assets/meeple.webp'

const boardgameImages: string[] = [battlelineImg, codenamesImg, lostCitiesImg, loveLetterImg, noahImg, wurfelBohnanzaImg];

const users = [{id: 1, name:"Connor"},
                {id: 2, name:"Luke"}];

function App() {
    return (
        <>
            <Header />
            {users.length > 0 ? <List itemList= {users} category = "Users" /> : null}
            <UserGreeting isLoggedIn={true} username="connor" />
            <Button onClick = {() => console.log("hello")}>Name</Button>
            <Carousel imageNames={boardgameImages}></Carousel>
            <div className = "card-container">
                <Card image={noahImg} title="Noah" description="AI generated short description"/>
                <Card image={lostCitiesImg} title="Lost Cities" description="AI generated short description"/>
                <Card image={codenamesImg} title="Codenames" description="AI generated short description"/>
            </div>
            <Footer />
        </>
    );
}

export default App
