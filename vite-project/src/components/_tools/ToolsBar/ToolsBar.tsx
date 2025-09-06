/*
    Author: Connor Kippes
*/

import Timer from '../Timer/Timer'
import Stopwatch from '../Stopwatch/Stopwatch'
import Dice from '../Dice/Dice'
import Coin from '../Coin/Coin'

function ToolsBar() {
  return (
    <>
        <Timer />
        <Stopwatch />
        <Dice />
        <Coin />
    </>
  )
}

export default ToolsBar