import React, { useState } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Deck from './Deck';
import NewDeckModal from './NewDeckModal';
import './styles.css';

import { removeDeck } from '../reducers/deckReducer';

const Decks = (props) => {
  const [bIsHovered, setBIsHovered] = useState(false);
  const [showNewDeckModal, setShowNewDeckModal] = useState(false);

  const handleModalShow = () => setShowNewDeckModal(true);
  const handleModalClose = () => setShowNewDeckModal(false);

  const addButtonStyles = {
    backgroundColor: bIsHovered ? '#08d2f1' : '#04c2e0',
  };

  function handleRemoveDeck(deckId) {
    const deckTitle = props.decks.find(deck => deck.id === deckId).title;
    if (window.confirm(`Delete ${deckTitle} and all its cards?`)) {
      props.removeDeck(deckId);
    }
  }

  return (
    <CardDeck as='div'>
      {props.decks.map(deck =>
        <Deck
          key={deck.id}
          cards={deck.cards}
          header={deck.title}
          deckId={deck.id}
          delDeck={handleRemoveDeck}
        />
      )}
      <Button
        id='add-deck-button'
        style={addButtonStyles}
        onMouseEnter={() => setBIsHovered(true)}
        onMouseLeave={() => setBIsHovered(false)}
        onClick={handleModalShow}
      >
        + Add Deck
      </Button>
      <NewDeckModal show={showNewDeckModal} hide={handleModalClose}/>
    </CardDeck>
  );
};

const mapStateToProps = state => {
  return {
    decks: state.decks
  };
};

const mapDispatchToProps = {
  removeDeck
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Decks);
