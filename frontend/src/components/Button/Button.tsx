/*
    Author: Connor Kippes
*/

import styles from './Button.module.css'
import type { ReactNode } from "react"

interface Props {
    children: ReactNode;
    color?: string;
    onClick?: () => void;
    sizeRem?:number;
}

const Button = ({children, color = "var(--color-accent)", onClick, sizeRem=1}: Props) => {

    return (
        <button 
            type="button"
            className= {styles.button}
            style={{
                background: color,
                "--size": `${sizeRem}rem`,
            } as React.CSSProperties}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button