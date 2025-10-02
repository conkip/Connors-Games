/*
    Author: Connor Kippes
*/

import styles from "./Marquee.module.css";
import React from "react";

interface Props {
    children: React.ReactNode;
    height: number;
    width: number;
    duration?: number;
    totalWidth?: number;
}

const Marquee = ({ children, height, width, duration = 7, totalWidth = 100}: Props) => {
    return (
        <div
            className={styles.marquee}
            style={
                {
                    "--quantity": React.Children.count(children),
                    "--height": `${height}rem`,
                    "--width": `${width}rem`,
                    "--totalWidth": `${totalWidth}%`,
                    "--duration": `${duration}s`,
                } as React.CSSProperties
            }
        >
            {React.Children.map(children, (child, i) => (
                <div
                    className={styles.item}
                    style={{ "--position": i } as React.CSSProperties}
                    key={i}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Marquee;
