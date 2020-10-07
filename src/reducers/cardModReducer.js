const initialState = {
    title: '',
    description: '',
    tasks: []
};

const cardModReducer = (state = initialState, action) {
    switch(action.type) {
        case 'INIT_CARD_MOD':
            return {
                title: action.title,
                description: action.desc,
                tasks: action.tasks
            };
        default:
            return state;
    }
}

export function initCardMod(title, desc, tasks) {
    return;
}

export default cardModReducer;