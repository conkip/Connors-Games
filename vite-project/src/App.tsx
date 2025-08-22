import './styles/App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/Home'


//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./pages/Home";
//import About from "./pages/About";

function App() {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    );
}

export default App
