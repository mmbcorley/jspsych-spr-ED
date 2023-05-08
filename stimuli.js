// Item types
const LITFLU      = "LITERAL_FLUENT";
const SARCFLU     = "SARCASTIC_FLUENT";
const LITDISFLU   = "LITERAL_DISFLUENT";
const SARCDISFLU  = "SARCASTIC_DISFLUENT";
const PRAC        = "PRACTICE";

// We want to test whether sarcastic words are faster 
// to read when there is um and literal words are easier 
// to read when there is no um.

// Lists 
const LISTS = [
    "list1",
    "list2",
    "list3",
    "list4"
];

const PRACTICE_ITEMS = [
    {
        id : 1,
        item_type : PRAC,
        stimulus :
            "Blaming others for your mistakes screams weakness.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 2,
        item_type : PRAC,
        stimulus :
            "Two other teams have results similar to ours. This\n" +
            "makes our claim most likely um valid.\n" ,
        question : "Our results are unique.",
        qanswer : FALSE_BUTTON_TEXT
    }
];

/*
 * In this list there is a stimulus, if a word or group of words starts with a
 * '#' it's reaction time will be recorded. So don't put any '#" elsewhere...
 */

// Add list 1.
const LIST_GROUP1 = [
    {
        id : 1,
        item_type : LITFLU,
        stimulus :
            "Keep speaking nonsense and people will #think\n" +
            "#you #are #stupid #at #some point.\n" ,
        question : "The sentence was about singing in public.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 2,
        item_type : LITDISFLU,
        stimulus :
            "Having to listen to people's munching noise when\n" +
            "I am trying to eat #makes #me #um #annoyed #about\n" +
            "#my life.\n" ,
        question : "A restaurant was mentioned in the sentence.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 3,
        item_type : SARCFLU,
        stimulus :
            "A guy in the audience kept clearing his throat\n" +
            "throughout the whole lecture. Everyone thought\n" +
            "#it #was #a #delightful #distraction.\n" ,
        question : "A guy was clearing his throat in his bathroom.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 4,
        item_type : LITDISFLU,
        stimulus :
            "Well, blue whales are an endangered species; so\n" +
            "I'd say hunting them is #a #really #um #bad #move.\n" ,
        question : "Blue whales are endangered.",
        qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 5,
        item_type : SARCDISFLU,
        stimulus :
            "During mating season, the winning animals are\n" +
            "#usually #the #um #drowsy #ones.\n" ,
        question : "The sentence mentioned mating season.",
        qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 6,
        item_type : SARCFLU,
        stimulus :
            "You do all the work and your colleagues show up\n" +
            "last minute to take credit for what they haven’t\n" +
            "done. #It’s #such #a #pleasant #experience.\n" ,
        question : "Your colleagues have not contributed enough.",
        qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 7,
        item_type : LITDISFLU,
        stimulus :
            "A giant spider chilling in the corner of the\n" +
            "bathtub refusing to move; how can you not #find\n" +
            "#that #um #disturbing, #my #friend?\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 8,
        item_type : SARCFLU,
        stimulus :
            "A panic attack before a major job interview #is\n" +
            "#always #a #fun #first #step.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 9,
        item_type : LITFLU,
        stimulus :
            "The event was chaotic with speakers showing up\n" +
            "late for their slots. I was #surprised #by #how\n" +
            "#terribly #organised #it was.\n" ,
        question : "Speakers were late for their slots.",
        qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 10,
        item_type : SARCDISFLU,
        stimulus :
            "For a parent, praise for their child #is #always\n" +
            "#um #disheartening #to #hear.\n" ,
        question : "The asentence was about praising parents.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 11,
        item_type : LITDISFLU,
        stimulus :
            "Working all those extra hours #was #really #um\n" +
            "#exhausting #for #me.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 12,
        item_type : SARCFLU,
        stimulus :
            "Sending random stories of career failure to an\n" +
            "unemployed #friend #is #a #considerate #act.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 13,
        item_type : SARCFLU,
        stimulus :
            "He never misses his daughter's school events\n" +
            "and recitals. #He #is #an #inattentive #father.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 14,
        item_type : LITDISFLU,
        stimulus :
            "She has sent you six different texts on how\n" +
            "this relationship is not working. I think the\n" +
            "#message #is #um #unambiguous #right #now.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 15,
        item_type : SARCDISFLU,
        stimulus :
            "After having three traumatic experiences, the\n" +
            "kid's #fear #is #um #irrational #I'd #say.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 16,
        item_type : LITFLU,
        stimulus :
            "If you have a butler and a nanny, your #life\n" +
            "#must #be #easy #to #bear.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 17,
        item_type : SARCDISFLU,
        stimulus :
            "When you have forty kids to chaperone on a field\n" +
            "trip, the trip is bound #to #feel #um #relaxing\n" +
            "#really #fast.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 18,
        item_type : LITFLU,
        stimulus :
            "Perfect post-pregnancy body proportions on\n" +
            "#social #media #are #fake #without #a doubt.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 19,
        item_type : LITFLU,
        stimulus :
            "Sitting through an hour of sermon would\n" +
            "#make #most #children #feral #on #any day.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 20,
        item_type : SARCDISFLU,
        stimulus :
            "Collective support is a #reason #for #um #panic\n" +
            "#in #most human societies.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 21,
        item_type : SARCFLU,
        stimulus :
            "We should really avoid a totalitarian government\n" +
            "again, #after #so #many #successful #examples\n" +
            "#in history.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 22,
        item_type : LITFLU,
        stimulus :
            "I'm sure negative peer pressure #leads #to\n" +
            "#mostly #idiotic #decisions.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 23,
        item_type : LITDISFLU,
        stimulus :
            "My brother forgot my birthday again, #which\n" +
            "#was #um #expected #of #him.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 24,
        item_type : SARCDISFLU,
        stimulus :
            "If you practise enough, your skills #usually\n" +
            "#get #um #rusty #over #time.\n" ,
        question : "",
        qanswer : undefined
    }
];

// Add list 2.
const LIST_GROUP2 = [
    {
        id : 1,
        item_type : SARCFLU,
        stimulus :
            "Keep speaking nonsense and people will #think\n" +
            "#you #are #smart #at #some point.\n" ,
        question : "The sentence was about singing in public.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 2,
        item_type : SARCDISFLU,
        stimulus :
            "Having to listen to people's munching noise when\n" +
            "I am trying to eat #makes #me #um #happy #about\n" +
            "#my life.\n" ,
        question : "A restaurant was mentioned in the sentence.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 3,
        item_type : LITFLU,
        stimulus :
            "A guy in the audience kept clearing his throat\n" +
            "throughout the whole lecture. Everyone thought\n" +
            "#it #was #a #disgusting #distraction.\n" ,
        question : "A guy was clearing his throat in his bathroom.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 4,
        item_type : SARCDISFLU,
        stimulus :
            "Well, blue whales are an endangered species; so\n" +
            "I'd say hunting them is #a #really #um #wise #move.\n" ,
        question : "Blue whales are endangered.",
        qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 5,
        item_type : LITDISFLU,
        stimulus :
            "During mating season, the winning animals are\n" +
            "#usually #the #um #impressive #ones.\n" ,
        question : "The sentence mentioned mating season.",
        qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 6,
        item_type : LITFLU,
        stimulus :
            "You do all the work and your colleagues show up\n" +
            "last minute to take credit for what they haven’t\n" +
            "done. #It’s #such #a #frustrating #experience.\n" ,
        question : "Your colleagues have not contributed enough.",
        qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 7,
        item_type : SARCDISFLU,
        stimulus :
            "A giant spider chilling in the corner of the\n" +
            "bathtub refusing to move; how can you not #find\n" +
            "#that #um #appealing, #my #friend?\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 8,
        item_type : LITFLU,
        stimulus :
            "A panic attack before a major job interview #is\n" +
            "#always #a #grim #first #step.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 9,
        item_type : SARCFLU,
        stimulus :
            "The event was chaotic with speakers showing up\n" +
            "late for their slots. I was #surprised #by #how\n" +
            "#skilfully #organised #it was.\n" ,
        question : "Speakers were late for their slots.",
        qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 10,
        item_type : LITDISFLU,
        stimulus :
            "For a parent, praise for their child #is #always\n" +
            "#um #heartening #to #hear.\n" ,
        question : "The asentence was about praising parents.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 11,
        item_type : SARCDISFLU,
        stimulus :
            "Working all those extra hours #was #really #um\n" +
            "#invigorating #for #me.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 12,
        item_type : LITFLU,
        stimulus :
            "Sending random stories of career failure to an\n" +
            "unemployed #friend #is #a #thoughtless #act.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 13,
        item_type : LITFLU,
        stimulus :
            "He never misses his daughter's school events\n" +
            "and recitals. #He #is #an #involved #father.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 14,
        item_type : SARCDISFLU,
        stimulus :
            "She has sent you six different texts on how\n" +
            "this relationship is not working. I think the\n" +
            "#message #is #um #confusing #right #now.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 15,
        item_type : LITDISFLU,
        stimulus :
            "After having three traumatic experiences, the\n" +
            "kid's #fear #is #um #warranted #I'd #say.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 16,
        item_type : SARCFLU,
        stimulus :
            "If you have a butler and a nanny, your #life\n" +
            "#must #be #hard #to #bear.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 17,
        item_type : LITDISFLU,
        stimulus :
            "When you have forty kids to chaperone on a field\n" +
            "trip, the trip is bound #to #feel #um #stressful\n" +
            "#really #fast.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 18,
        item_type : SARCFLU,
        stimulus :
            "Perfect post-pregnancy body proportions on\n" +
            "#social #media #are #real #without #a doubt.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 19,
        item_type : SARCFLU,
        stimulus :
            "Sitting through an hour of sermon would\n" +
            "#make #most #children #bubbly #on #any day.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 20,
        item_type : LITDISFLU,
        stimulus :
            "Collective support is a #reason #for #um #joy #in\n" +
            "#most human societies.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 21,
        item_type : LITFLU,
        stimulus :
            "We should really avoid a totalitarian government\n" +
            "again, #after #so #many #disastrous #examples #in history.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 22,
        item_type : SARCFLU,
        stimulus :
            "I'm sure negative peer pressure #leads #to\n" +
            "#mostly #clever #decisions.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 23,
        item_type : SARCDISFLU,
        stimulus :
            "My brother forgot my birthday again, #which\n" +
            "#was #um #charming #of #him.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 24,
        item_type : LITDISFLU,
        stimulus :
            "If you practise enough, your skills #usually\n" +
            "#get #um #better #over #time.\n" ,
        question : "",
        qanswer : undefined
    }
];

// Add list 3.
const LIST_GROUP3 = [
    {
        id : 1,
        item_type : LITDISFLU,
        stimulus :
            "Keep speaking nonsense and people will think\n" +
            "#you #are #um #stupid #at #some point.\n" ,
        question : "The sentence was about singing in public.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 2,
        item_type : LITFLU,
        stimulus :
            "Having to listen to people's munching noise when\n" +
            "I am trying to #eat #makes #me #annoyed #about\n" +
            "#my life.\n" ,
        question : "A restaurant was mentioned in the sentence.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 3,
        item_type : SARCDISFLU,
        stimulus :
            "A guy in the audience kept clearing his throat\n" +
            "throughout the whole lecture. Everyone thought\n" +
            "it #was #an #um #delightful #distraction.\n" ,
        question : "A guy was clearing his throat in his bathroom.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 4,
        item_type : LITFLU,
        stimulus :
            "Well, blue whales are an endangered species; so\n" +
            "I'd say hunting them #is #a #really #bad #move.\n" ,
        question : "Blue whales are endangered.",
        qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 5,
        item_type : SARCFLU,
        stimulus :
            "During mating season, the winning animals #are\n" +
            "#usually #the #drowsy #ones.\n" ,
        question : "The sentence mentioned mating season.",
        qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 6,
        item_type : SARCDISFLU,
        stimulus :
            "You do all the work and your colleagues show up\n" +
            "last minute to take credit for what they haven’t\n" +
            "done. It’s #such #an #um #pleasant #experience.\n" ,
        question : "Your colleagues have not contributed enough.",
        qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 7,
        item_type : LITFLU,
        stimulus :
            "A giant spider chilling in the corner of the\n" +
            "bathtub refusing to move; how can you #not #find\n" +
            "#that #disturbing, #my #friend?\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 8,
        item_type : SARCDISFLU,
        stimulus :
            "A panic attack before a major job interview is\n" +
            "#always #an #um #fun #first #step.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 9,
        item_type : LITDISFLU,
        stimulus :
            "The event was chaotic with speakers showing up\n" +
            "late for their slots. I was surprised #by #how #um\n" +
            "#terribly #organised #it was.\n" ,
        question : "Speakers were late for their slots.",
        qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 10,
        item_type : SARCFLU,
        stimulus :
            "For a parent, praise for their #child #is #always\n" +
            "#disheartening #to #hear.\n" ,
        question : "The asentence was about praising parents.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 11,
        item_type : LITFLU,
        stimulus :
            "Working all those extra #hours #was #really\n" +
            "#exhausting #for #me.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 12,
        item_type : SARCDISFLU,
        stimulus :
            "Sending random stories of career failure to an\n" +
            "unemployed friend #is #an #um #considerate #act.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 13,
        item_type : SARCDISFLU,
        stimulus :
            "He never misses his daughter's school events\n" +
            "and recitals. He #is #an #um #inattentive #father.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 14,
        item_type : LITFLU,
        stimulus :
            "She has sent you six different texts on how\n" +
            "this relationship is not working. I think #the\n" +
            "#message #is #unambiguous #right #now.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 15,
        item_type : SARCFLU,
        stimulus :
            "After having three traumatic experiences, the\n" +
            "#kid's #fear #is #irrational #I'd #say.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 16,
        item_type : LITDISFLU,
        stimulus :
            "If you have a butler and a nanny, your life\n" +
            "#must #be #um #easy #to #bear.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 17,
        item_type : SARCFLU,
        stimulus :
            "When you have forty kids to chaperone on a field\n" +
            "trip, the trip is #bound #to #feel #relaxing\n" +
            "#really #fast.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 18,
        item_type : LITDISFLU,
        stimulus :
            "Perfect post-pregnancy body proportions on\n" +
            "social #media #are #um #fake #without #a doubt.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 19,
        item_type : LITDISFLU,
        stimulus :
            "Sitting through an hour of sermon would\n" +
            "make #most #children #um #feral #on #any day.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 20,
        item_type : SARCFLU,
        stimulus :
            "Collective support is #a #reason #for #panic\n" +
            "#in #most human societies.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 21,
        item_type : SARCDISFLU,
        stimulus :
            "We should really avoid a totalitarian government\n" +
            "again, after #so #many #um #successful #examples\n" +
            "#in history.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 22,
        item_type : LITDISFLU,
        stimulus :
            "I'm sure negative peer pressure leads #to\n" +
            "#mostly #um #idiotic #decisions.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 23,
        item_type : LITFLU,
        stimulus :
            "My brother forgot my birthday #again, #which\n" +
            "#was #expected #of #him.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 24,
        item_type : SARCFLU,
        stimulus :
            "If you practise enough, your #skills #usually\n" +
            "#get #rusty #over #time.\n" ,
        question : "",
        qanswer : undefined
    }
];

// Add list 4.
const LIST_GROUP4 = [
    {
        id : 1,
        item_type : SARCDISFLU,
        stimulus :
            "Keep speaking nonsense and people will #think\n" +
            "#you #are #um #smart #at #some point.\n" ,
        question : "The sentence was about singing in public.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 2,
        item_type : SARCFLU,
        stimulus :
            "Having to listen to people's munching noise when\n" +
            "I am trying to #eat #makes #me #happy #about\n" +
            "#my life.\n" ,
        question : "A restaurant was mentioned in the sentence.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 3,
        item_type : LITDISFLU,
        stimulus :
            "A guy in the audience kept clearing his throat\n" +
            "throughout the whole lecture. Everyone thought\n" +
            "it #was #an #um #disgusting #distraction.\n" ,
        question : "A guy was clearing his throat in his bathroom.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 4,
        item_type : SARCFLU,
        stimulus :
            "Well, blue whales are an endangered species; so\n" +
            "I'd say hunting them #is #a #really #wise #move.\n" ,
            question : "Blue whales are endangered.",
            qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 5,
        item_type : LITFLU,
        stimulus :
            "During mating season, the winning animals #are\n" +
            "#usually #the #impressive #ones.\n" ,
        question : "The sentence mentioned mating season.",
        qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 6,
        item_type : LITDISFLU,
        stimulus :
            "You do all the work and your colleagues show up\n" +
            "last minute to take credit for what they haven’t\n" +
            "done. It’s #such #an #um #frustrating #experience.\n" ,
        question : "Your colleagues have not contributed enough.",
        qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 7,
        item_type : SARCFLU,
        stimulus :
            "A giant spider chilling in the corner of the\n" +
            "bathtub refusing to move; how can you #not #find\n" +
            "#that #appealing, #my #friend?\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 8,
        item_type : LITDISFLU,
        stimulus :
            "A panic attack before a major job interview is\n" +
            "#always #an #um #grim #first #step.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 9,
        item_type : SARCDISFLU,
        stimulus :
            "The event was chaotic with speakers showing up\n" +
            "late for their slots. I was surprised #by #how\n" +
            "#um #skilfully #organised #it #was.\n" ,
        question : "Speakers were late for their slots.",
        qanswer : TRUE_BUTTON_TEXT
    },
    {
        id : 10,
        item_type : LITFLU,
        stimulus :
            "For a parent, praise for their #child #is #always\n" +
            "#heartening #to #hear.\n" ,
        question : "The asentence was about praising parents.",
        qanswer : FALSE_BUTTON_TEXT
    },
    {
        id : 11,
        item_type : SARCFLU,
        stimulus :
            "Working all those extra #hours #was #really\n" +
            "#invigorating #for #me.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 12,
        item_type : LITDISFLU,
        stimulus :
            "Sending random stories of career failure to an\n" +
            "unemployed friend #is #an #um #thoughtless #act.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 13,
        item_type : LITDISFLU,
        stimulus :
            "He never misses his daughter's school events\n" +
            "and recitals. He #is #an #um #involved #father.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 14,
        item_type : SARCFLU,
        stimulus :
            "She has sent you six different texts on how\n" +
            "this relationship is not working. I think #the\n" +
            "#message #is #confusing #right #now.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 15,
        item_type : LITFLU,
        stimulus :
            "After having three traumatic experiences, the\n" +
            "#kid's #fear #is #warranted #I'd #say.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 16,
        item_type : SARCDISFLU,
        stimulus :
            "If you have a butler and a nanny, your life\n" +
            "#must #be #um #hard #to #bear.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 17,
        item_type : LITFLU,
        stimulus :
            "When you have forty kids to chaperone on a field\n" +
            "trip, the trip is #bound #to #feel #stressful\n" +
            "#really #fast.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 18,
        item_type : SARCDISFLU,
        stimulus :
            "Perfect post-pregnancy body proportions on\n" +
            "social #media #are #um #real #without #a doubt.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 19,
        item_type : SARCDISFLU,
        stimulus :
            "Sitting through an hour of sermon would make\n" +
            "#most #children #um #bubbly #on #any day.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 20,
        item_type : LITFLU,
        stimulus :
            "Collective support is #a #reason #for #joy #in\n" +
            "#most human societies.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 21,
        item_type : LITDISFLU,
        stimulus :
            "We should really avoid a totalitarian government\n" +
            "again, after #so #many #um #disastrous #examples\n" +
            "#in history.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 22,
        item_type : SARCDISFLU,
        stimulus :
            "I'm sure negative peer pressure leads #to\n" +
            "#mostly #um #clever #decisions.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 23,
        item_type : SARCFLU,
        stimulus :
            "My brother forgot my birthday #again, #which\n" +
            "#was #charming #of #him.\n" ,
        question : "",
        qanswer : undefined
    },
    {
        id : 24,
        item_type : LITFLU,
        stimulus :
            "If you practise enough, your #skills #usually\n" +
            "#get #better #over #time.\n" ,
        question : "",
        qanswer : undefined
    }
];
//


// These lists are not a between subjects variable, but
// define which list a participant gets.
const TEST_ITEMS = [
    {list_name: LISTS[0], table: LIST_GROUP1},
    {list_name: LISTS[1], table: LIST_GROUP2},
    {list_name: LISTS[2], table: LIST_GROUP3},
    {list_name: LISTS[3], table: LIST_GROUP4}
    // Add a third list here, put a comma on the
    // end of the line above here.
    // {list_name: LISTS[1], table: LIST_GROUP3}
];


