import * as actionTypes from "../actions/types"

const INITIAL_STATE = {
    currentMethod: [{
        id: "2",
            name: "Usability test",
            participants: 1,
            time: 30,
            phase: ["validate"],
            image: "usability_test_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"Usability testing is used by designers to discover opportunities and flaws of a certain design." +
             " Commonly, session are held with participants to test the prototype at hand. The participant is given tasks to complete" +
             " and the designer, in this case with the role of a 'moderator', observes the participant and listens to feedback." + 
             " Other than learning about the good and bad aspects of the prototype, it is an opportunity to learn more about the target user.",
            steps: ["Construct tasks that will bring you desired feeback and insight. What do you want to test?",
            "Recruit participants part of the target group",
            "Listen tentatively to the user while they perform the tasks. Ask questions you want answered",
            "After the tasks, if you have any general questions to ask, i.e about the experience, now is the time",
            "Summarise the feedback, both said and the behaviour documented"],
            stepsNbr:["1","2","3","4","5"],
            inPhase:[]
    }],
    methods: [
        {
            id: "2",
            name: "Usability test",
            participants: 1,
            time: 30,
            phase: ["validate"],
            image: "usability_test_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"Usability testing is used by designers to discover opportunities and flaws of a certain design." +
             " Commonly, session are held with participants to test the prototype at hand. The participant is given tasks to complete" +
             " and the designer, in this case with the role of a 'moderator', observes the participant and listens to feedback." + 
             " Other than learning about the good and bad aspects of the prototype, it is an opportunity to learn more about the target user.",
            steps: ["Construct tasks that will bring you desired feeback and insight. What do you want to test?",
            "Recruit participants part of the target group",
            "Listen tentatively to the user while they perform the tasks. Ask questions you want answered",
            "After the tasks, if you have any general questions to ask, i.e about the experience, now is the time",
            "Summarise the feedback, both said and the behaviour documented"],
            stepsNbr:["1","2","3","4","5"],
            inPhase:[]
        },

        {
            id: "3",
            name: "Digital prototype",
            participants: 0,
            time: 10,
            phase: ["prototype"],
            image: "digital_prototype_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"Digital prototyping can be used to visualise the target complete product before it is constructed. It is a cheaper, quicker alternative to physical prototyping, especially where the physical prototyping requires many components in a comprehensive project. Choosing right tools for this method is crucial in creating a desired prototype, as well as working off a common understand of how the interface/product should look.",
            steps: ["After agreeing on the look of the concept, decide what tools are appropriate for digital prototyping",
            "Distribute the work between the group of designers",
            "Regularly check up on the progress of each group member. It is important to share a common understanding of what the product should become"],
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
            description:"User personas are fictional characters that represent the users of your future product/service. They capture the needs, behaviour and preference of your target users, and are a product of the research you have made in the understand phase. By have user personas, you can define suitable requirements.",
            steps: ["Analyse the data you have collected in the previous phase. How many personas are needed to take everything into consideration?",
            "Create user personas based on the data. These will represent the different target groups of your concept",
            "Give the persona a name, age, occupation, goal and other information you feel is necessary"],
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
            description:"Heuristic evaluation is a method that aims to discover usability issues with an interface with the help of experts. Most commonly used for this type of evaluation are the heuristics of Jakob Nielsen. The strength of this method is that it can be used early on in the design process to discover usability flaws before they manifest in a complete product.",
            steps: ["Define what needs to be tested",
            "Recruit evaluators. 3-5 should be enough. Consider the expertise needed in  usability and within the specific domain",
            "Create heuristics or use already defined ones. We highly recommend Nielsen's heuristics",
            "Let the evaluators explore the interface before the evaluation",
            "Conduct the evaluation. Let the evaluator evaluate the interface and it's elements according to the heuristics. Document all the issues mentioned",
            "After the evaluation is done, debrief the evaluators to gather all the results and discuss improvements"],
            stepsNbr:["1","2","3","4","5","6"],
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
            description:"Dot voting is a decision-making and prioritisation method and can be used frequently and in many different situations. It can be utilised in situation where the team has to prioritise certain functionality or decide on what prototype to work on, and generally narrow down alternatives.",
            steps: ["Let the members of the team familirise with the alternatives ",
            "Give everyone the amount of voting dots deemed necessary",
            "Vote quietly",
            "Discuss the outcome. Participants are encourage to talk about how they voted",
            "Narrow down or eliminate alternatives"],
            stepsNbr:["1","2","3","4","5"],
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
            description:"Surveying the target group is a helpful process that provides with data on opinions, requirements, preferences, feedback etc. This can be done with data collection methods such as constructing a questionnaire. Surveys can be a source of both qualitative (open questions) and quantitative (scales, single-selection) data. However, it is important to not overload the participant with too many questions as they can easily choose to not complete it.",
            steps: ["Decide what you want to ask the participants",
            "Formulate appropriate questions depending on the type of feedback you seek",
            "Reach out to the target group with a data collection method (e.g. questionnaire), try to receive as many responses as possible",
            "Summarise and analyse the data. What are the takeaways?"],
            stepsNbr:["1","2","3","4"],
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
            description:"The 'How Might We' method encourages the design team to phrase design challenges as an opportunity for solution. Rather than just stating that a problem exists, this method allows the team to ask themselves how it can be solved.",
            steps: ["Identify pain points and challenges of the current design",
            "Rephrase these challenges into questions starting with 'How might we...'",
            "Gather the team together and discuss the notes. Which solutions stand out?"],
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
            description:"Mapping the user experience gives insight into the overall experience felt by the user from start to finish of trying accomplish a certain goal. It is used to understand the user's journey on a higher level and thereby their needs and pain points, and it is not dependant on an existing product or service for the experience to be understood. It differs from a user journey mapping in the sense that a journey map discovers the teams service or/and product.",
            steps: ["Create a user persona",
            "Define phases that the user has to pass through in order to complete their highest-level goal. This is typically used to understand how the user discovers the product/service all the way to actually buying it",
            "Define user interaction. What will be required of the user to do in order to reach their goals? For example, eating at a restaurant would require the user to check the menu, order food and pay for food",
            "Find participants to interact with the experience. Here you want to understand how their experience shifts throughout the different interactions. How are they feeling? What could be improved in the current process?",
            "Identify points of friction. Where do they occur? What is the issue?",
            "Resolve the points of friction"],
            stepsNbr:["1","2","3","4","5","6"],
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
            description:"User interviews is a UX method that can be conducted both in the understand phase, to gain insight into the target group and their requirements, but also in the validate phase, to receive feedback on the prototype or product/service. They are commonly conducted in one-on-one sessions, and an interview can be structured, semi-structured or unstructured.",
            steps: ["Decide on the goal of your interview. What do you want to gain from it? What type of interview is appropriate?",
            "Create an interview plan with questions",
            "Recruit participants from the target group",
            "Conduct the interview. The way your interview will flow depends on the structure of it",
            "Summarise the data gathered and analyse it. What are the takeaways?"],
            stepsNbr:["1","2","3","4","5"],
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
        },
        {
            id: "14",
            name: "The Golden Path",
            participants: 5,
            time: 30,
            phase: ["define"],
            image: "golden_path_img.svg",
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
            id: "15",
            name: "Establish Principles",
            participants: 5,
            time: 30,
            phase: ["define"],
            image: "establish_principles_img.svg",
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
            id: "16",
            name: "Measure Success",
            participants: 5,
            time: 30,
            phase: ["define"],
            image: "measure_success_img.svg",
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
            id: "17",
            name: "Mindmapping",
            participants: 5,
            time: 30,
            phase: ["understand","define"],
            image: "mind_mapping_img.svg",
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
            id: "18",
            name: "Solution Sketch",
            participants: 5,
            time: 30,
            phase: ["sketch"],
            image: "solution_sketch_img.svg",
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
                id: "19",
                name: "Decision Matrix",
                participants: 5,
                time: 30,
                phase: ["decide", "validate"],
                image: "decision_matrix_img.svg",
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
                id: "20",
                name: "SWOT Analysis",
                participants: 5,
                time: 30,
                phase: ["decide"],
                image: "swot_analysis_img.svg",
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
                id: "21",
                name: "Storyboard",
                participants: 5,
                time: 30,
                phase: ["prototype"],
                image: "storyboard_img.svg",
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
                id: "22",
                name: "Wizard of Oz",
                participants: 5,
                time: 30,
                phase: ["prototype"],
                image: "wizard_of_oz_img.svg",
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
                id: "23",
                name: "Boot-up Note Taking",
                participants: 5,
                time: 30,
                phase: ["sketch"],
                image: "boot_up_notetaking_img.svg",
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