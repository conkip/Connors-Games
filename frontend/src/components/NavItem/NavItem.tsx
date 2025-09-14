import styles from "./NavItem.module.css";

import { useState } from "react";

interface Props {
    children: React.ReactNode;
    expandable?: boolean;
    onClick?: () => void;
}

const NavItem = ({ children, expandable = false, onClick}: Props) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
        onClick?.();
    };

    return (
        <div
            className={`${styles.container} ${active && expandable ? styles.active : ""}`}
            onClick={handleClick}
        >
            <div className={styles.name}>{children}</div>

            {/* <?xml version="1.0" encoding="utf-8"?>      License: MIT. Made by phosphor: https://github.com/phosphor-icons/phosphor-icons*/}
            {expandable && (
                <svg
                    className={styles.caret}
                    fill="#000000"
                    width="15px"
                    height="15px"
                    viewBox="0 0 256 256"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M128,188a11.96187,11.96187,0,0,1-8.48535-3.51465l-80-80a12.0001,12.0001,0,0,1,16.9707-16.9707L128,159.0293l71.51465-71.51465a12.0001,12.0001,0,0,1,16.9707,16.9707l-80,80A11.96187,11.96187,0,0,1,128,188Z" />
                </svg>
            )}
        </div>
    );
};

export default NavItem;
