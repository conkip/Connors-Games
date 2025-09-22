/*
    Author: Connor Kippes
*/

import styles from './Navbar.module.css'

interface Props {
    children: React.ReactNode;
    isSticky?:boolean;
}

const Navbar = ({children, isSticky =false}: Props) => {
  return (
    <div className={styles.navbar} style ={isSticky? {top: `.5rem`, position: "sticky", zIndex: 9999} : {}}>{children}</div>
  )
}

export default Navbar