import deckServices from '../services/deckServices';
import cardServices from '../services/cardServices';

const deckReducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_DECKS':
      return action.content;
    case 'ADD_CARD_TO_DECK': {
      const deckId = action.deckId;
      const changedDeck = state.find(d => d.id === deckId);
      changedDeck.cards.push(action.newCard);
      return state.map(deck => deck.id ===  deckId ? changedDeck : deck);
    }
    case 'REMOVE_CARD_FROM_DECK': {
      const { cardId, deckId } = action;
      const changedDeck = state.find(d => d.id === deckId);
      changedDeck.cards = changedDeck.cards.filter(card => card.id !== cardId);
      return state.map(deck => deck.id ===  deckId ? changedDeck : deck);
    }
    default:
      return state;
  }
};

export function initializeDecks() {
  return async dispatch => {
    const content = await deckServices.getAll();
    dispatch({
      type: 'INIT_DECKS',
      content
    });
  };
}

export function addCardToDeck(card, deckId) {
  return async dispatch => {
    const newCard = await cardServices.createCard(card);
    dispatch({
      type: 'ADD_CARD_TO_DECK',
      newCard,
      deckId
    });
  };
}

export function removeCardFromDeck(cardId, deckId) {
  return async dispatch => {
    await cardServices.removeCard(cardId);
    dispatch({
      type: 'REMOVE_CARD_FROM_DECK',
      cardId,
      deckId
    });
  };
}

export default deckReducer;
