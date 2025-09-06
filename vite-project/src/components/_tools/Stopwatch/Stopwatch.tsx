/*
    Author: Connor Kippes
*/
import styles from './Stopwatch.module.css'

import Button from '../../Button/Button'

import { useState, useEffect, useRef } from 'react'

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
    }, [isRunning]);

    function start(){
        
    }

    function reset() {

    }

    function stop(){

    }

    function formatTime() {
        return `00:00:00`;

    }

    return (
        <div className={styles.stopwatch}>
            <div className={styles.display}>{formatTime()}</div>
            <div className={styles.controls}>
                <Button color="var(--color-green)" onClick={start}>Start</Button>
                <Button color="var(--color-red)" onClick={stop}>Stop</Button>
                <Button color="var(--color-orange)" onClick={reset}>Reset</Button>
            </div>
        </div>
    )
}

export default Stopwatch