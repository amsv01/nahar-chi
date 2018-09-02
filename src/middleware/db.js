import { ADD_MEAL, REMOVE_MEAL } from '../modules/meals';

const NAHAR_CHI = 'ask-nahar-chi';

// Todo temporary persistent data
const db = store => {

    if(localStorage.getItem(NAHAR_CHI)){
        console.log(JSON.parse(localStorage.getItem(NAHAR_CHI)));
    }

    return next => action => {
        next(action);
        if (action.type === ADD_MEAL || action.type === REMOVE_MEAL) {
            localStorage.setItem(NAHAR_CHI, JSON.stringify(store.getState().meals));
        }
    };
};

export default db;