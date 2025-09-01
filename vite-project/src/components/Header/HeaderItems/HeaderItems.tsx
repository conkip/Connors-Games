/*
    Author: Connor Kippes
*/

import styles from './HeaderItems.module.css'

import Dropdown from '../../Dropdown/Dropdown'
import NavItem from '../../NavItem/NavItem'

import { useState } from 'react'
import { Link } from 'react-router-dom'

function HeaderItems() {
    const [open1, setOpen1] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
        <>
            <div onMouseLeave={() => setOpen1(false)}>
            <NavItem text='Products' expandable={true} onClick={() => setOpen1(!open1)}/>
            {open1 && (
                <Dropdown>
                    <div onMouseLeave={() => setOpen11(false)}>
                    <NavItem text='Games' expandable={true} onClick={() => setOpen11(!open11)}/>
                    {open11 && (
                        <Dropdown>
                            <Link className={styles.link} to='/games/pixies'><NavItem text="Pixies" /></Link>
                            <Link className={styles.link} to='/games/wurfelbohnanza'><NavItem text="Wurfel Bohnanza" /></Link>
                            <Link className={styles.link} to='/games/codenames'><NavItem text="Codenames" /></Link>
                        </Dropdown>
                    )}
                    </div>

                    <div onMouseLeave={() => setOpen12(false)}>
                    <NavItem text='Tools' expandable={true} onClick={() => setOpen12(!open12)}/>
                    {open12 && (
                        <Dropdown>
                            <Link className={styles.link} to='/tools/boardmanager'></Link>
                        </Dropdown>
                    )}
                    </div>
                </Dropdown>
            )}
            </div>

            <div onMouseLeave={() => setOpen2(false)}>
            <NavItem text="Solutions" expandable={true} onClick={()=>setOpen2(!open2)}/>
            {open2 && (
                <Dropdown> 
                    <div>Multiplayer</div>
                </Dropdown>
            )}
            </div>

            <div onMouseLeave={() => setOpen3(false)}>
            <NavItem text="Resources" expandable={true} onClick={() => setOpen3(!open3)}/>
            {open3 && (
                <Dropdown> 
                    <div>Contact</div>
                </Dropdown>
            )}
            </div>

            <Link className={styles.link} to="/pricing">
                <NavItem text="Pricing" />
            </Link>
        </>
    )
}

export default HeaderItems