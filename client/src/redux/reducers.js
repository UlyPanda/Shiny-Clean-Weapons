import { combineReducers } from 'redux';

const weapons = (state = [], action) => {
    switch (action.type) {
        case "GET_WEAPONS":
            return action.value;
        case "GET_WEAPON":
            return action.value;
        default: 
            return state;
    }
}

const users = (state = [], action) => {
    switch (action.type) {
        case "SIGN_UP":
            return action.value;
        default:
            return state;
    }
}

const loggedIn = (state = false, action) => {
    switch(action.type) {
        case "LOG_IN":
            return true;
        case "LOG_OUT":
            return false;
        default:
            return state;
    }
}

export default combineReducers({ users, loggedIn, weapons });