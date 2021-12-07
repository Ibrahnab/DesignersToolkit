import * as actionTypes from "../actions/types"

const INITIAL_STATE = {
    currentMethod: [{
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
    }],
    methods: [
        {
            id: "1",
            name: "Journey Map",
            participants: 1,
            time: 60,
            phase: ["understand"],
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
        },

        {
            id: "4",
            name: "User persona",
            participants: 1,
            time: 30,
            phase: ["define"],
            image: "user_persona_img.svg",
            inSprint: false,
            currentPhase: "none"
        },

        {
            id: "5",
            name: "Heuristic evaluation",
            participants: 1,
            time: 45,
            phase: ["validate", "sketch"],
            image: "heuristic_evaluation_img.svg",
            inSprint: false,
            currentPhase: "none"
        },
        {
            id: "6",
            name: "Dot voting",
            participants: 1,
            time: 10,
            phase: ["decide"],
            image: "dot_voting_img.svg",
            inSprint: false,
            currentPhase: "none"
        },

        {
            id: "7",
            name: "Survey",
            participants: 1,
            time: 30,
            phase: ["validate"],
            image: "survey_img.svg",
            inSprint: false,
            currentPhase: "none"
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
            id: "2",
            name: "Usability Test",
            participants: 2,
            time: 30,
            phase: ["define", "prototype"],
            image: "usability_test_img.svg",
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
            image: "digital_prototype_img.svg",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal. In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, ultimately leading to a visualization.",
            steps: ["Start with the user’s first step or entry point into your product experience",
            "Add each step in the journey until the user’s goal has been reached",
            "Include descriptions for each step and highlight pain points along the journey"],
            stepsNbr:["1","2","3"]
        },
        {
            id: "4",
            name: "User Persona",
            participants: 1,
            time: 30,
            phase: ["define"],
            image: "user_persona_img.svg",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal. In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, ultimately leading to a visualization.",
            steps: ["Start with the user’s first step or entry point into your product experience",
            "Add each step in the journey until the user’s goal has been reached",
            "Include descriptions for each step and highlight pain points along the journey"],
            stepsNbr:["1","2","3"]
        },
        {
            id: "5",
            name: "Heuristic evaluation",
            participants: 1,
            time: 45,
            phase: ["validate", "sketch"],
            image: "heuristic_evaluation_img.svg",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal. In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, ultimately leading to a visualization.",
            steps: ["Start with the user’s first step or entry point into your product experience",
            "Add each step in the journey until the user’s goal has been reached",
            "Include descriptions for each step and highlight pain points along the journey"],
            stepsNbr:["1","2","3"]
        },
        {
            id: "6",
            name: "Dot voting",
            participants: 1,
            time: 10,
            phase: ["decide"],
            image: "dot_voting_img.svg",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal. In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, ultimately leading to a visualization.",
            steps: ["Start with the user’s first step or entry point into your product experience",
            "Add each step in the journey until the user’s goal has been reached",
            "Include descriptions for each step and highlight pain points along the journey"],
            stepsNbr:["1","2","3"]
        },
        {
            id: "7",
            name: "Survey",
            participants: 1,
            time: 30,
            phase: ["validate"],
            image: "survey_img.svg",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal. In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, ultimately leading to a visualization.",
            steps: ["Start with the user’s first step or entry point into your product experience",
            "Add each step in the journey until the user’s goal has been reached",
            "Include descriptions for each step and highlight pain points along the journey"],
            stepsNbr:["1","2","3"]
        }],
        suggestedMethods:[{
            id: "7",
            name: "Survey",
            participants: 1,
            time: 30,
            phase: ["validate"],
            image: "survey_img.svg",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal. In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, ultimately leading to a visualization.",
            steps: ["Start with the user’s first step or entry point into your product experience",
            "Add each step in the journey until the user’s goal has been reached",
            "Include descriptions for each step and highlight pain points along the journey"],
            stepsNbr:["1","2","3"]
        }],
        currentSprintMethods: [], //id, title, descr, price, img, qty
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
                currentSprintMethods: state.currentSprintMethods.filter(item => item.id !== action.payload.id)
            };

            case actionTypes.SHOW_CURRENT_METHOD:
            const methoda = state.methodDescriptions.find((meth) => meth.id === action.payload.id);
            return{
                ...state,
                currentMethod: [{...methoda}]
            }

            case actionTypes.SUGGEST_METHODS:
                const daMethods = state.methods.find((meth) => (meth.phase.includes(action.payload.phase))
                )
                console.log(daMethods);

            return {
                ...state,
                suggestedMethods: state.methods.filter((meth) => (meth.phase.includes(action.payload.phase))
                ),
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
                methodDescriptions: action.payload,
            }
        default: 
            return state;
    }
};

export default methodReducer;