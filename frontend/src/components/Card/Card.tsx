/*
    Author: Connor Kippes
*/

import styles from './Card.module.css'

interface Props{
    children: React.ReactNode;
    width?:string;
    height?:string;
}
const Card = ({children, width="fit-content", height = "fit-content"}:Props) =>{
  return (
    <div className={styles.card} style={{width:width, height:height}}>{children}</div>
  )
}

export default Card