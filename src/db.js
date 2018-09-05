const NAHAR_CHI = 'ask-nahar-chi';

export const load = () => {
    try{
        const serializedState = localStorage.getItem(NAHAR_CHI);
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch(e) {
        return undefined;
    }
}

export const save = state => {
    try {
        localStorage.setItem(NAHAR_CHI, JSON.stringify(state));
    } catch(e) {
        console.error('State not saved!');
    }
}