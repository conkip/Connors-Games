/*
    Author: Connor Kippes
*/

import styles from "./Button.module.css";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    color?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, color = "var(--color-accent)", onClick }: Props) => {
    return (
        <button 
            type="button" 
            className= {styles.button} 
            style={{background: color}}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
