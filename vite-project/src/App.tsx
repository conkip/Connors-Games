/*
    Author: Connor Kippes
*/

import './App.css';

import Layout from './components/Layout/Layout'
import ScrollToTop from './ScrollToTop'
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import BoardManager from "./components/_tools/BoardManager/BoardManager";
import Pixies from "./pages/_games/Pixies/Pixies";
import WurfelBohnanza from "./pages/_games/WurfelBohnanza/WurfelBohnanza";
import Codenames from "./pages/_games/Codenames/Codenames";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
        <ScrollToTop />
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
            <Route
                path="/pricing"
                element={
                    <Layout>
                        <Pricing />
                    </Layout>
                }
            />

            <Route
                path="/tools/boardmanager"
                element={
                    <Layout>
                        <BoardManager />
                    </Layout>
                }
            />

            <Route
                path="/games/pixies"
                element={
                    <Layout>
                        <Pixies />
                    </Layout>
                }
            />

            <Route
                path="/games/wurfelbohnanza"
                element={
                    <Layout>
                        <WurfelBohnanza />
                    </Layout>
                }
            />

            <Route
                path="/games/codenames"
                element={
                    <Layout>
                        <Codenames />
                    </Layout>
                }
            />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<SignUp />} />
        </Routes>
        </>
    );
}

export default App;
