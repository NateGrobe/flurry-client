const newDeckReducer = (state = '', action) => {
  switch(action.type) {
    case 'DECK_TITLE':
      return action.title;
    case 'CLEAR_DECK_FORM':
      return '';
    default:
      return state;
  }
};

export function updateDeckTitle(title) {
  return dispatch => {
    dispatch({
      type: 'DECK_TITLE',
      title
    });
  };
}

export function clearDeckForm() {
  return dispatch => {
    dispatch({
      type: 'CLEAR_DECK_FORM'
    });
  };
}

export default newDeckReducer;