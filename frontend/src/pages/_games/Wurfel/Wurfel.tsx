/*
    Author: Connor Kippes
*/

import styles from './Wurfel.module.css'

import wurfelTitleImg from '../../../assets/images/wurfel/wurfel-title.webp'
import wurfelBoxImg from '../../../assets/images/wurfel/wurfel-box.webp'

import PreviewPage from '../PreviewPage/PreviewPage'

import { useState } from 'react'

function WurfelBohnanza() {
    const [gameOpen, setGameOpen] = useState(false);

    return (
        <>
        {!gameOpen &&
            <PreviewPage
                gameName="Wurfel Bohnanza"
                titleImgPath={wurfelTitleImg}
                boxImgPath={wurfelBoxImg}
                designer="Uwe Rosenberg"
                artist="Björn Pertoft"
                publisher="999 Games, AMIGO"
                year={2012}
                about={`Würfel Bohnanza is, as you might suspect, a dice game in the Bohnanza family. 
                    Instead of cards, dice give you the beans that you must use to satisfy orders and 
                    (eventually) collect “Bohnentalers” (i.e., dollars, bucks, dinero…). 
                    The first player to collect thirteen Bohnentalers wins. 
                    \\n\\n
                    At the start of the game, each player receives two order cards, each of which shows 
                    six orders; the player tries to complete orders on one card while using the other to 
                    cover completed orders. The easiest orders to complete – say, two specific bean types 
                    or three beans in any combination of two types – are at the bottom of the card, and 
                    the hardest ones – requiring, say, a four-of-a-kind or seven beans with no blue ones – 
                    are at the top. Orders must be completed from bottom to top.
                    \\n\\n
                    On a turn, the active player starts by rolling the seven bean dice, three of which 
                    have one combination of beans and four of which have another combination. This player 
                    must set aside at least one bean, then she rerolls any remaining dice, setting at least 
                    one aside, etc. After at most seven rolls, she completes as many orders as she can, 
                    reusing the dice as needed to complete orders. Once a player completes three orders, 
                    she can “harvest” the card for one coin. Each additional completed order is worth a coin, 
                    up to a maximum of four. When a player harvests the order card, she draws a new card 
                    and uses that to record completed orders (possibly on the same turn) on the order 
                    card she already had.
                    \\n\\n
                    In the Bohnanza card game, players trade cards to improve the standing of both parties 
                    involved in the trade. In Würfel Bohnanza, the active player doesn’t trade dice, but 
                    opponents do get to benefit from that player’s rolls. After each roll by the active 
                    player, all other players can use the dice just rolled – and not dice already set aside – 
                    to complete orders on their own cards. Thus, the active player has some incentive not to 
                    dawdle too much with her rolls as her opponents might benefit from her turn more than she does.
                    \\n\\n
                    The game ends as soon as one or more players have collected thirteen Bohnentalers. 
                    The player with the most Bohnentalers wins!`}
                players ="2-5"
                playtimeMinutes="20-45"
                publisherLink="https://www.amigo-spiele.de/kartenspiele/bohnanza-das-wuerfelspiel_2253_1194"
                rulesLink="https://boardgamegeek.com/filepage/76149/wuerfel-bohnanza-english-rules-translation"
                videoDemoLink= "https://www.youtube.com/watch?v=MdvqgBNVmHo"
                setGameOpen = {setGameOpen}
            />
        }

        {gameOpen &&
            <h1 className={styles.center}>Wurfel Bohnanza - Under Construction</h1>
        }
        </>
    )
}

export default WurfelBohnanza;
