import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Decks from './components/Decks';

import { initializeDecks } from './reducers/deckReducer';

const App = (props) => {

  useEffect(() => {
    props.initializeDecks();
  }, []);

  return (
    <Container fluid>
      <Decks />
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    decks: state.decks,
  };
};

const mapDispatchToProps = {
  initializeDecks
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App);
