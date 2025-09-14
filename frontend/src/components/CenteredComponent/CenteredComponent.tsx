/*
    Author: Connor Kippes
*/
import styles from './CenteredComponent.module.css'

interface Props {
    children: React.ReactNode
}
const CenteredComponent = ({children}: Props) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}

export default CenteredComponent