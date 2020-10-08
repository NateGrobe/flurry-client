const initialState = {
    title: '',
    description: '',
    tasks: []
};

const cardModReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INIT_CARD_MOD':
            return {
                title: action.title,
                description: action.desc,
                tasks: action.tasks
            };
        case 'MOD_TITLE':
            return { ...state, title: action.title };
        case 'MOD_DESC':
            return { ...state, description: action.desc };
        default:
            return state;
    }
}

export function initCardMod(title, desc, tasks) {
    return dispatch => {
        dispatch({
            type: 'INIT_CARD_MOD',
            title,
            desc,
            tasks
        });
    };
}

export function modTitle(title) {
    return dispatch => {
        dispatch({
            type: 'MOD_TITLE',
            title
        });
    };
}

export function modDesc(desc) {
    return dispatch => {
        dispatch({
            type: 'MOD_DESC',
            desc
        });
    };
}

export default cardModReducer;