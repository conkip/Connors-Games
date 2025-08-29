/*
    Author: Connor Kippes
*/

import styles from "./Card.module.css"
import { useState } from "react"

interface Props {
    image: string;
    title: string;
    desc: string;
}

const Card = ({image, title, desc}: Props) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className={styles.card}>
            <img src={image} alt={title}></img>
            <div className={styles.text}>
                <h2 className={styles.title}>{title}</h2>
                <p className={expanded ? styles.desc : `${styles.desc} ${styles.clamped}`}>{desc}</p>
                <p className={styles.toggle} onClick={() => setExpanded(!expanded)}>{expanded ? "Show less" : "Read more"}</p>
            </div>
            <h3 className={styles.playButton}>Play Now</h3>
        </div>
    );
}

export default Card