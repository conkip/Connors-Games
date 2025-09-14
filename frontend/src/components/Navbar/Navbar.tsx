/*
    Author: Connor Kippes
*/

import styles from './Navbar.module.css'

interface Props {
    children: React.ReactNode;
    top?:number;
}

const Navbar = ({children, top = 0.5}: Props) => {
  return (
    <div className={styles.navbar} style ={{top: `${top}rem`}}>{children}</div>
  )
}

export default Navbar