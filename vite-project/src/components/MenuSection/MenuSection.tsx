import styles from './MenuSection.module.css'

interface Props{
    children: React.ReactNode;
    //hi
}
const Dropdown = ({children}: Props) => {
    return (
        <div className={styles.menuSection}>
            {children}
        </div>
    )
}

export default Dropdown