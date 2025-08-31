/*
    Author: Connor Kippes
*/

import headerStyles from '../Header.module.css'
import styles from './MobileHeader.module.css'

import WebsiteTitle from '../../WebsiteTitle/WebsiteTitle'
import MenuIcon from '../../MenuIcon/MenuIcon'
import Dropdown from '../../Dropdown/Dropdown'

import { useState, useEffect } from 'react'

function Header () {

    const [open, setOpen] = useState(false);

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.navbar}>
                <WebsiteTitle />

                <MenuIcon onClick={() => setOpen(!open)}/>
            </div>

            {open &&
                <Dropdown>
                    <div>HEllo</div>
                    <div>HEllo</div>
                    <div>HEllo</div>
                    <div>HEllo</div>
                </Dropdown>}
        </header>
    );
}

export default Header