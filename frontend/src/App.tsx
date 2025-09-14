/*
    Author: Connor Kippes
*/

import "./App.css";

import Layout from "./components/Layout/Layout";
import CenteredComponent from "./components/CenteredComponent/CenteredComponent";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";

import Pixies from "./pages/_games/Pixies/Pixies";
import WurfelBohnanza from "./pages/_games/WurfelBohnanza/WurfelBohnanza";
import Codenames from "./pages/_games/Codenames/Codenames";

import BoardManager from "./components/_tools/ScoreKeeper/BoardManager/BoardManager";
import ToolsBar from './components/_tools/ToolsBar/ToolsBar'
import DiceUI from "./components/_tools/DiceRoller/DiceUI/DiceUI";
import CoinUI from "./components/_tools/CoinFlipper/CoinUI/CoinUI";
import Timer from './components/_tools/Timer/Timer'
import Stopwatch from './components/_tools/Stopwatch/Stopwatch'

import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import Customers from "./pages/Customers/Customers";
import About from "./pages/About/About";

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
                    path="/tools/board-manager"
                    element={
                        <Layout>
                            <BoardManager />
                        </Layout>
                    }
                />

                <Route
                    path="/tools/tool-bar"
                    element={
                        <Layout>
                            <ToolsBar />
                        </Layout>
                    }
                />

                <Route
                    path="/tools/dice"
                    element={
                        <Layout>
                            <CenteredComponent>
                                <DiceUI />
                            </CenteredComponent>
                        </Layout>
                    }
                />

                <Route
                    path="/tools/coin"
                    element={
                        <Layout>
                            <CenteredComponent>
                                <CoinUI />
                            </CenteredComponent>
                        </Layout>
                    }
                />

                <Route
                    path="/tools/timer"
                    element={
                        <Layout>
                            <CenteredComponent>
                                <Timer />
                            </CenteredComponent>
                        </Layout>
                    }
                />

                <Route
                    path="/tools/stopwatch"
                    element={
                        <Layout>
                            <CenteredComponent>
                                <Stopwatch />
                            </CenteredComponent>
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
                    path="/games/wurfel-bohnanza"
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

                <Route
                    path="/privacy-policy"
                    element={
                        <Layout>
                            <PrivacyPolicy />
                        </Layout>
                    }
                />

                <Route
                    path="/terms-of-use"
                    element={
                        <Layout>
                            <TermsOfUse />
                        </Layout>
                    }
                />

                <Route
                    path="/customers"
                    element={
                        <Layout>
                            <Customers />
                        </Layout>
                    }
                />

                <Route
                    path="/about"
                    element={
                        <Layout>
                            <About />
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
