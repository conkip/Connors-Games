/*
    Author: Connor Kippes
*/

import styles from './DeleteItems.module.css'

import Card from '../../../Card/Card'
import Button from '../../../Button/Button'

import type * as Types from '../../../../types'

interface Props<T extends Types.idName> {
    list: T[],
    setList: React.Dispatch<React.SetStateAction<T[]>>;
    handleClose: () => void,
}

function DeleteItems<T extends Types.idName>({list, setList, handleClose}:Props<T>) {
    function handleDelete(id: string) {
        setList((l: T[]) => l.filter((e: T) => e.id !== id));
    }

    return (
        <>
        <div className={styles.outerContainer}>
            <Card>
                <div className={styles.innerContainer}>
                    <h2 className={styles.top}>Delete Player:</h2>

                    <div className={styles.deletePlayerContainer}>
                        <div className={styles.bottom}>
                            {list.length === 0 ? (
                                <h3 className={styles.centerText}>No Boards</h3>
                            ) : (
                                list.map((p) => (
                                    <div
                                        className={styles.deletePlayerItem}
                                        key={p.id}
                                    >
                                        <h3>{p.name}</h3>
                                        <svg
                                            className={styles.deleteIcon}
                                            onClick={() => handleDelete(p.id)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 640"
                                        >
                                            {/* Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com 
                                            License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                                            <path
                                                d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 
                                            128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 
                                            69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 
                                            208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 
                                            556.4 490.9 531.1L512 208z"
                                            />
                                        </svg>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className={styles.cancelButton}>
                            <Button
                                isSquishy={true}
                                color="var(--color-red)"
                                onClick={handleClose}
                            >
                                Exit
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
        </>
    )
}

export default DeleteItems