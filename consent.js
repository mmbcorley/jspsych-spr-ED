
// Keeps track whether or not consent has been given.
let consent_given = false;

/*
 * This fragment of html will be displayed in the beginning of you experiment.
 * You should fillout the contents of your information letter here.
 * It is displayed as html, the current html should be replace with
 * your information letter.
 */
const CONSENT_HTML1 =
    "<h3>" +
        "This study was certified according to the Informatics " +
        "Research Ethics Process, RT number 789617." +
    "</h3>" +
    "<p>" +
        "Please take time to read the following information carefully. " +
        "You should keep this page for your records." +
    "</p>" +
    "<p>" +
        "<b>Who are the researchers?</b> Aida Tarighat, PhD candidate at the Centre for Doctoral " +
        "Training, University of Edinburgh and " +
        "Martin Corley, Professor of Speech, Language, and Cognition " +
        "at the School of Philosophy, Psychology, and Language Sciences, University of Edinburgh" +
    "</p>" +
    "<p>" +
        "<b>What is the purpose of the study?</b> The purpose of this study is to assess reading time of English " +
        "sentences. We are interested in the factors involved in " +
        "interpretations of various sentences." +
    "</p>" +
    "<p>" +
        "<b>Why have I been asked to take part?</b> We have asked participants " +
        "whose first language is English and who are non-dyslexic to take part." +
    "</p>" +
    "<p>" +
        "<b>Do I have to take part?</b> No – participation in this study is entirely up to you. You can " +
        "withdraw from the study at any time, without giving a reason. Your " +
        "rights will not be affected. If you wish to withdraw, contact the PI. " +
        "We will stop using your data in any publications or presentations " +
        "submitted after you have withdrawn consent. However, we will keep " +
        "copies of your original consent, and of your withdrawal request." +
    "</p>" +
    "<p>" +
        "<b>What will happen if I decide to take part?</b> You will be introduced to a set of sentences. The sentences have " +
        "been edited from a variety of sources, including recorded conversations. " +
        "You will be asked to read the sentences one by one at your own pace. " +
        "The study should take around 10 minutes to complete." +
    "</p>" +
    "<p>" +
        "<b>Compensation.</b> You will be paid £1.75 for your participation in this study." +
    "</p>" +
    "<p>" +
        "<b>Are there any risks associated with taking part?</b> There are no significant risks associated with participation. " +
        "However, please note that the sentences cover various topics. If " +
        "you find any of the content difficult, please accept our apologies " +
        "and feel free to withdraw from the study at any time." +
      "</p>"
;


const CONSENT_HTML2 =
 "<p>" +
        "<b>Are there any benefits associated with taking part?</b> You will be compensated for your participation through Prolific " +
        "and you will be contributing to research in language studies." +
    "</p>" +
    "<p>" +
        "<b>What will happen to the results of this study?</b> The results of this study may be summarised in published articles, " +
        "reports, and presentations. Quotes or key findings will be anonymised: " +
        "We will remove any information that could, in our assessment, allow " +
        "anyone to identify you. With your consent, information can also be used " +
        "for future research. Your data may be archived for a minimum of 2 years." +
    "</p>" +
    "<p>" +
        "<b>Data protection and confidentiality.</b> Your data will be processed in accordance with Data Protection Law. " +
        "All information collected about you will be kept strictly confidential. " +
        "Your data will be referred to by a unique participant number rather than " +
        "by name. A separate record will be held of participant details and " +
        "corresponding participant number for the purposes of data erasure. Your " +
        "data will only be viewed by the researcher/research team Aida Tarighat and " +
        "Martin Corley. " +
    "</p>" +
    "<p>" +
        "All electronic data will be stored on a password-protected " +
        "encrypted computer, on the School of Informatics’ secure file servers, or " +
        "on the University’s secure encrypted cloud storage services (DataShare, " +
        "ownCloud, or Sharepoint). Your consent information will be kept separately " +
        "from your reading task in order to minimise risk." +
    "</p>" +
    "<p>" +
        "<b>What are my data protection rights?</b> The University of Edinburgh is a Data Controller for the information you " +
        "provide. You have the right to access information held about you. Your "  +
        "right of access can be exercised in accordance with Data Protection Law. " +
        "You also have other rights including rights of correction, erasure, and " +
        "objection. For more details, including the right to lodge a complaint with " +
        "the Information Commissioner’s Office, please visit " +
        '<a href = "https://www.ico.org.uk" target = "_blank"> ' +
            'www.ico.org.uk' +
        '</a>. ' +
        "Questions, comments, and requests about your personal data can also be sent " +
        "to the University Data Protection Officer at " +
        '<a href="mailto: dpo@ed.ac.uk">' + 
            'dpo@ed.ac.uk' +
        '</a>. ' +
        "For general " +
        "information about how we use your data, go to " +
        '<a href = "https://edin.ac/privacy-research" target = "_blank"> ' +
            'www.edin.ac/privacy-research' +
        '</a>. '
    "</p>" +
    "<p>" +
        "<b>Whom can I contact?</b> If you have any questions about the study, please contact Aida Tarighat at " +
        '<a href="mailto: s2184935@ed.ac.uk">' + 
            's2184935@ed.ac.uk' +
        '</a>. ' +
        "If you wish to make a complaint about the study, please contact the " +
        "Informatics Research Ethics at " +
        '<a href="mailto: inf-ethics@inf.ed.ac.uk">' + 
            'inf-ethics@inf.ed.ac.uk' +
        '</a>. ' +
        "When you contact us, please provide the study title, and detail the " +
        "nature of your complaint." +
    "</p>" +
    "<p>" +
        "<b>Updated information.</b> If the research project changes in any way, an updated Participant " +
        "Information Sheet will be made available on " +
        '<a href = "http://web.inf.ed.ac.uk/infweb/research/study-updates" target = "_blank"> ' +
            'www.web.inf.ed.ac.uk/infweb/research/study-updates' +
        '</a>.' +
    "</p>"
    ;

/*
 * Debriefing given when the participant doesn't consent.
 */
const DEBRIEF_MESSAGE_NO_CONSENT =
    "<h1>"                                          +
        "End of the experiment"                     +
    "</h1>"                                         +
    "<h2>"                                          +
        "No consent has been given."                +
    "</h2>";

const CONSENT_STATEMENT =
    '<b>Consent: I have read and understood the above information. ' +
    'I understand that my participation is voluntary, and I can withdraw at any time. ' +
    'I consent to my anonymised data being used in academic publications and presentations. ' +
    'I allow my data to be used in future ethically approved research.</b>'
    ;

const CONSENT_REFERENCE_NAME = 'consent';
const IF_REQUIRED_FEEDBACK_MESSAGE =
    "You must check the box next to " + CONSENT_STATEMENT +
    "in order to proceed to the experiment.";

// Adds UU styling to the consent forms.
const CONSENT_HTML_STYLE_UU = `<style>
        body {
            background: rgb(246, 246, 246);
            font-family: "Open Sans","Frutiger",Helvetica,Arial,sans-serif;
            color: rgb(33, 37, 41);
            text-align: left;
        }

        p {
            line-height: 1.4; /* Override paragraph for better readability */
        }

        label {
            margin-bottom: 0;
        }

        h1, h2{
            font-size: 2rem;
        }

        h6 {
            font-size: 1.1rem;
        }

        /* Input styles */

        form > table th {
            padding-left: 10px;
            vertical-align: middle;
        }

        input, textarea, select {
            border-radius: 0;
            border: 1px solid #d7d7d7;
            padding: 5px 10px;
            line-height: 20px;
            font-size: 16px;
        }

        input[type=submit], input[type=button], button, .button, .jspsych-btn {
            background: #000;
            color: #fff;
            border: none;
            font-weight: bold;
            font-size: 15px;
            padding: 0 20px;
            line-height: 42px;
            width: auto;
            min-width: auto;
            cursor: pointer;
            display: inline-block;
            border-radius: 0;
        }

        input[type="checkbox"], input[type="radio"]
        {
            width: auto;
        }

        button[type=submit], input[type=submit], .button-colored {
            background: #ffcd00;
            color: #000000;
        }

        button[type=submit].button-black, input[type=submit].button-black {
            background: #000;
            color: #fff;
        }

        button a, .button a,
        button a:hover, .button a:hover,
        a.button, a.button:hover {
            color: #fff;
            text-decoration: none;
        }

        .button-colored a,
        .button-colored a:hover,
        a.button-colored,
        a.button-colored:hover {
            color: #000;
        }

        /* Table styles */
        table thead th {
            border-bottom: 1px solid #ccc;
        }

        table tfoot th {
            border-top: 1px solid #ccc;
        }

        table tbody tr:nth-of-type(odd) {
            background: #eee;
        }

        table tbody tr:hover {
            background: #ddd;
        }

        table tbody tr.no-background:hover, table tbody tr.no-background {
            background: transparent;
        }

        table tbody td, table thead th, table tfoot th {
            padding: 6px 5px;
        }

        /* Link styles */
        a {
            color: rgb(33, 37, 41);
            text-decoration: underline;
            transition: 0.2s ease color;
        }

        a:hover {
            transition: 0.2s ease color;
            color: rgb(85, 85, 95);
        }

        </style>
        `;

// page 1 of informed consent
let consent_page1 = {
    type: jsPsychHtmlButtonResponse,
    data: {uil_save : false},
    stimulus: CONSENT_HTML_STYLE_UU + CONSENT_HTML1,
    choices: [CONTINUE_BUTTON_TEXT],
    prompt: ""
}

// displays the informed consent page
let consent_page2 = {
    type: jsPsychSurveyMultiSelect,
    data : {uil_save : true},
    preamble: CONSENT_HTML_STYLE_UU + CONSENT_HTML2,
    required_message: IF_REQUIRED_FEEDBACK_MESSAGE,
    button_label: CONTINUE_BUTTON_TEXT,
    questions: [
        {
            prompt: "",
            options: [CONSENT_STATEMENT],
            horizontal: true,
            required: false,
            button_label: CONTINUE_BUTTON_TEXT,
            name: CONSENT_REFERENCE_NAME
        }
    ],
    on_finish: function(data){
        data.consent_choice_response = data.response.consent[0];
        data.rt = Math.round(data.rt);
    }
};

/**
 * Obtains the consent of the participant.
 *
 * @returns {string}
 */
function getConsentData()
{
    let data = jsPsych.data.get().select('consent_choice_response');
    return data.values[0];
}

// Is displayed when no consent has been given.
let no_consent_end_screen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: DEBRIEF_MESSAGE_NO_CONSENT,
    choices: [],
    trial_duration: FINISH_TEXT_DUR,
    on_finish: function (data){
        jsPsych.endExperiment()
        data.rt = Math.round(data.rt);
    }
};

// Tests wheter consent has been given.
// If no consent has been given It displays the
// no_consent_screen.
//
let if_node_consent = {
    timeline: [no_consent_end_screen],
    conditional_function: function(data) {
        let mydata = getConsentData();
        if (mydata == CONSENT_STATEMENT) {
            consent_given = true;
            return false;
        } else {
            return true;
        }
    }
}

let consent_block = {
    timeline: [consent_page1, consent_page2]
}

let consent_procedure = {
    timeline: [consent_block, if_node_consent]
}
