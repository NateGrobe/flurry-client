import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import deckReducer from './reducers/deckReducer';
import newCardReducer from './reducers/newCardReducer';
import cardModReducer from './reducers/cardModReducer';
import newDeckReducer from './reducers/newDeckReducer';
import loginReducer from './reducers/loginReducer';

const reducer = combineReducers({
  decks: deckReducer,
  newCard: newCardReducer,
  cardMod: cardModReducer,
  newDeck: newDeckReducer,
  login: loginReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
