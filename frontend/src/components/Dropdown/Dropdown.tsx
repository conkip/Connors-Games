/*
    Author: Connor Kippes
*/
import styles from './Dropdown.module.css'

import Card from '../Card/Card'

import type { ReactNode } from "react"

interface Props {
    children: ReactNode;
    top: string;
    left: string;
    width?:string;
    height?:string;
}

const Dropdown = ({children, top, left, width = "fit-content", height="fit-content"}:Props) => {
    return (
        <div className={styles.dropdown}
            style={{
                top: top,
                left: left,
                width: width,
            }}
        >
            <Card width = {width} height ={height}>
                <div className={styles.inside}>
                    {children}
                </div>
            </Card>
        </div>
    )
}

export default Dropdown