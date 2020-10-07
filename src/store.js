import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import deckReducer from './reducers/deckReducer';
import newCardReducer from './reducers/newCardReducer';

const reducer = combineReducers({
  decks: deckReducer,
  newCard: newCardReducer
});

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;
