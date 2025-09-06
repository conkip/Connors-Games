/*
    Author: Connor Kippes
*/

import styles from './Header.module.css'
import WebsiteTitle from '../WebsiteTitle/WebsiteTitle'
import Button from '../Button/Button'
import NavItem from '../NavItem/NavItem'
import Dropdown from '../Dropdown/Dropdown'

import { useState } from 'react'
import { Link } from 'react-router-dom'

function DesktopHeader() {
    const [open1, setOpen1] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    function handleCloseDropdowns(){
        setOpen1(false);
        setOpen11(false);
        setOpen12(false);
        setOpen2(false);
        setOpen2(false);
        setOpen3(false);
    }
    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                <div className={styles.headerItems}>
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
                                    <Link onClick={handleCloseDropdowns} className={styles.link} to="/games/pixies">
                                        <NavItem text="Pixies" />
                                    </Link>
                                    <Link
                                        onClick={handleCloseDropdowns}
                                        className={styles.link}
                                        to="/games/wurfel-bohnanza"
                                    >
                                        <NavItem text="Wurfel Bohnanza" />
                                    </Link>
                                    <Link onClick={handleCloseDropdowns} className={styles.link} to="/games/codenames">
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
                                        onClick={handleCloseDropdowns}
                                        className={styles.link}
                                        to="/tools/board-manager"
                                    >
                                        <NavItem text="Score Keeper" />
                                    </Link>

                                    <Link
                                        onClick={handleCloseDropdowns}
                                        className={styles.link}
                                        to="/tools/tools-bar"
                                    >
                                        <NavItem text="Tools Bar" />
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

                    <Link onClick={handleCloseDropdowns} className={styles.link} to="/pricing">
                        <NavItem text="Pricing" />
                    </Link>
                </div>

                <WebsiteTitle />

                <div className={styles.headerItems}>
                    <Link onClick={handleCloseDropdowns} className={styles.link} to="/login" >
                        <NavItem text="Login"></NavItem>
                    </Link>
                    <Link className={styles.link} to="/signup">
                        <Button isSquishy={true} onClick={handleCloseDropdowns}>Get Started</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default DesktopHeader;
