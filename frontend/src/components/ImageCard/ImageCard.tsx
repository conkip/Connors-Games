/*
    Author: Connor Kippes
*/

import styles from './ImageCard.module.css'

import Card from '../Card/Card'

import { useState } from 'react'

interface Props {
    image: string;
    title: string;
    desc: string;
    onClick?: () =>void;
}

const ImageCard = ({image, title, desc, onClick}: Props) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <Card>
            <div className={styles.card}>
                <img className={styles.img} src={image} alt={title}></img>
                <div className={styles.text}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={expanded ? styles.desc : `${styles.desc} ${styles.clamped}`}>{desc}</p>
                    <p className={styles.toggle} onClick={() => setExpanded(!expanded)}>{expanded ? "Show less" : "Read more"}</p>
                </div>
                <h3 className={styles.playButton} onClick={onClick}>Play Now</h3>
            </div>
        </Card>
    );
}

export default ImageCard