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
            //Get the items data from the methods array
            const method = state.methods.find((meth) => meth.id === action.payload.id);
            //Check if the item is in the sprint already
            // const inSprint = state.sprint.find((method) => method.id === action.payload.id ? true : false)
            return {
                // ...state,
                // cart: inSprint ? state.sprint.map(meth => 
                //     meth.id === action.payload
                //     ? { ...method, } )
                ...state,
                currentSprintMethods: [...state.currentSprintMethods , {...method}]
            }
        case actionTypes.REMOVE_FROM_SPRINT:
            return {
                ...state, 
                cart: state.sprint.filter(item => item.id !== action.payload.id)
            };
        case actionTypes.ADJUST_PHASE:
            return {
                ...state,
                sprint: state.sprint.map(item => 
                    item.id === action.payload.id 
                    ? {...item, phase: action.payload.ph} : item)
            }
        case actionTypes.LOAD_CURRENT_METHOD:
            return {
                ...state,
                currentMethod: action.payload,
            };
        default: 
            return state;
    }
};

export default methodReducer;