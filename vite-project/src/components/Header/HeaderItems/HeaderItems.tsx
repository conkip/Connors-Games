/*
    Author: Connor Kippes
*/

import styles from "./HeaderItems.module.css";

import Dropdown from "../../Dropdown/Dropdown";
import NavItem from "../../NavItem/NavItem";

import { useState } from "react";
import { Link } from "react-router-dom";

interface Props{
    onClick?: () => void;
}

const HeaderItems = ({onClick}: Props) => {
    const [open1, setOpen1] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
        <>
            <NavItem
                text="Products"
                expandable={true}
                onClick={() => {setOpen1(!open1); setOpen11(false); setOpen12(false);}}
            />
            {open1 && (
                <Dropdown>
                    <NavItem
                        text="Games"
                        expandable={true}
                        onClick={() => setOpen11(!open11)}
                    />
                    {open11 && (
                        <Dropdown>
                            <Link onClick={onClick} className={styles.link} to="/games/pixies">
                                <NavItem text="Pixies" />
                            </Link>
                            <Link
                                onClick={onClick}
                                className={styles.link}
                                to="/games/wurfelbohnanza"
                            >
                                <NavItem text="Wurfel Bohnanza" />
                            </Link>
                            <Link onClick={onClick} className={styles.link} to="/games/codenames">
                                <NavItem text="Codenames" />
                            </Link>
                        </Dropdown>
                    )}

                    <NavItem
                        text="Tools"
                        expandable={true}
                        onClick={() => setOpen12(!open12)}
                    />
                    {open12 && (
                        <Dropdown>
                            <Link
                                onClick={onClick}
                                className={styles.link}
                                to="/tools/boardmanager"
                            >
                                <NavItem text="Score Keeper" />
                            </Link>
                        </Dropdown>
                    )}
                </Dropdown>
            )}

            <NavItem
                text="Solutions"
                expandable={true}
                onClick={() => setOpen2(!open2)}
            />
            {open2 && (
                <Dropdown>
                    <div>Multiplayer</div>
                </Dropdown>
            )}

            <NavItem
                text="Resources"
                expandable={true}
                onClick={() => setOpen3(!open3)}
            />
            {open3 && (
                <Dropdown>
                    <div>Contact</div>
                </Dropdown>
            )}

            <Link onClick={onClick} className={styles.link} to="/pricing">
                <NavItem text="Pricing" />
            </Link>
        </>
    );
}

export default HeaderItems;
