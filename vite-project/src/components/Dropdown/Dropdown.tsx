import styles from './Dropdown.module.css'

interface Props{
    children: React.ReactNode;
    //hi
}
const Dropdown = ({children}: Props) => {
    return (
        <div className={styles.dropdown}>
            {children}
        </div>
    )
}

export default Dropdown