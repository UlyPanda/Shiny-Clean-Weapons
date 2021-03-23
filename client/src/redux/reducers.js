import { combineReducers } from 'redux';

const weapons = (state = [], action) => {
    switch(action.type) {
        case "GET_WEAPONS":
            return action.value
        case "GET_WEAPON":
            return action.value
        default: 
            return state;
    }
}

const users = (state = [], action) => {
    switch(action.type) {
        case "SIGN_UP":
            return action.value
        case "LOG_IN":
            return action.value
        default:
            return state
    }
};

export default combineReducers({ users, weapons });