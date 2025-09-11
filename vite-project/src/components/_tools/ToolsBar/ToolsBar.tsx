/*
    Author: Connor Kippes
*/

import styles from "./ToolsBar.module.css";

import Timer from "../Timer/Timer";
import Stopwatch from "../Stopwatch/Stopwatch";
import DiceUI from "../DiceRoller/DiceUI/DiceUI";
import CoinUI from "../CoinFlipper/CoinUI/CoinUI";
import Navbar from "../../Navbar/Navbar";
import NavItem from '../../NavItem/NavItem'

function ToolsBar() {
    //add transparent x on corner of all elements to delete the component
    return (
        <>
            <Navbar>
                <h2>Tools Bar</h2>
                <div className={styles.toolsNav}>
                    <NavItem>Add Dice</NavItem>
                    <NavItem>Add Coin</NavItem>
                    <NavItem>Add Stopwatch</NavItem>
                    <NavItem>Add Timer</NavItem>
                </div>
            </Navbar>

            <div className={styles.container}>
                <div className={styles.item}>
                    <h1>Timer</h1>
                    <Timer />
                </div>

                <div className={styles.item}>
                    <h1>Stopwatch</h1>
                    <Stopwatch />
                </div>

                <div className={styles.item}>
                    <h1>Dice Roller</h1>
                    <DiceUI />
                </div>

                <div className={styles.item}>
                    <h1>Coin Flip</h1>
                    <CoinUI />
                </div>
            </div>
        </>
    );
}

export default ToolsBar;
