import * as actionTypes from "../actions/types"

const INITIAL_STATE = {
    methods: [], //id, title, descr, price, img
    currentSprintMethods: [], //id, title, descr, price, img, qty
    currentMethod: null
};

const methodReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_SPRINT:
            return {

            }
        case actionTypes.REMOVE_FROM_SPRINT:
            return {

            }
        case actionTypes.ADJUST_PHASE:
            return {

            }
        case actionTypes.LOAD_CURRENT_METHOD:
            return {

            }
        default: 
            return state;
    }
};

export default methodReducer;