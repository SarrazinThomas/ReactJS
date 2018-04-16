import React from 'react'

import './GuessCount.css'

//const GuessCount = () => <div className="guesses" />
const GuessCount = ({nbrClick}) => (
    <div className="guesses" >
        {nbrClick}
    </div>
)

export default GuessCount
