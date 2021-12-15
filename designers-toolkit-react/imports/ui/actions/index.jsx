
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

export const showCurrentMethod = (itemID) =>{
    return{
        type: actionTypes.SHOW_CURRENT_METHOD,
        payload:{
            id:itemID
        }
    }
}

export const removeFromSprint = (itemID, itemPhase) => {
    return {
        type: actionTypes.REMOVE_FROM_SPRINT,
        payload: {
            phase: itemPhase,
            id: itemID
        }
    }
}

export const adjustPhase = (itemID, itemPhase) => {
    return {
        type: actionTypes.ADJUST_PHASE,
        payload: {
            id: itemID,
            phase: itemPhase
        }
    }
}

export const removePhaseFromMethod = (itemID, itemPhase) =>{
    return {
        type: actionTypes.REMOVE_PHASE_FROM_METHOD,
        payload: {
            id: itemID,
            phase: itemPhase
        }
    }
}

export const loadCurrentMethod = (item) => {
    return{ 
        type: actionTypes.LOAD_CURRENT_METHOD,
        payload: item,
    }
}

export const suggestMethods = (thePhase) =>{
    return {
        type: actionTypes.SUGGEST_METHODS,
        payload: {
            phase: thePhase
        }
    }
}

export const flipViewingMethod = () => {
    return {
        type: actionTypes.FLIP_VIEWING_METHOD,
    }
}

export const flipHamburger = () => {
    return {
        type: actionTypes.FLIP_HAMBURGER,
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
