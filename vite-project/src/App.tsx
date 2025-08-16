import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card';
import Button from './components/Button/Button'
import Carousel from './components/Carousel/Carousel'

//images
import noahImg from './assets/noah.webp';
import lostCitiesImg from './assets/lost-cities.webp';
import codenamesImg from './assets/codenames.webp';

const boardgameImages: string[] = ['battleline.webp', 'codenames.webp', 'hey-thats-my-fish.webp', 'junk-drawer.webp', 'lost-cities.webp', 'love-letter.webp'];

function App() {
    return (
        <>
            <Header />
            <Button>Name</Button>
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
