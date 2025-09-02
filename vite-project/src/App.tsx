/*
    Author: Connor Kippes
*/

import './App.css'

import Layout from './components/Layout/Layout'
import ScrollToTop from './ScrollToTop'
import Home from './pages/Home/Home'
import Pricing from './pages/Pricing/Pricing'
import BoardManager from './components/_tools/ScoreKeeper/BoardManager/BoardManager'
import Pixies from './pages/_games/Pixies/Pixies'
import WurfelBohnanza from './pages/_games/WurfelBohnanza/WurfelBohnanza'
import Codenames from './pages/_games/Codenames/Codenames'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse/TermsOfUse'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

import { Routes, Route } from 'react-router-dom'

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

                <Route path="/login" element={<Login />} />

                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </>
    );
}

export default App;
