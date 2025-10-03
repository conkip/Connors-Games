/*
    Author: Connor Kippes
*/

import styles from "./Home.module.css";

import ImageCard from "../../components/ImageCard/ImageCard";
import Dice from "../../components/_tools/DiceStuff/Dice/Dice";
import Coin from "../../components/_tools/CoinStuff/Coin/Coin";

import pixiesImg from "../../assets/images/pixies/pixies.webp";
import wurfelBohnanzaImg from "../../assets/images/wurfel/wurfel-bohnanza.webp";
import codenamesImg from "../../assets/images/codenames.webp";

import Marquee from "../../components/Marquee/Marquee";

import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const location = useLocation();

    /* 
        scroll down to an id section when navitating 
        to this page with a query in it. ex- '/#section'
    */
    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            navigate("/");
        }
        }
    }, [location]);

    return (
        <>
            <div className={styles.section}>
                <div className={styles.topContainer}>
                    <h1 className={styles.animatedText}>Connors Games</h1>
                    <div className={styles.inner}>
                        <div>
                            <h2>
                                Play some{" "}
                                <h2 className={styles.colorText}>
                                    amazing games
                                </h2>{" "}
                                with your{" "}
                                <h2 className={styles.colorText}>friends</h2> or{" "}
                                <h2 className={styles.colorText}>AI</h2>!
                            </h2>
                        </div>

                        <Marquee height={15} width={15} duration={7}>
                            <div className={styles.imgContainer}>
                                <img alt="Pixies Image" src={pixiesImg}></img>
                                <button>Pixies</button>
                            </div>

                            <div className={styles.imgContainer}>
                                <img
                                    alt="Wurfel Bohnanza Image"
                                    src={wurfelBohnanzaImg}
                                ></img>
                                <button>Wurfel Bohnanza</button>
                            </div>

                            <div className={styles.imgContainer}>
                                <img
                                    alt="Codenames Image"
                                    src={codenamesImg}
                                ></img>
                                <button>Codenames</button>
                            </div>
                        </Marquee>
                    </div>

                    <div className={styles.inner}>
                        <Marquee height={5} width={5}>
                            {/*Score Keeper*/}
                            <Link
                                className={styles.link}
                                to="/tools/board-manager"
                            >
                                <div className={styles.scoreKeeperIcon}>
                                    <div className={styles.incrementor}>+1</div>
                                </div>
                            </Link>

                            {/*Dice*/}
                            <Link className={styles.link} to="/tools/dice">
                                <Dice size={5} />
                            </Link>

                            {/*Coin*/}
                            <Link className={styles.link} to="/tools/coin">
                                <Coin size={5} />
                            </Link>

                            {/* Timer */}
                            <Link
                                className={`${styles.link} ${styles.timerIconWrapper}`}
                                to="/tools/timer"
                            >
                                <svg
                                    className={styles.timerIcon}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                >
                                    {/* Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com 
                                    License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. */}
                                    <path
                                        d="M160 64C142.3 64 128 78.3 128 96C128 113.7 142.3 128 160 128L160 139C160 
                                    181.4 176.9 222.1 206.9 252.1L274.8 320L206.9 387.9C176.9 417.9 160 458.6 160 
                                    501L160 512C142.3 512 128 526.3 128 544C128 561.7 142.3 576 160 576L480 576C497.7 
                                    576 512 561.7 512 544C512 526.3 497.7 512 480 512L480 501C480 458.6 463.1 417.9 
                                    433.1 387.9L365.2 320L433.1 252.1C463.1 222.1 480 181.4 480 139L480 128C497.7 128 
                                    512 113.7 512 96C512 78.3 497.7 64 480 64L160 64zM416 501L416 512L224 512L224 501C224 
                                    475.5 234.1 451.1 252.1 433.1L320 365.2L387.9 433.1C405.9 451.1 416 475.5 416 501z"
                                    />
                                </svg>
                            </Link>

                            {/* Stopwatch */}
                            <Link className={styles.link} to="/tools/stopwatch">
                                <svg
                                    className={styles.stopwatchIcon}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                >
                                    {/* Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com 
                                    License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.*/}
                                    <path
                                        d="M264.5 64C251.2 64 240.5 74.7 240.5 88C240.5 101.3 251.2 112 264.5 112L296.5 
                                    112L296.5 137.3C188.5 149.2 104.5 240.8 104.5 352C104.5 471.3 201.2 568 320.5 568C439.8 
                                    568 536.5 471.3 536.5 352C536.5 312.2 525.7 274.9 506.9 242.8L535.1 214.6C547.6 202.1 
                                    547.6 181.8 535.1 169.3C522.6 156.8 502.3 156.8 489.8 169.3L466.4 192.7C433.5 162.5 
                                    391.2 142.4 344.4 137.2L344.4 111.9L376.4 111.9C389.7 111.9 400.4 101.2 400.4 87.9C400.4 
                                    74.6 389.7 63.9 376.4 63.9L264.4 63.9zM344.5 248L344.5 352C344.5 365.3 333.8 376 320.5 
                                    376C307.2 376 296.5 365.3 296.5 352L296.5 248C296.5 234.7 307.2 224 320.5 224C333.8 224 
                                    344.5 234.7 344.5 248z"
                                    />
                                </svg>
                            </Link>
                        </Marquee>

                        <h2>
                            Use{" "}
                            <h2 className={styles.colorText}>built in tools</h2>{" "}
                            like a{" "}
                            <h2 className={styles.colorText}>score keeper</h2>{" "}
                            or dice roller
                        </h2>
                    </div>
                </div>
            </div>

            <div id="games" className={styles.imageCardContainer}>
                <ImageCard
                    image={pixiesImg}
                    title="Pixies"
                    desc="2–5 players | ~30 minutes. A light, beautiful, and strategic card game about placing cute pixie cards in a 3×3 grid to score points across three rounds."
                    onClick={() => navigate("/games/pixies")}
                />
                <ImageCard
                    image={wurfelBohnanzaImg}
                    title="Wurfel Bohnanza"
                    desc="2–5 players | ~30 minutes. A quick, push-your-luck dice game where players complete bean orders for coins, while everyone gets to profit from each roll."
                    onClick={() => navigate("/games/wurfel-bohnanza")}
                />
                <ImageCard
                    image={codenamesImg}
                    title="Codenames"
                    desc="2–5 players | ~30 minutes. A clever word-association party game where spymasters give one-word clues to help their team find secret agents on the board—while avoiding the deadly assassin."
                    onClick={() => navigate("/games/codenames")}
                />
            </div>

            <div className={styles.spacer}></div>
            <div className={styles.spacer}></div>
        </>
    );
}

export default Home;
