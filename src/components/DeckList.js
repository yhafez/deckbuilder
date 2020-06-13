// src/components/DeckList.js


import React from 'react';


const DeckList = ({
    deck,
    addCardToDeck,
    removeCardFromDeck
}) => {
    
    let cardCount = deck.reduce((cardCount, card) => cardCount + card.count, 0);
    
    return (
        <div id="deck">
            <h3>Your deck so far({ cardCount } cards):</h3>
            <div className="DeckList">
                {deck.map(({ id, name, count }) => (
                    <p key={ id }>
                        <span>
                            ({ count }x) { name }
                        </span><br />
                        <button
                        onClick={
                            () => addCardToDeck({ id, name })
                        }> + </button>
                        <button
                        onClick={
                            () => removeCardFromDeck({ id })
                        }> - </button>
                    </p>
                ))}
            </div>
        </div>
    );

}

export default DeckList;