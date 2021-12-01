
import * as actionTypes from "./types";

export const addToSprint = (itemID, itemPhase) => {
    return {
        type: actionTypes.ADD_TO_SPRINT,
        payload: {
            id: itemID,
            phase: itemPhase
        }
    }
}

export const removeFromSprint = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_SPRINT,
        payload: {
            id: itemID
        }
    }
}

export const adjustPhase = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_PHASE,
        payload: {
            id: itemID,
            ph: value
        }
    }
}

export const loadCurrentMethod = (item) => {
    return{ 
        type: actionTypes.LOAD_CURRENT_METHOD,
        payload: item,
    }
}


export const increment = () => {
    return{
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return{
        type: 'DECREMENT'

    }
}

export const payload = (nr) => {
    return{
        type: 'PAYLOAD',
        payload: nr
    }
}
