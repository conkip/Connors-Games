/*
    Author: Connor Kippes
*/

import styles from "./ToolsBar.module.css"

import Timer from "../Timer/Timer"
import Stopwatch from "../Stopwatch/Stopwatch"
import Dice from "../DiceStuff/Dice/Dice"
import Coin from "../CoinStuff/Coin/Coin"
import Navbar from "../../Navbar/Navbar"
import NavItem from "../../NavItem/NavItem"
import MenuIcon from '../../MenuIcon/MenuIcon'

import useWindowWidth from "../../../hooks/useWindowWidth";

import { useState } from "react"

function ToolsBar() {
    //add transparent x on corner of all elements to delete the component
    const width = useWindowWidth();
    const isMobile = width < 1024;

    const [menuOpen, setMenuOpen] = useState(false);
    const [tools, setTools] = useState([]);
    // function addTool(name:string) {
    //     setTools((t) => [...t,
    //         <div className={styles.item}>
    //             <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
    //                 {/* Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com
    //                 License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
    //                 <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2
    //                 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2
    //                 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2
    //                 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6
    //                 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"/>
    //             </svg>
    //             <h1>{name}</h1>
    //             {name === "Timer" && <Timer />}
    //             {name === "Stopwatch" && <Stopwatch />}
    //             {name === "Coin" && <CoinUI />}
    //             {name === "Dice" && <DiceUI />}
    //         </div>
    //     ]);
    // }

    return (
        <>
            <Navbar>
                <h2>Tools Bar</h2>

                {isMobile ? (
                    <MenuIcon
                        onClick={() => setMenuOpen(!menuOpen)}
                        isOpen={menuOpen}
                    />
                ) : (
                    <div className={styles.toolsNav}>
                        <NavItem>Add Dice</NavItem>
                        <NavItem>Add Coin</NavItem>
                        <NavItem>Add Stopwatch</NavItem>
                        <NavItem>Add Timer</NavItem>
                    </div>
                )}
            </Navbar>

            {menuOpen && (
                <div>
                    <NavItem>Add Dice</NavItem>
                    <NavItem>Add Coin</NavItem>
                    <NavItem>Add Stopwatch</NavItem>
                    <NavItem>Add Timer</NavItem>
                </div>
            )}

            <div className={styles.container}>
                {tools}
                <Timer />
                <Stopwatch />
                <Dice size={7} />
                <Coin size={7} />
            </div>
        </>
    );
}

export default ToolsBar;
