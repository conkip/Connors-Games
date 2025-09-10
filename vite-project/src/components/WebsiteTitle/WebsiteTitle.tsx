import styles from "./WebsiteTitle.module.css";
import logo from "../../assets/images/logo.svg";

import { useLocation, useNavigate } from 'react-router-dom'
    
function WebsiteTitle() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        if (location.pathname === "/") {
            // already on homepage → scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            // not on homepage → redirect
            navigate("/");
        }
    }

    return (
        <div className={styles.titleContainer}>
            <img
                className={styles.logo}
                src={logo}
                onClick={handleClick}
            ></img>

            <h2
                className={styles.title}
                onClick={handleClick}
            >
                Connor's Games
            </h2>
        </div>
    );
}

export default WebsiteTitle;
