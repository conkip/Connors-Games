import styles from "./WebsiteTitle.module.css";
import logo from "../../assets/images/logo.svg";

function WebsiteTitle() {
    return (
        <div className={styles.titleContainer}>
            <img
                className={styles.logo}
                src={logo}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            ></img>

            <h2
                className={styles.title}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                Connor's Games
            </h2>
        </div>
    );
}

export default WebsiteTitle;
