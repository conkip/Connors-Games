/*
    Author: Connor Kippes
*/
import styles from './Dropdown.module.css'

import Card from '../Card/Card'

import type { ReactNode } from "react"

interface Props {
    children: ReactNode;
    top: number;
    left: number;
}

const Dropdown = ({children, top, left}:Props) => {
    return (
        <div className={styles.dropdown}
            style={{
                top: top,
                left: left,
            }}
        >
            <Card>
                <div className={styles.inside}>
                    {children}
                </div>
            </Card>
        </div>
    )
}

export default Dropdown