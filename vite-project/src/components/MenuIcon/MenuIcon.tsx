/*
    Author: Connor Kippes
*/

import styles from './MenuIcon.module.css'
import { useState } from 'react'

interface Props {
    onClick: () => void;
}

const MenuIcon = ({onClick}:Props) => {

    const [open, setOpen] = useState(false);

    return (
        <div 
            id={styles.menuIcon}
            className={open ? styles.open : ""}
            onClick={() => {
                setOpen(!open);
                onClick();
            }}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default MenuIcon