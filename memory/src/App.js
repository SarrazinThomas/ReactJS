import React, { Component } from 'react'
import './App.css'
import Card from './Card';
import GuessCount from './GuessCount';

class App extends Component {
  render() {
    const Cartes = [
      {card : "TOTO", feedback : "hidden"},
      {card : "TITI", feedback : "justMatched"},
      {card : "TATA", feedback : "justMismatched"},
      {card : "TUTU", feedback : "visible"},
      {card : "TXTX", feedback : "hidden"},
      {card : "TPTP", feedback : "justMatched"},
    ]
    const listCards = Cartes.map((x) => (
      <Card card={x.card} feedback={x.feedback} symbCount={this.handleCardClick}/>)
    )

    const seconds = new Date().getSeconds() % 2
    return (
    <div className="memory">
          <GuessCount nbrClick={0} />
          {listCards}
          {seconds ? <p>Gagné</p> : <p>Perdu</p>}
    </div>
    )
  }
  handleCardClick(card) {
    console.log(card, 'cliqué')

  }
}

export default App
