/*
    Author: Connor Kippes
*/

import heads from "../../../../assets/images/coin/coin-heads.webp";
import tails from "../../../../assets/images/coin/coin-tails.webp";

import { useState, useRef} from "react";

interface Props {
    size?: number;
    setIsHeadsState?: (f:string) => void;
}

const Coin = ({size = 5, setIsHeadsState}: Props) => {
    const [rotation, setRotation] = useState(0);
    const [isHeads, setIsHeads] = useState(true);
    const [isHalfFlipped, setIsHalfFlipped] = useState(false);
    const flipsRemaining = useRef(0);

    function handleClick() {
        const endFace = Math.floor(Math.random() * 2);
        flipsRemaining.current = 3 + endFace;
        startHalfFlip();
    }

    function startHalfFlip(){
        setIsHalfFlipped(true);
        setRotation((r) => r + 90);
    }

    function handleTransitionEnd() {
        if (isHalfFlipped) {
            // switch coin face when at 90° and then flip again
            setIsHeads((h) => !h);
            setIsHalfFlipped(false);
            setRotation((r) => r + 90);
        } else if(flipsRemaining.current > 0) {
            flipsRemaining.current -= 1;
            startHalfFlip();
        } else {
            // normalize at the end
            flipsRemaining.current = 0;
            setRotation((r) => {
                if(setIsHeadsState)
                    setIsHeadsState(!isHeads ? "Heads" : "Tails");
                // snap rotation to nearest 360°
                return Math.round(r / 360) * 360;
            });
        }  
    }
    return (
        <>
            <img
                style={{
                    height: `${size}rem`,
                    width: `${size}rem`,
                    transform: `rotateX(${rotation}deg)`,
                    transition: "transform .25s ease-out",
                }}
                onClick={handleClick}
                onTransitionEnd={handleTransitionEnd}
                src={isHeads? tails : heads}
            ></img>
        </>
    );
};

export default Coin;
