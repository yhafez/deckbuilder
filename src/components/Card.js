// src/components/Card.justify


import React from 'react';

import './Card.css';

const card = ({
    id,
    name,
    type,
    manaCost,
    text,
    flavor,
    imageUrl,
    addCardToDeck,
    removeCardFromDeck
}) => {
    return(
        <div className="Card">
            <div className="info">
                <p className="header">
                    { name } - { manaCost }
                </p>
                <p className="type">
                    { type }
                </p>
                <p className="text">
                    { text }
                </p>
                <p className="flavor">
                    { flavor }
                </p>
            </div>
            <img className="preview" src= { imageUrl } />
            <div className="actions">
                <button
                onClick={() => {
                    addCardToDeck({
                        id,
                        name
                    })
                }}>
                    (+) Add to Deck
                </button>
                <button
                onClick={() => {
                    removeCardFromDeck({
                        id
                    })
                }}>
                    (-) Remove From Deck
                </button>
            </div>
        </div>
    );
}

export default card;