import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, useHistory } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Decks from './components/Decks';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';

import { initializeDecks } from './reducers/deckReducer';

const App = (props) => {

  useEffect(() => {
    props.initializeDecks();
  }, []);

  return (
    <div>
      <Switch>
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path='/signup'>
        </Route>
        <Route path='/'>
          <NavBar />
          <br/>
          <Container fluid>
            <Decks />
          </Container>
        </Route>
      </Switch>
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
