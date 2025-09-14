/*
    Author: Connor Kippes
    Purpose: Adding the header and footer to main pages.
*/

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from './Layout.module.css'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.layout}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
