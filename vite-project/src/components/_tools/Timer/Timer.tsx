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
    const isFresh = useRef(true);

    useEffect(() => {
        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setCurTime((c) => {
                    if (c <= 0.1) {
                        clearInterval(intervalIdRef.current);
                        setIsRunning(false);
                        startTimeRef.current = 0;
                        isFresh.current = true;
                        return 0; // snap to 0
                    }
                    return c - 0.05;
                });
            }, 50);
        }

        return () => clearInterval(intervalIdRef.current);
    }, [isRunning, curTime]);

    function start(){
        if(!isRunning) {
            if(isFresh.current)
                startTimeRef.current = curTime;
            setIsRunning(true);
            isFresh.current = false;
        }
    }

    function stop(){
        setIsRunning(false);
    }

    function reset() {
        if(curTime === startTimeRef.current){
            setCurTime(0);
            startTimeRef.current = 0;
            isFresh.current = true;
        }
        else {
            setCurTime(startTimeRef.current);
        }
        setIsRunning(false);
    }

    function formatTime() {
        let minutes: string | number = Math.floor(curTime / 60 % 60);
        let seconds: string | number = Math.floor(curTime % 60);
        let milliseconds: string | number = Math.floor(curTime * 100 % 100 * 60 / 100);

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
                <button className={styles.button} onClick={() => addTime(1)}>+1s</button>
                <button className={styles.button} onClick={() => addTime(5)}>+5s</button>
                <button className={styles.button} onClick={() => addTime(30)}>+30s</button>
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