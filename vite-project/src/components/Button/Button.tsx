/*
    Author: Connor Kippes
*/

import styles from './Button.module.css'
import squishSound from '../../assets/audio/squish.mp3'
import type { ReactNode } from "react"

//rafce
interface Props {
    children: ReactNode;
    color?: string;
    onClick?: () => void;
    squishy?: boolean;
}

const Button = ({children, color = "var(--color-accent)", onClick, squishy=false}: Props) => {
    const handleMouseDown = () => {
        squishy && new Audio(squishSound).play();
    }

    return (
        <button 
            type="button"
            className= {squishy ? `${styles.button} ${styles.squishyButton}` : styles.button}
            style={{background: color}}
            onMouseDown={handleMouseDown}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button