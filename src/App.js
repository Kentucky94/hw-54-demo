import React, {Component} from 'react';
import './App.css';
import './cards/cards.css';
import Card from './Components/Card/Card';
import Deck5 from "./CardDeck";

class App extends Component {
    state = {
        deck: Deck5,
    };

    render(){

        // const newCards = this.state.deck.map(card => (< Card suit={card.suit} rank={card.rank}/>));

        return (
            <div className="App">
                <div className="playingCards faceImages">

                </div>
            </div>
        );
    }
}

export default App;
