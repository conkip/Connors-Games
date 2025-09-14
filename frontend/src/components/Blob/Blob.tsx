/*
    Author: Connor Kippes
*/
import styles from './Blob.module.css'

interface Props{
    h: number;
    w: number;
    blobStyle?:number;
    children: React.ReactNode;
}

const blobs = [
  {
    radii1: "40% 60% 60% 40% / 70% 30% 70% 30%",
    radii2: "60% 40% 50% 50% / 40% 60% 40% 60%",
  },
  {
    radii1: "30% 70% 70% 30% / 50% 50% 70% 30%",
    radii2: "50% 50%",
  },
  {
    radii1: "50% 50% 40% 60% / 30% 70% 30% 70%",
    radii2: "60% 40%",
  },
];

const Blob = ({h, w, blobStyle = 1, children}:Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.blob} style={{"--h": `${h}rem`, "--w": `${w}rem`, "--radii1": blobs[blobStyle-1].radii1,"--radii2": blobs[blobStyle-1].radii2} as React.CSSProperties}></div>
            {children}
        </div>
    )
}

export default Blob