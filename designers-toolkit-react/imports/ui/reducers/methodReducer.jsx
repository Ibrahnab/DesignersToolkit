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
    methodDescriptions:[
        {
            id: "1",
            name: "Journey Map",
            participants: 1,
            time: 60,
            phase: ["define", "understand"],
            image: "journey_map_img.svg",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal. In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, ultimately leading to a visualization.",
            steps: ["Start with the user’s first step or entry point into your product experience",
            "Add each step in the journey until the user’s goal has been reached",
            "Include descriptions for each step and highlight pain points along the journey"],
            stepsNbr:["1","2","3"]
        },
        {
            id: "3",
            name: "Digital Prototyping",
            participants: 2,
            time: 30,
            phase: ["prototype"],
            image: "prototype_img_big.svg",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal. In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, ultimately leading to a visualization.",
            steps: ["Start with the user’s first step or entry point into your product experience",
            "Add each step in the journey until the user’s goal has been reached",
            "Include descriptions for each step and highlight pain points along the journey"],
            stepsNbr:["1","2","3"]
        }
        ],
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
                methodDescriptions: action.payload,
            };
        default: 
            return state;
    }
};

export default methodReducer;