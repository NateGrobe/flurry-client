import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Decks from './components/Decks';
import NavBar from './components/NavBar';

import { initializeDecks } from './reducers/deckReducer';

const App = (props) => {

  useEffect(() => {
    props.initializeDecks();
  }, []);

  return (
    <div>
      <NavBar />
      <br/>
      <Container fluid>
        <Decks />
      </Container>
    </div>
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
