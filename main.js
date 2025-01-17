let jsPsych = initJsPsych({
});


// capture info from Prolific
const subject_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
const study_id = jsPsych.data.getURLVariable('STUDY_ID');
const session_id = jsPsych.data.getURLVariable('SESSION_ID');

// I liked RandomError too :-)
class SprRandomizationError extends Error {
    constructor(message) {
        super(message);
        this.name = SprRandomizationError;
    }
}

const KEY_CODE_SPACE = ' ';
const G_QUESTION_CHOICES = [FALSE_BUTTON_TEXT, TRUE_BUTTON_TEXT];

let browser_check1 = {
    type: jsPsychBrowserCheck,
    inclusion_function: (data) => {
	return data.mobile === false
    },
    exclusion_message: (data) => {
	return '<p>You must use a desktop/laptop computer to participate in this experiment.</p>';
    },
    features: ["mobile"]
};

let browser_check2 = {
    type: jsPsychBrowserCheck,
    minimum_width: 1000,
    minimum_height: 600,
    features: ["width","height","browser","browser_version","os","fullscreen"]
};

let welcome_screen = {
    type : jsPsychHtmlKeyboardResponse,
    stimulus : WELCOME_INSTRUCTION,
    choices : [KEY_CODE_SPACE],
    response_ends_trial : true,
    on_finish: function (data) {
        data.rt = Math.round(data.rt);
    }
};

let instruction_screen_practice = {
    type : jsPsychHtmlKeyboardResponse,
    stimulus : PRE_PRACTICE_INSTRUCTION,
    choices : [KEY_CODE_SPACE],
    response_ends_trial : true,
    on_finish: function (data) {
        data.rt = Math.round(data.rt);
    }
};

let fixcross = {
    type : sprMovingWindow,
    stimulus : '+',
    choices : FIX_CHOICES,
    font_family : "Times New Roman",
    font_size : 36,
    width : MIN_WIDTH,
    height : MIN_HEIGHT,
    trial_duration : FIX_DUR,
    data : {
        id : jsPsych.timelineVariable('id'),
        item_type : 'FIX_CROSS',
        uil_save : false
    }
};

let present_text = {
    type : sprMovingWindow,
    stimulus : jsPsych.timelineVariable('stimulus'),
    background_color : "rgb(230, 230, 230)", // light gray
    font_color : "rgb(0, 0, 0)", // black
    font_family : "Times New Roman",
    font_size : 36,
    width : MIN_WIDTH,
    height : MIN_HEIGHT,
    post_trial_gap : ISI,
    grouping_string : GROUPING_STRING,
    data : {
        id : jsPsych.timelineVariable('id'),
        item_type : jsPsych.timelineVariable('item_type'),
        uil_save : true
    }
}

let question = {
    type : jsPsychHtmlButtonResponse,
    stimulus : jsPsych.timelineVariable('question'),
    choices : G_QUESTION_CHOICES,
    data : {
        id : jsPsych.timelineVariable('id'),
        item_type : ()  => 'Q' + jsPsych.timelineVariable('item_type'),
        expected_answer : jsPsych.timelineVariable('qanswer'),
        uil_save : true
    },
    on_finish: function (data) {
        let choice = G_QUESTION_CHOICES[data.response];
        data.answer = choice;
        data.correct = choice === data.expected_answer;
        data.integer_correct = data.correct ? 1 : 0;
        data.rt = Math.round(data.rt);
    }
};

let maybe_question = {
    timeline: [ question ],
    conditional_function: function() {
        let q = jsPsych.timelineVariable('question');
        return typeof(q) !== 'undefined' && q.length > 0;
    }
};

let end_practice_screen = {
    type : jsPsychHtmlKeyboardResponse,
    stimulus : PRE_TEST_INSTRUCTION,
    choices : [KEY_CODE_SPACE],
    response_ends_trial : true,
    on_finish: function (data) {
        data.rt = Math.round(data.rt);
    }
};

// function to save data (works in conjunction with write_data.php)
// pasted in by MC (definitely a downgrade, but should work)
function saveData(name, data){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'write_data.php'); // 'write_data.php' is the
					// path to the php file
					// described above.
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: name, filedata: data}));
}

let end_experiment = {
    type : jsPsychHtmlKeyboardResponse,
    stimulus : POST_TEST_INSTRUCTION,
    choices : [],
    on_load: function() {
        if (consent_given) {
	    //            uil.saveData();
	    saveData("DATA_".concat(subject_id),jsPsych.data.get().csv())
        }
        else {
            document.body.innerHTML = FINISHED_NO_CONSENT;
        }
    }
};

/* NB final_trial is not used any more.  Please update the prolific code in
   instructions.js by changing the definition of POST_TEST_INSTRUCTION
   ************************************************************************
   
let final_trial = {
    type : jsPsychHtmlKeyboardResponse,
    stimulus : `<p><a href="https://app.prolific.co/submissions/complete?cc=XXXXXXX">Click here to return to Prolific and complete the study</a>.</p>`,
    choices: "NO_KEYS"
}
*/

/**
 * Randomize a table of stimuli
 */
function randomizeStimuli(table) {
    let shuffled = uil.randomization.randomizeStimuli(
        table,
        max_same_type=MAX_SUCCEEDING_ITEMS_OF_TYPE
    );

    if (shuffled !== null)
        table = shuffled;
    else {
            console.error('Unable to shuffle stimuli according constraints.');
            let msg = "Unable to shuffle the stimuli, perhaps loosen the " +
                      "constraints, or check the item_types on the stimuli.";
            throw new SprRandomizationError(msg);
    }

    return table; // shuffled table if possible original otherwise
}

/**
 * Get the timeline for a table of stimuli
 */
function getTimeline(table) {
    //////////////// timeline /////////////////////////////////
    let timeline = [];

    // new jsPsych browser checking plugin
    timeline.push(browser_check1);
    timeline.push(browser_check2);

    // Welcome the participant and guide them through the
    // consent forms and survey.
    timeline.push(welcome_screen);

    // Obtain informed consent.
    timeline.push(consent_procedure);

    // add survey
    timeline.push(survey_procedure);

    // Add the different parts of the experiment to the timeline
    timeline.push(instruction_screen_practice);

    let practice = {
        timeline: [
            fixcross,
            present_text,
            maybe_question
        ],
        timeline_variables: PRACTICE_ITEMS
    };

    timeline.push(practice);
    timeline.push(end_practice_screen);

    if (PSEUDO_RANDOMIZE) {
        table = randomizeStimuli(table);
    }

    let test = {
        timeline: [
            fixcross,
            present_text,
            maybe_question
        ],
        timeline_variables: table
    }

    timeline.push(test);
    timeline.push(end_experiment);
    
    return timeline;
}


function main() {
    // Make sure you have updated your key in globals.js
    //uil.setAccessKey(ACCESS_KEY);
    //uil.stopIfExperimentClosed();
    
    
   jsPsych.data.addProperties({
        subject: subject_id,
        study_id: study_id,
        session_id: session_id
    });
    
    // Option 1: client side randomization:
    let stimuli = pickRandomList();
    kickOffExperiment(getTimeline(stimuli.table), stimuli.list_name);

    // Option 2: server side balancing:
    // Make sure you have matched your groups on the dataserver with the
    // lists in stimuli.js..
    // This experiment uses groups/lists list1, and list2 by default (see
    // stimuli.js).
    // Hence, unless you change lists here, you should created matching
    // groups there.
    // uil.session.start(ACCESS_KEY, (group_name) => {
    //     let stimuli = findList(group_name);
    //     kickOffExperiment(getTimeline(stimuli));
    // });
}



// this function will eventually run the jsPsych timeline
function kickOffExperiment(timeline, list_name) {

    // Start jsPsych when running on a Desktop or Laptop style pc.
    
    

    jsPsych.data.addProperties({
	list: list_name
    });
     
//    uil.browser.rejectMobileOrTablet();
    jsPsych.run(timeline);
}

/**
 * This function will pick a random list from the TEST_ITEMS array.
 *
 * Returns an object with a list and a table, the list will always indicate
 * which list has been chosen for the participant.
 *
 * @returns {object} object with list_name and table fields
 */
function pickRandomList() {
    let range = function (n) {
        let empty_array = [];
        let i;
        for (i = 0; i < n; i++) {
            empty_array.push(i);
        }
        return empty_array;
    }
    let num_lists = TEST_ITEMS.length;
    var shuffled_range = jsPsych.randomization.repeat(range(num_lists), 1)
    var retlist = TEST_ITEMS[shuffled_range[0]];
    return retlist
}

function findList(name) {
    let list = TEST_ITEMS.find((entry) => entry.list_name === name);
    if (!list) {
        let found = TEST_ITEMS.map((entry) => `"${entry.list_name}"`).join(', ');
        console.error(
            `List not found "${name}".\n` +
                'This name was configured on the UiL datastore server.\n' +
                `The following lists exist in stimuli.js: \n${found}`)
    }
    return list;
}
