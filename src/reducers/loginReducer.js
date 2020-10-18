const initialState = {
  username: '',
  password: '',
};

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_LOGIN_USERNAME':
      return { ...state, username: action.username };

    case 'UPDATE_LOGIN_PASS':
      return { ...state, password: action.pass };

    case 'CLEAR_LOGIN_FORM':
      return initialState;

    default:
      return state;
  }
};

export function updateLoginUsername(username) {
  return dispatch => {
    dispatch({
      type: 'UPDATE_LOGIN_USERNAME',
      username
    });
  };
}

export function updateLoginPass(pass) {
  return dispatch => {
    dispatch({
      type: 'UPDATE_LOGIN_PASS',
      pass
    });
  };
}

export function clearLoginForm() {
  return dispatch => {
    dispatch({
      type: 'CLEAR_LOGIN_FORM'
    });
  };
}

export default loginReducer;
