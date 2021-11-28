import * as actionTypes from "../actions/types"

const INITIAL_STATE = {
    methods: [
        {
            id: "1",
            name: "Journey Map",
            participants: 1,
            time: 60,
            phase: ["define", "understand"],
            image: "journey_map_img.svg"
        },

        {
            id: "2",
            name: "Usability test",
            participants: 2,
            time: 30,
            phase: ["define", "prototype"],
            image: "usability_test_img.svg"
        },

        {
            id: "3",
            name: "Digital prototype",
            participants: 2,
            time: 30,
            phase: ["prototype"],
            image: "digital_prototype_img.svg"
        }
    ], //id, title, de scr, price, img
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