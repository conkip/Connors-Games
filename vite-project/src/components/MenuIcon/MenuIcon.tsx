/*
    Author: Connor Kippes
*/

import styles from './MenuIcon.module.css'
import { useState } from 'react'

interface Props {
    onClick: () => void;
    isOpen: boolean;
}

const MenuIcon = ({onClick, isOpen}:Props) => {

    return (
        <div 
            id={styles.menuIcon}
            className={isOpen ? styles.open : ""}
            onClick={() => onClick()}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default MenuIcon