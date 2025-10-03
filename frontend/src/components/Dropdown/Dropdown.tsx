/*
    Author: Connor Kippes
*/
import styles from './Dropdown.module.css'

import Card from '../Card/Card'

import { useEffect, useState } from "react"

import type { ReactNode } from "react"

interface Props {
    children: ReactNode;
    top: string;
    left: string;
    width?:string;
    height?:string;
    fadeIn?:boolean;
}

const Dropdown = ({children, top, left, width = "fit-content", height="fit-content", fadeIn = true}:Props) => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(true);
    }, []);
    return (
        <div className={styles.dropdown}
            style={{
                top: top,
                left: left,
                width: width,
                opacity: visible && fadeIn ? "1" : "0",
                transform: visible && fadeIn ? "translate(-100%, 2rem)" : "translate(-100%, 0)",
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