import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import { connect } from 'react-redux';
import Deck from './Deck';

const Decks = (props) => {

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
