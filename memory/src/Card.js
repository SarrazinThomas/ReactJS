import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

//const Card = () => <div className="card" />

const Card = ({card, feedback, symbCount}) => (
//    <div className = {`card ${feedback}`} onClick={() => console.log(card + "=> cliqué !!!")} >
    <div className = {`card ${feedback}`} onClick={() => symbCount(card)}>
        <span className = "symbol">
            {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

export default Card
