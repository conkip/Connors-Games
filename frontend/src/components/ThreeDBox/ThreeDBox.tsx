import styles from "./ThreeDBox.module.css"

import boxTextureImg from '../../assets/images/cardboard-texture.webp'

interface Props {
    front: string;
    desc:string;
    onClick?: () =>void;
}

const ThreeDBox =({ front, desc, onClick}:Props) =>{
    return (
        <button className={styles.boxWrapper} onClick={onClick}>
            <div className={styles.box}>
                <div className={`${styles.face} ${styles.front}`} style={{ backgroundImage: `url(${front})` }} />
                <div className={`${styles.face} ${styles.back}`} style={{ backgroundImage: `url(${boxTextureImg})`}}>{desc}<br/><br></br>Click to play!</div>
                <div className={`${styles.face} ${styles.left}`} style={{ backgroundImage: `url(${boxTextureImg})`}}/>
                <div className={`${styles.face} ${styles.right}`} style={{ backgroundImage: `url(${boxTextureImg})`}}/>
                <div className={`${styles.face} ${styles.top}`} style={{ backgroundImage: `url(${boxTextureImg})`}}/>
                <div className={`${styles.face} ${styles.bottom}`} style={{ backgroundImage: `url(${boxTextureImg})`}}/>
            </div>
        </button>
    );
}

export default ThreeDBox;