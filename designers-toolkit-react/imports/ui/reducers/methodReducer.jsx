import * as actionTypes from "../actions/types"

const INITIAL_STATE = {
    methods: [
        {
            id: "1",
            name: "Journey Map",
            participants: 1,
            time: 60,
            phase: ["define", "understand"],
            image: "journey_map_img.svg",
            inSprint: false,
            currentPhase: "none"
        },

        {
            id: "2",
            name: "Usability test",
            participants: 2,
            time: 30,
            phase: ["define", "prototype"],
            image: "usability_test_img.svg",
            inSprint: false,
            currentPhase: "none"
        },

        {
            id: "3",
            name: "Digital prototype",
            participants: 2,
            time: 30,
            phase: ["prototype"],
            image: "digital_prototype_img.svg",
            inSprint: false,
            currentPhase: "none"
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
            state.methods.find((meth) => meth.id === action.payload.id);
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
                cart: state.currentSprintMethods.filter(item => item.id !== action.payload.id)
            };
        case actionTypes.ADJUST_PHASE:
            return {
                ...state,
                methods: state.methods.map(item => 
                    item.id === action.payload.id 
                    ? {...item, currentPhase: action.payload.ph} : item)
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