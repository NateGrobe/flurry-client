import React, { useState } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import Deck from './Deck';
import NewDeckModal from './NewDeckModal';
import './styles.css';

const Decks = (props) => {
  const [bIsHovered, setBIsHovered] = useState(false);
  const [showNewDeckModal, setShowNewDeckModal] = useState(false);

  const handleModalShow = () => setShowNewDeckModal(true);
  const handleModalClose = () => setShowNewDeckModal(false);

  const addButtonStyles = {
    backgroundColor: bIsHovered ? '#08d2f1' : '#04c2e0',
  };

  return (
    <CardDeck as='div'>
      {props.decks.map(deck =>
        <Deck
          key={deck.id}
          cards={deck.cards}
          header={deck.title}
          deckId={deck.id}
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

export default connect(
  mapStateToProps,
  null
)(Decks);
