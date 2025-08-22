/*
    Author: Connor Kippes
*/

import styles from './SquishyButton.module.css'
import squishSound from '../../assets/audio/squish.mp3'
import type { ReactNode } from "react"

//rafce
interface Props {
    children: ReactNode;
    color?: string;
    onClick?: () => void;
}

const SquishyButton = ({children, color = "var(--color-accent)", onClick}: Props) => {
    const handleClick = () => {
        const audio = new Audio(squishSound);
        audio.play();
        if(onClick){onClick()};
    }

    return (
        <button 
            type="button" 
            className= {styles.button} 
            style={{background: color}}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default SquishyButton