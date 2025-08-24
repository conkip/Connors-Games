import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";

//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./pages/Home";
//import About from "./pages/About";

function App() {
    return (
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
        </Routes>
    );
}

export default App;
