/*
    Author: Connor Kippes
*/

import headerStyles from "../Header.module.css"
import styles from './DesktopHeader.module.css'
import WebsiteTitle from "../../WebsiteTitle/WebsiteTitle";
import SquishyButton from "../../SquishyButton/SquishyButton"
import ExpandableItem from "../../ExpandableItem/ExpandableItem";
import { Link } from "react-router-dom";

function DesktopHeader () {
    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.navbar}>
                <ol className={styles.list}>
                    <li className={styles.listItem}>
                        <ExpandableItem text='Products' />
                    </li>

                    <li className={styles.listItem}>
                        <ExpandableItem text='Solutions'/>
                    </li>

                    <li className={styles.listItem}>
                        <ExpandableItem text='Resources'/>
                    </li>
                    <li><Link className={styles.listItem} to="/pricing">Pricing</Link></li>
                </ol>

                <WebsiteTitle />

                <ol className={styles.list}>
                    <li><a className={styles.listItem} href = "#" >Login</a></li>
                    <li><SquishyButton>Get Started</SquishyButton></li>
                </ol>
            </div>
        </header>
    );
}

export default DesktopHeader