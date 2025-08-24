/*
    Author: Connor Kippes
*/

import styles from "./Card.module.css"

interface Props {
    image: string;
    title: string;
    description: string;
}

const Card = ({image, title, description}: Props) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title}></img>
            <div className={styles.text}>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardText}>{description}</p>
            </div>
        </div>
    );
}

export default Card