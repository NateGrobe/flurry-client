const initialState = {
  title: '',
  description: '',
  tasks: []
};

const newCardReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'CARD_TITLE':
      return { ...state, title: action.title };
    case 'CARD_DESC':
      return { ...state, description: action.desc };
      // need a to add a solution for managing tasks
    case 'CLEAR_CARD_FORM':
      return initialState;
    default:
      return state;
  }
};

export function updateCardTitle(title) {
  return dispatch => {
    dispatch({
      type: 'CARD_TITLE',
      title
    });
  };
}


export function updateCardDescription(desc) {
  return dispatch => {
    dispatch({
      type: 'CARD_DESC',
      desc
    });
  };
}

export function clearCardForm() {
  return dispatch => {
    dispatch({
      type: 'CLEAR_CARD_FORM'
    });
  };
}

export default newCardReducer;
