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
        stepsNbr:["1","2","3"],
        inPhase:[]
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
            currentPhase: "none",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal. In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, ultimately leading to a visualization.",
            steps: ["Start with the user’s first step or entry point into your product experience",
            "Add each step in the journey until the user’s goal has been reached",
            "Include descriptions for each step and highlight pain points along the journey"],
            stepsNbr:["1","2","3"],
            inPhase:[]
        },

        {
            id: "2",
            name: "Usability test",
            participants: 2,
            time: 30,
            phase: ["define", "validate"],
            image: "usability_test_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal. In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, ultimately leading to a visualization.",
            steps: ["Start with the user’s first step or entry point into your product experience",
            "Add each step in the journey until the user’s goal has been reached",
            "Include descriptions for each step and highlight pain points along the journey"],
            stepsNbr:["1","2","3"],
            inPhase:[]
        },

        {
            id: "3",
            name: "Digital prototype",
            participants: 2,
            time: 30,
            phase: ["prototype"],
            image: "digital_prototype_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal. In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, ultimately leading to a visualization.",
            steps: ["Start with the user’s first step or entry point into your product experience",
            "Add each step in the journey until the user’s goal has been reached",
            "Include descriptions for each step and highlight pain points along the journey"],
            stepsNbr:["1","2","3"],
            inPhase:[]
        },

        {
            id: "4",
            name: "User persona",
            participants: 1,
            time: 30,
            phase: ["define"],
            image: "user_persona_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal. In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, ultimately leading to a visualization.",
            steps: ["Start with the user’s first step or entry point into your product experience",
            "Add each step in the journey until the user’s goal has been reached",
            "Include descriptions for each step and highlight pain points along the journey"],
            stepsNbr:["1","2","3"],
            inPhase:[]
        },

        {
            id: "5",
            name: "Heuristic evaluation",
            participants: 1,
            time: 45,
            phase: ["validate"],
            image: "heuristic_evaluation_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal. In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, ultimately leading to a visualization.",
            steps: ["Start with the user’s first step or entry point into your product experience",
            "Add each step in the journey until the user’s goal has been reached",
            "Include descriptions for each step and highlight pain points along the journey"],
            stepsNbr:["1","2","3"],
            inPhase:[]
        },
        {
            id: "6",
            name: "Dot voting",
            participants: 1,
            time: 10,
            phase: ["decide"],
            image: "dot_voting_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal. In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, ultimately leading to a visualization.",
            steps: ["Start with the user’s first step or entry point into your product experience",
            "Add each step in the journey until the user’s goal has been reached",
            "Include descriptions for each step and highlight pain points along the journey"],
            stepsNbr:["1","2","3"],
            inPhase:[]
        },

        {
            id: "7",
            name: "Survey",
            participants: 1,
            time: 30,
            phase: ["understand","validate"],
            image: "survey_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal. In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, ultimately leading to a visualization.",
            steps: ["Start with the user’s first step or entry point into your product experience",
            "Add each step in the journey until the user’s goal has been reached",
            "Include descriptions for each step and highlight pain points along the journey"],
            stepsNbr:["1","2","3"],
            inPhase:[]
        },
        {
            id: "8",
            name: "How Might We",
            participants: 1,
            time: 20,
            phase: ["understand"],
            image: "how_might_we_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal." + 
            " In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline" +
            " is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, "+
            " ultimately leading to a visualization.",
            steps: [
            "Consider pain points and find a way to document them, preferably on notes. Instead of writing down the issue at hand, reframe it in terms of how you might tackle the problem (How Might We)",
            "Only One HMW for each note is advised",
            "This is early into the design sprint, and focus on quantity rather than quality is recommended"],
            stepsNbr:["1","2","3"],
            inPhase:[]
        },
        {
            id: "9",
            name: "Experience Mapping",
            participants: 2,
            time: 30,
            phase: ["understand"],
            image: "user_experience_mapping_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal." + 
            " In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline" +
            " is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, "+
            " ultimately leading to a visualization.",
            steps: [
            "Consider pain points and find a way to document them, preferably on notes. Instead of writing down the issue at hand, reframe it in terms of how you might tackle the problem (How Might We)",
            "Only One HMW for each note is advised",
            "This is early into the design sprint, and focus on quantity rather than quality is recommended"],
            stepsNbr:["1","2","3"],
            inPhase:[]
        },
        {
            id: "10",
            name: "User Interviews",
            participants: 2,
            time: 60,
            phase: ["understand","validate"],
            image: "user_interview_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal." + 
            " In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline" +
            " is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, "+
            " ultimately leading to a visualization.",
            steps: [
            "Consider pain points and find a way to document them, preferably on notes. Instead of writing down the issue at hand, reframe it in terms of how you might tackle the problem (How Might We)",
            "Only One HMW for each note is advised",
            "This is early into the design sprint, and focus on quantity rather than quality is recommended"],
            stepsNbr:["1","2","3"],
            inPhase:[]
        },
        {
            id: "11",
            name: "User Journey Mapping",
            participants: 4,
            time: 40,
            phase: ["understand"],
            image: "user_journey_mapping_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal." + 
            " In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline" +
            " is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, "+
            " ultimately leading to a visualization.",
            steps: [
            "Consider pain points and find a way to document them, preferably on notes. Instead of writing down the issue at hand, reframe it in terms of how you might tackle the problem (How Might We)",
            "Only One HMW for each note is advised",
            "This is early into the design sprint, and focus on quantity rather than quality is recommended"],
            stepsNbr:["1","2","3"],
            inPhase:[]
        },
        {
            id: "12",
            name: "Cognitive Walkthrough",
            participants: 2,
            time: 30,
            phase: ["validate"],
            image: "cognitive_walkthrough_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal." + 
            " In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline" +
            " is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, "+
            " ultimately leading to a visualization.",
            steps: [
            "Consider pain points and find a way to document them, preferably on notes. Instead of writing down the issue at hand, reframe it in terms of how you might tackle the problem (How Might We)",
            "Only One HMW for each note is advised",
            "This is early into the design sprint, and focus on quantity rather than quality is recommended"],
            stepsNbr:["1","2","3"],
            inPhase:[]
        },
        {
            id: "13",
            name: "Crazy 8's",
            participants: 5,
            time: 30,
            phase: ["sketch"],
            image: "crazy_8_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal." + 
            " In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline" +
            " is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, "+
            " ultimately leading to a visualization.",
            steps: [
            "Consider pain points and find a way to document them, preferably on notes. Instead of writing down the issue at hand, reframe it in terms of how you might tackle the problem (How Might We)",
            "Only One HMW for each note is advised",
            "This is early into the design sprint, and focus on quantity rather than quality is recommended"],
            stepsNbr:["1","2","3"],
            inPhase:[]
        }
    ], //id, title, de scr, price, img
        suggestedMethods:[],
        currentSprintMethods: [], //id, title, descr, price, img, qty
};

const methodReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_SPRINT:
            //Get the items data from the methods array
            //Check if the item is in the sprint already
            // const inSprint = state.sprint.find((method) => method.id === action.payload.id ? true : false)
            const methodToBeCheck = state.methods.find((meth) => meth.id === action.payload.id);
            methodToBeCheck.inPhase = methodToBeCheck.inPhase.filter((phase) => phase === action.payload.phase);
            //console.log(methodToBeCheck);

            /*methodToBeCheck.inPhase.push(action.payload.phase);*/
            return {
                // ...state,
                // cart: inSprint ? state.sprint.map(meth => 
                //     meth.id === action.payload
                //     ? { ...method, } )


                
                ...state,
                currentSprintMethods: [...state.currentSprintMethods , {...methodToBeCheck}]

            }
        case actionTypes.REMOVE_FROM_SPRINT:
            const phaseMethod = state.currentSprintMethods.find((meth) => meth.id === action.payload.id 
            && meth.inPhase.indexOf(action.payload.phase) >-1);
            const thePhases = phaseMethod.inPhase;

            return {
                ...state, 
                currentSprintMethods: state.currentSprintMethods.filter((meth) => meth !==phaseMethod)
            };

            case actionTypes.SHOW_CURRENT_METHOD:
            const methoda = state.methods.find((meth) => meth.id === action.payload.id);
            return{
                ...state,
                currentMethod: [{...methoda}]
            }

            case actionTypes.SUGGEST_METHODS:
                var theMethods = state.methods.filter((meth) => (meth.phase.includes(action.payload.phase)));
                const random1 = Math.floor(Math.random() * theMethods.length);
                const firstMethod = theMethods[random1];
                theMethods = theMethods.filter((meth) => meth.id !== firstMethod.id);
                const random2 = Math.floor(Math.random() * theMethods.length);
                const secondMethod = theMethods[random2];
                theMethods = theMethods.filter((meth) => meth.id !== secondMethod.id);
                const random3 = Math.floor(Math.random() * theMethods.length);
                const randomisedMethods = [firstMethod, secondMethod, theMethods[random3]];
            return {
                ...state,
                suggestedMethods: randomisedMethods
            };

        case actionTypes.ADJUST_PHASE:
            const fazer = state.methods.find( (meth) => meth.id === action.payload.id);
            fazer.inPhase = [...fazer.inPhase, action.payload.phase];

            return {
                
                ...state,
                methods: state.methods.map((meth) => 
                    meth.id === action.payload.id 
                    ? fazer: meth)
            }

        case actionTypes.REMOVE_PHASE_FROM_METHOD:
            return{
                ...state,
                methods: state.methods.map(meth =>
                    meth.id === action.payload.id 
                    ?{...meth, inPhase: meth.inPhase.filter((phase) => phase !== action.payload.phase)} : meth)
            }
        case actionTypes.LOAD_CURRENT_METHOD:
            return {
                ...state,
                methods: action.payload,
            }
        default: 
            return state;
    }
};

export default methodReducer;