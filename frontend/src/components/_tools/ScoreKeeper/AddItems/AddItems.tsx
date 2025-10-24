/*
    Author: Connor Kippes
*/

import styles from './AddItems.module.css'

import Card from '../../../Card/Card'
import Button from '../../../Button/Button'

interface Props {
    title: string;
    children: React.ReactNode;
    handleAddItem: () => void;
    handleClose: () => void;
}

function AddItems({title, children, handleAddItem, handleClose}:Props) {
    return (
        <div className={styles.outerContainer}>
            <Card>
                <div className={styles.addItemContainer}>
                    <h2 className={styles.top}>{title}:</h2>
                    <div className={styles.bottom}>
                        {children}
                        <div className={styles.addItemsRow}>
                            <Button
                                onClick={handleAddItem}
                                color="var(--color-green)"
                            >
                                Confirm
                            </Button>
                            <Button
                                onClick={handleClose}
                                color="var(--color-red)"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default AddItems