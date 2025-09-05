/*
    Author: Connor Kippes
*/

import styles from './About.module.css'

function About() {
    return (
        <>
            <h1 className={styles.center}>About</h1>
            <div className={styles.container}>
                <h3>Why is this website so great?</h3>
                <p>You can play online versions of these great games in one place</p>

                <h3>Easy to play</h3>
                <p>
                    You dont need to go through complicated signups, accept any cookies,
                    or navigate through cluttered UIs
                </p>

                <h3>Multiplayer</h3>
                <p>
                    Play with your friends!
                    Just create a lobby and have them join!
                </p>

                <h3>Built in tools</h3>
                <p>
                    Comes with a built in customizable scorekeeper feature, 
                    first player picker, timer, dice roller, and more!
                </p>

                <p>Best of all, it's all free</p>
            </div>
        </>
    )
}

export default About