/*
    Author: Connor Kippes
*/

import styles from "./Button.module.css"
import type { ReactNode } from "react"

//rafce
interface Props {
    children: ReactNode;
    color?: string;
    onClick: () => void;
}

const Button = ({children, color = 'red', onClick}: Props) => {
  return (
    <button type="button" className= {styles.button} onClick={onClick}>{children}</button>
  )
}

export default Button