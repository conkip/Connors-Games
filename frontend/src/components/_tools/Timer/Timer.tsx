/*
    Author: Connor Kippes
*/
import styles from './Timer.module.css'

import Card from './../../Card/Card'
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
                    if (c <= 0) {
                        clearInterval(intervalIdRef.current);
                        setIsRunning(false);
                        startTimeRef.current = 0;
                        isFresh.current = true;
                        return 0; // snap to 0
                    }
                    return c - 1;
                });
            }, 1000);
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
        }
        else {
            setCurTime(startTimeRef.current);
        }
        isFresh.current = true;
        setIsRunning(false);
    }

    function formatTime() {
        let hours: string | number = Math.floor(curTime / 3600 % 60);
        let minutes: string | number = Math.floor(curTime / 60 % 60);
        let seconds: string | number = Math.floor(curTime % 60);

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");

        if(hours === 0){
            return `${minutes}:${seconds}`;
        }
        return `${hours}:${minutes}:${seconds}`;

    }

    function addTime(time:number) {
        setCurTime((t) => t + time);
    }

    return (
        <Card>
            <div className={styles.timer}>
                <div className={styles.display}>{formatTime()}</div>
                <div className={styles.increments}>
                    <button className={styles.button} onClick={() => addTime(5)}>+0:05</button>
                    <button className={styles.button} onClick={() => addTime(30)}>+0:30</button>
                    <button className={styles.button} onClick={() => addTime(60)}>+1:00</button>
                </div>
                <div className={styles.controls}>
                    <Button color="var(--color-green)" onClick={start}>Start</Button>
                    <Button color="var(--color-red)" onClick={stop}>Stop</Button>
                    <Button color="var(--color-orange)" onClick={reset}>Reset</Button>
                </div>
            </div>
        </Card>
    )
}

export default Timer