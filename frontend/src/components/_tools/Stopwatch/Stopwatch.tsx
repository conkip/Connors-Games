/*
    Author: Connor Kippes
*/
import styles from './Stopwatch.module.css'

import Card from './../../Card/Card'
import Button from '../../Button/Button'

import { useState, useEffect, useRef } from 'react'

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    const intervalIdRef = useRef(0);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now()- startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset() {
        setIsRunning(false);
        setElapsedTime(0);
    }

    function formatTime() {
        let minutes: string | number = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds: string | number = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds: string | number = Math.floor(elapsedTime % 1000 / 10);

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;

    }

    return (
        <Card>
            <div className={styles.stopwatch}>
                <div className={styles.display}>{formatTime()}</div>
                <div className={styles.controls}>
                    <Button color="var(--color-green)" onClick={start}>Start</Button>
                    <Button color="var(--color-red)" onClick={stop}>Stop</Button>
                    <Button color="var(--color-orange)" onClick={reset}>Reset</Button>
                </div>
            </div>
        </Card>
    )
}

export default Stopwatch