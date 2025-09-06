/*
    Author: Connor Kippes
*/
import styles from './Timer.module.css'

import Button from '../../Button/Button'

import { useState, useEffect, useRef } from 'react'

function Timer() {
    const [isRunning, setIsRunning] = useState(false);
    const [curTime, setCurTime] = useState(0);

    const intervalIdRef = useRef(0);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setCurTime((c) => Math.max(c-1, 0));
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - curTime;
    }

    function stop(){
        setIsRunning(false);
    }

    function reset() {
        setIsRunning(false);
        if(isRunning){
            setCurTime(startTimeRef.current);
        }
        else {
            setCurTime(0);
            startTimeRef.current = 0;
        }
    }

    function formatTime() {
        let minutes: string | number = Math.floor(curTime / (1000 * 60) % 60);
        let seconds: string | number = Math.floor(curTime / (1000) % 60);
        let milliseconds: string | number = Math.floor(curTime % 1000 / 10);

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minutes}:${seconds}:${milliseconds}`;

    }

    function addTime(time:number) {
        if(isRunning){
            setCurTime((t) => t + time);
        }
        else {
            startTimeRef.current = startTimeRef.current + time;
            setCurTime(startTimeRef.current);
        }
    }

    return (
        <div className={styles.stopwatch}>
            <div className={styles.display}>{formatTime()}</div>
            <div className={styles.increments}>
                <button className={styles.button} onClick={() => addTime(.5)}>+0.30</button>
                <button className={styles.button} onClick={() => addTime(1)}>+1.00</button>
                <button className={styles.button} onClick={() => addTime(5)}>+5.00</button>
            </div>
            <div className={styles.controls}>
                <Button isSquishy={true} color="var(--color-green)" onClick={start}>Start</Button>
                <Button isSquishy={true} color="var(--color-red)" onClick={stop}>Stop</Button>
                <Button isSquishy={true} color="var(--color-orange)" onClick={reset}>Reset</Button>
            </div>
        </div>
    )
}

export default Timer