import * as actionTypes from "../actions/types"

const INITIAL_STATE = {
    isHamburgerOpen: false,
    viewingMethod: false,
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
            inPhase:[],
            participantRange: "1",
            timeRange: "30-60m",
        },

        {
            id: "3",
            name: "Digital prototype",
            participants: 0,
            time: 100,
            phase: ["prototype"],
            image: "digital_prototype_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"Digital prototyping can be used to visualise the target complete product before it is constructed. It is a cheaper, quicker alternative to physical prototyping, especially where the physical prototyping requires many components in a comprehensive project. Choosing right tools for this method is crucial in creating a desired prototype, as well as working off a common understand of how the interface/product should look.",
            steps: ["After agreeing on the look of the concept, decide what tools are appropriate for digital prototyping",
            "Distribute the work between the group of designers",
            "Regularly check up on the progress of each group member. It is important to share a common understanding of what the product should become"],
            stepsNbr:["1","2","3"],
            inPhase:[],
            participantRange: "0",
            timeRange: "1-3d",
        },

        {
            id: "4",
            name: "User persona",
            participants: 0,
            time: 60,
            phase: ["define"],
            image: "user_persona_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"User personas are fictional characters that represent the users of your future product/service. They capture the needs, behaviour and preference of your target users, and are a product of the research you have made in the understand phase. By have user personas, you can define suitable requirements.",
            steps: ["Analyse the data you have collected in the previous phase. How many personas are needed to take everything into consideration?",
            "Create user personas based on the data. These will represent the different target groups of your concept",
            "Give the persona a name, age, occupation, goal and other information you feel is necessary"],
            stepsNbr:["1","2","3"],
            inPhase:[],
            participantRange: "0",
            timeRange: "60-90m",
        },

        {
            id: "5",
            name: "Heuristic evaluation",
            participants: 1,
            time: 60,
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
            inPhase:[],
            participantRange: "1",
            timeRange: "1-2h",
        },
        {
            id: "6",
            name: "Dot voting",
            participants: 0,
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
            inPhase:[],
            participantRange: "0",
            timeRange: "10m",
        },

        {
            id: "7",
            name: "Survey",
            participants: 5,
            time: 120,
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
            inPhase:[],
            participantRange: "5+",
            timeRange: "2-3h",
        },
        {
            id: "8",
            name: "How Might We",
            participants: 0,
            time: 15,
            phase: ["understand"],
            image: "how_might_we_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"The 'How Might We' method encourages the design team to phrase design challenges as an opportunity for solution. Rather than just stating that a problem exists, this method allows the team to ask themselves how it can be solved.",
            steps: ["Identify pain points and challenges of the current design",
            "Rephrase these challenges into questions starting with 'How might we...'",
            "Gather the team together and discuss the notes. Which solutions stand out?"],
            stepsNbr:["1","2","3"],
            inPhase:[],
            participantRange: "0",
            timeRange: "15-30m",
        },
        {
            id: "9",
            name: "Experience Mapping",
            participants: 1,
            time: 120,
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
            inPhase:[],
            participantRange: "1+",
            timeRange: "2-5h",
        },
        {
            id: "10",
            name: "User Interviews",
            participants: 1,
            time: 45,
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
            inPhase:[],
            participantRange: "1",
            timeRange: "45-90m",
        },
        {
            id: "11",
            name: "User Journey Mapping",
            participants: 0,
            time: 30,
            phase: ["understand"],
            image: "user_journey_mapping_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"A journey map is a visualization of the process that a person goes through in order to accomplish a goal." + 
            " In its most basic form, journey mapping starts by compiling a series of user actions into a timeline. Next, the timeline" +
            " is fleshed out with user thoughts and emotions in order to create a narrative. This narrative is condensed and polished, "+
            " ultimately leading to a visualization.",
            steps: [
            "Start with the users entry point to your application and note down the experience",
            "Keep adding the subsequent steps for the user until the goal is reached",
            "Write down the pain points for each step in the journey"],
            stepsNbr:["1","2","3"],
            inPhase:[],
            participantRange: "0",
            timeRange: "30-50m",
        },
        {
            id: "12",
            name: "Cognitive Walkthrough",
            participants: 1,
            time: 30,
            phase: ["validate"],
            image: "cognitive_walkthrough_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"A cognitive walkthrough is used to test the usability of a product. This is done" + 
            " by involving a user who is asked to carry out tasks in the product. The conductor of the" +
            " cognitive walkthrough will provide tasks and observe the user as they try to complete the tasks. "+
            " This gives valueable insights on how the product might be improved further. There are two questions to consider in cognitive walkthroughs which are: " +
            " 'Will the user know what to do at this step' and 'If the user did the right thing, will they know that they did the right thing and are they making progress towards their goal' ",
            steps: [
            "Write down the tasks you want the user to perform in your application",
            "Create an ideal path (Golden path) which is the optimal path for the user to reach their goal in the task",
            "Invite participants to test the product as users. As the moderator, you should ask the one question before, during and after each task. "],
            stepsNbr:["1","2","3"],
            inPhase:[],
            participantRange: "1",
            timeRange: "30-40m",
        },
        {
            id: "13",
            name: "Crazy 8's",
            participants: 0,
            time: 10,
            phase: ["sketch"],
            image: "crazy_8_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"Crazy 8 is a rapid ideation method. It is used to brainstorm ideas under time pressure. The ideas are not supposed to be fully reasonable or well thought out. " + 
            " The main reason behind the time pressure is to get the ball rolling and letting out the craziest ideas. These ideas are drawn on a piece of paper with small notes",
            steps: [
            "Take a sheet of paper and fold it four times. When you open it up, you should have a paper that's split in 8 rectangles",
            "Set a timer for 8 minutes",
            "For each rectangle, you're going to ideate something by drawing your ideas or writing quick notes on it. This gives you one minute for each idea! So don't think too much about one idea!",
            "When the time is up, no more writing/drawing is allowed"],
            stepsNbr:["1","2","3","4"],
            inPhase:[],
            participantRange: "0",
            timeRange: "10m",
        },
        {
            id: "14",
            name: "The Golden Path",
            participants: 0,
            time: 30,
            phase: ["define"],
            image: "golden_path_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"The golden path is used to describe the ideal, non-erroneous path the user takes while using your product or service to fulfill their goal. For example when searching for flight tickets on a website, the golden path would be something like: search for ticket, view ticket details, buy tickets and recieve tickets. The finer details of each step should not be of focus in this method. Being aware of the optimal path will guide the designers in their work.",
            steps: ["Write down the high-level steps necessary for the user to take in order to reach their goal",
            "structure them into a linear path. If you wish, you can note down other lower-level steps  onto the path where they occur"],
            stepsNbr:["1","2","3"],
            inPhase:[],
            participantRange: "0",
            timeRange: "30m",
        },
        {
            id: "15",
            name: "Establish Principles",
            participants: 0,
            time: 120,
            phase: ["define"],
            image: "establish_principles_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"Defining a set of principles agreed by the team can create a common understanding of what the project values and what the intended outcome is to be.  It can also be used to establish ethical values and accepted behaviour within the team. There are a  varienty of  techniques for doing this, and we encourage you to explore the web. Here we suggest the team to document a team agreement and to define a brand identity.",
            steps: ["Document a team agreement. The team agreement should describe topics such as aspirations, contact information, goal of the project, individual roles,  etc",
            "Define a brand identity. The brand identity is how you want to appear to the public eye and more specifically the user. It is dictated by choice of colour, layout, logo, name and communication"],
            stepsNbr:["1","2","3"],
            inPhase:[],
            participantRange: "0",
            timeRange: "2-3h",
        },
        {
            id: "16",
            name: "Measure Success",
            participants: 0,
            time: 30,
            phase: ["define"],
            image: "measure_success_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"By measuring the success, the design team can better understand what to strive for and when a goal is achieved. Different types of success can be measure. Does the user display the behaviour that is desirable? Does the quantifiable data conform with the expectations?",
            steps: ["Consider what the main goal of your concept is",
            "Consider what type of user behaviour indicates the achievement of your goal",
            "Consider how that behaviour can be measured quantifiably. You will have a clearly defined success metric once these three steps are defined"],
            stepsNbr:["1","2","3"],
            inPhase:[],
            participantRange: "0",
            timeRange: "30m",
        },
        {
            id: "17",
            name: "Mindmapping",
            participants: 0,
            time: 60,
            phase: ["understand","define"],
            image: "mind_mapping_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"A mindmap can be used for organising information in a heirarchical manner. Relationships between pieces is mapped to the source concept. Pieces close to the starting concept are significant ideas, while pieces at the edges of the mind map are  increasingly branched and specific.",
            steps: ["Start with defining your core concept. Place it at the center of your paper (digital or physical)",
            "Note down and connect ideas that are related to the core concept",
            "Branch out from each of the ideas. Do this iteratively for each idea until you are satisfied"],
            stepsNbr:["1","2","3"],
            inPhase:[],
            participantRange: "0",
            timeRange: "60m",
        },
        {
            id: "18",
            name: "Solution Sketch",
            participants: 0,
            time: 60,
            phase: ["sketch"],
            image: "solution_sketch_img.svg",
            inSprint: false,
            currentPhase: "none",
            description:"Solution sketching allows designers to elaborate on already existing ideas and detail them further. This is a method suitable to use after a session of Crazy 8's where each team member individual fleshes out an idea that they liked. It can also be done by the whole team as a unit.",
            steps: ["Pick an idea from existing sketches and notes that you like",
            "Continue sketching on this idea with more detail and by adding additional description, frames and images",
            "Discuss the outcome with your team. What is missing? Is the current information enough to move on to the next phase?"],
            stepsNbr:["1","2","3"],
            inPhase:[],
            participantRange: "0",
            timeRange: "60m",
        },
            {
                id: "19",
                name: "Decision Matrix",
                participants: 0,
                time: 30,
                phase: ["decide", "validate"],
                image: "decision_matrix_img.svg",
                inSprint: false,
                currentPhase: "none",
                description:"A decision matrix can aid designers in narrowing down options by letting test participants rate alternatives based on specific criteria. It can also be done by the designers themselves, which reduces required time and resources. The criteria are rated internally by the designers based on their importance to the project (weight). This will result in alternatives being numerically valued based on evaluation.",
                steps: ["Define criteria important to you",
                "Create a matrix where each row represents an alternative and each column a criterion",
                "Evaluate the alternatives based on the matrix, or let target users do it if you decided to include them. Depending on how many alternatives, it might be necessary to change participants for each alternative",
                "Rate the alternatives based on the criterion (set your own score interval)",
                "Discuss the outcome. Is there a clear winner?"],
                stepsNbr:["1","2","3"],
                inPhase:[],
                participantRange: "0+",
                timeRange: "30-60m",
            },
            {
                id: "20",
                name: "SWOT Analysis",
                participants: 0,
                time: 15,
                phase: ["decide"],
                image: "swot_analysis_img.svg",
                inSprint: false,
                currentPhase: "none",
                description:"SWOT analysis is a method for strategic planning that helps to identify the good and bad of an individual, organisation, team, etc. By using this method, one can track strengths and weaknesses (internal origin), and opportunities and threats (external origin). It is quite evident that weaknesses and threats are harmful for the intended endeavor, while strengths and opportunities are helpful. It is commonly used to assess business competition and plan projects.",
                steps: ["Document your strengths. These can be the individual strengths of each team members and the strengths that appear when you work together",
                "Document your weaknesses. These can be the individual weaknesses of each team members and the weaknesses that appear when you work together",
                "Document the opportunities. These are external factors, such as high demand",
                "Document the threats. These too are external, such as tough competition or high production cost due to resource scarcity"],
                stepsNbr:["1","2","3"],
                inPhase:[],
                participantRange: "0",
                timeRange: "15-30m",
            },
            {
                id: "21",
                name: "Storyboard",
                participants: 0,
                time: 60,
                phase: ["prototype"],
                image: "storyboard_img.svg",
                inSprint: false,
                currentPhase: "none",
                description:"A storyboard is a step-by-step illustration of the experience you want to convey. It is a powerful method for telling a story of how a product or service is to be used, from start to finish, or how a user finds it. Storyboarding is quick and one can iteratively improve it until it is ready for display for stakeholders.",
                steps: ["Decide what you will convey",
                "Start mapping out the frames. Collaborate with your team. A common method is to create rectangle-shaped frames that display a part of the story",
                "Focus on the message rather than the looks",
                "Once you feel you are finished, revise it as a team"],
                stepsNbr:["1","2","3"],
                inPhase:[],
                participantRange: "0",
                timeRange: "60m",
            },
            {
                id: "22",
                name: "Wizard of Oz",
                participants: 1,
                time: 10,
                phase: ["prototype"],
                image: "wizard_of_oz_img.svg",
                inSprint: false,
                currentPhase: "none",
                description:"The Wizard of Oz is a UX technique for testing features and details that are not yet implemented in a product or service. Generally, a participant tests a prototype under the guidance of a moderator while members of the team simulate the responses of the prototype. This is often used to test the likability and desire of a function that does not exist yet. It can be especially useful for a feature that is time-consuming to implement.",
                steps: ["What feature do you intend to simulate? Do so the best way possible",
                "Include the technique in one of your planned testing sessions",
                "Conduct the testing. Remember to aim for an authentic experience for the user. If it is possible to make the feature appear real, then do so",
                "Gather feedback on the feature. After all, that is the purpose of this technique. Ask questions during and after the testing"],
                stepsNbr:["1","2","3"],
                inPhase:[],
                participantRange: "1",
                timeRange: "10-20m",
            },
            {
                id: "23",
                name: "Boot-up Note Taking",
                participants: 0,
                time: 10,
                phase: ["sketch"],
                image: "boot_up_notetaking_img.svg",
                inSprint: false,
                currentPhase: "none",
                description:"Boot-up notetaking is a method popularised by Google's own Design Sprint and is commonly used after the define phase and is used as preparation for sketching ideas. The goal is to gather all that has been researched and discussed in the previous phases into notes that will serve as inspiration for sketching.",
                steps: ["Review all that has been discussed in the previous phases. What are the goals and problems?",
                "Note down ideas you would like to prototype based on the previous point"],
                stepsNbr:["1","2","3"],
                inPhase:[],
                participantRange: "0",
                timeRange: "10m",
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

        case actionTypes.FLIP_VIEWING_METHOD:
            return {
                ...state,
                viewingMethod: !state.viewingMethod
            }
        case actionTypes.FLIP_HAMBURGER:
            return {
                ...state,
                isHamburgerOpen: !state.isHamburgerOpen
            }
        default: 
            return state;
    }
};

export default methodReducer;