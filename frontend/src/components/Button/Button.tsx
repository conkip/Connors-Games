/*
    Author: Connor Kippes
*/

import styles from './Button.module.css'
import squishSound from '../../assets/audio/squish.mp3'
import type { ReactNode } from "react"

interface Props {
    children: ReactNode;
    color?: string;
    onClick?: () => void;
    isSquishy?: boolean;
}

const Button = ({children, color = "var(--color-accent)", onClick, isSquishy=false}: Props) => {
    const handleMouseDown = () => {
        if(isSquishy) {
            const sound = new Audio(squishSound);
            sound.volume = 0.2;
            sound.play();
        }
    }

    return (
        <button 
            type="button"
            className= {isSquishy ? `${styles.button} ${styles.squishyButton}` : styles.button}
            style={{background: color}}
            onMouseDown={handleMouseDown}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button