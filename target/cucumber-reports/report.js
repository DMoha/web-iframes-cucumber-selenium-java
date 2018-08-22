$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feedback_Button_Available_All_Tabs_Tests.feature");
formatter.feature({
  "line": 1,
  "name": "Test the Feedback button on different tabs",
  "description": "Description: This feature will test the functionalities of Feedback button on different tabs",
  "id": "test-the-feedback-button-on-different-tabs",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Successful submission of a specific feedback from Get Started tab",
  "description": "",
  "id": "test-the-feedback-button-on-different-tabs;successful-submission-of-a-specific-feedback-from-get-started-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User has naviagted to the \"\u003cPage\u003e\" in Usabilla",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "selected \"\u003cSubsection\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User wants to provide \"\u003cFeedback\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User selects \"\u003cSection\u003e\" for providing Feedback",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User provides \"\u003cRating\u003e\", \"\u003cSubject\u003e\", \"\u003cContent\u003e\", \"\u003cEmail\u003e\", \"\u003cRecommendation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be able to submit the Feedback",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "Details",
  "description": "",
  "id": "test-the-feedback-button-on-different-tabs;successful-submission-of-a-specific-feedback-from-get-started-tab;details",
  "rows": [
    {
      "cells": [
        "Page",
        "Subsection",
        "Feedback",
        "Section",
        "Rating",
        "Subject",
        "Content",
        "Email",
        "Recommendation"
      ],
      "line": 13,
      "id": "test-the-feedback-button-on-different-tabs;successful-submission-of-a-specific-feedback-from-get-started-tab;details;1"
    },
    {
      "cells": [
        "Get Started",
        "",
        "Specific",
        "Request Demo Form",
        "4",
        "Suggestion",
        "Field names can be bolder",
        "",
        "7"
      ],
      "line": 14,
      "id": "test-the-feedback-button-on-different-tabs;successful-submission-of-a-specific-feedback-from-get-started-tab;details;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8856537689,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Successful submission of a specific feedback from Get Started tab",
  "description": "",
  "id": "test-the-feedback-button-on-different-tabs;successful-submission-of-a-specific-feedback-from-get-started-tab;details;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User has naviagted to the \"Get Started\" in Usabilla",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "selected \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User wants to provide \"Specific\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User selects \"Request Demo Form\" for providing Feedback",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User provides \"4\", \"Suggestion\", \"Field names can be bolder\", \"\", \"7\"",
  "matchedColumns": [
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be able to submit the Feedback",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Get Started",
      "offset": 27
    }
  ],
  "location": "Steps.user_has_naviagted_to_the_in_Usabilla(String)"
});
formatter.result({
  "duration": 8596486202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 10
    }
  ],
  "location": "Steps.selected(String)"
});
formatter.result({
  "duration": 6779772033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Specific",
      "offset": 23
    }
  ],
  "location": "Steps.user_wants_to_provide(String)"
});
formatter.result({
  "duration": 5917603217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Request Demo Form",
      "offset": 14
    }
  ],
  "location": "Steps.user_selects_for_providing_Feedback(String)"
});
formatter.result({
  "duration": 5471112307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 15
    },
    {
      "val": "Suggestion",
      "offset": 20
    },
    {
      "val": "Field names can be bolder",
      "offset": 34
    },
    {
      "val": "",
      "offset": 63
    },
    {
      "val": "7",
      "offset": 67
    }
  ],
  "location": "Steps.user_provides(String,String,String,String,String)"
});
formatter.result({
  "duration": 11762567176,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_be_able_to_submit_the_Feedback()"
});
formatter.result({
  "duration": 1140815650,
  "status": "passed"
});
formatter.after({
  "duration": 1261187173,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Successful submission of a general feedback from Customers tab",
  "description": "",
  "id": "test-the-feedback-button-on-different-tabs;successful-submission-of-a-general-feedback-from-customers-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User has naviagted to the \"\u003cPage\u003e\" in Usabilla",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "selected \"\u003cSubsection\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User wants to provide \"\u003cFeedback\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User provides \"\u003cRating\u003e\", \"\u003cSubject\u003e\", \"\u003cContent\u003e\", \"\u003cEmail\u003e\", \"\u003cRecommendation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be able to submit the Feedback",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "Details",
  "description": "",
  "id": "test-the-feedback-button-on-different-tabs;successful-submission-of-a-general-feedback-from-customers-tab;details",
  "rows": [
    {
      "cells": [
        "Page",
        "Subsection",
        "Feedback",
        "Rating",
        "Subject",
        "Content",
        "Email",
        "Recommendation"
      ],
      "line": 25,
      "id": "test-the-feedback-button-on-different-tabs;successful-submission-of-a-general-feedback-from-customers-tab;details;1"
    },
    {
      "cells": [
        "Customers",
        "Our Clients",
        "General",
        "4",
        "Question",
        "Question",
        "",
        "8"
      ],
      "line": 26,
      "id": "test-the-feedback-button-on-different-tabs;successful-submission-of-a-general-feedback-from-customers-tab;details;2"
    },
    {
      "cells": [
        "Customers",
        "Case Studies",
        "General",
        "5",
        "Compliment",
        "Awesome",
        "deepu212@gmail.com",
        "9"
      ],
      "line": 27,
      "id": "test-the-feedback-button-on-different-tabs;successful-submission-of-a-general-feedback-from-customers-tab;details;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5519603630,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Successful submission of a general feedback from Customers tab",
  "description": "",
  "id": "test-the-feedback-button-on-different-tabs;successful-submission-of-a-general-feedback-from-customers-tab;details;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User has naviagted to the \"Customers\" in Usabilla",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "selected \"Our Clients\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User wants to provide \"General\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User provides \"4\", \"Question\", \"Question\", \"\", \"8\"",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be able to submit the Feedback",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customers",
      "offset": 27
    }
  ],
  "location": "Steps.user_has_naviagted_to_the_in_Usabilla(String)"
});
formatter.result({
  "duration": 11232604932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Our Clients",
      "offset": 10
    }
  ],
  "location": "Steps.selected(String)"
});
formatter.result({
  "duration": 7339051477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "General",
      "offset": 23
    }
  ],
  "location": "Steps.user_wants_to_provide(String)"
});
formatter.result({
  "duration": 5568325661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 15
    },
    {
      "val": "Question",
      "offset": 20
    },
    {
      "val": "Question",
      "offset": 32
    },
    {
      "val": "",
      "offset": 44
    },
    {
      "val": "8",
      "offset": 48
    }
  ],
  "location": "Steps.user_provides(String,String,String,String,String)"
});
formatter.result({
  "duration": 11257347262,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_be_able_to_submit_the_Feedback()"
});
formatter.result({
  "duration": 1680460004,
  "status": "passed"
});
formatter.after({
  "duration": 1077204313,
  "status": "passed"
});
formatter.before({
  "duration": 4724085505,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Successful submission of a general feedback from Customers tab",
  "description": "",
  "id": "test-the-feedback-button-on-different-tabs;successful-submission-of-a-general-feedback-from-customers-tab;details;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User has naviagted to the \"Customers\" in Usabilla",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "selected \"Case Studies\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User wants to provide \"General\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User provides \"5\", \"Compliment\", \"Awesome\", \"deepu212@gmail.com\", \"9\"",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User should be able to submit the Feedback",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customers",
      "offset": 27
    }
  ],
  "location": "Steps.user_has_naviagted_to_the_in_Usabilla(String)"
});
formatter.result({
  "duration": 8418661479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Case Studies",
      "offset": 10
    }
  ],
  "location": "Steps.selected(String)"
});
formatter.result({
  "duration": 6166870823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "General",
      "offset": 23
    }
  ],
  "location": "Steps.user_wants_to_provide(String)"
});
formatter.result({
  "duration": 5643659773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "Compliment",
      "offset": 20
    },
    {
      "val": "Awesome",
      "offset": 34
    },
    {
      "val": "deepu212@gmail.com",
      "offset": 45
    },
    {
      "val": "9",
      "offset": 67
    }
  ],
  "location": "Steps.user_provides(String,String,String,String,String)"
});
formatter.result({
  "duration": 11528178168,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_be_able_to_submit_the_Feedback()"
});
formatter.result({
  "duration": 881128742,
  "status": "passed"
});
formatter.after({
  "duration": 2772070790,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Successful cancellation of a general feedback from Partners tab",
  "description": "",
  "id": "test-the-feedback-button-on-different-tabs;successful-cancellation-of-a-general-feedback-from-partners-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User has naviagted to the \"\u003cPage\u003e\" in Usabilla",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "selected \"\u003cSubsection\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User wants to provide \"\u003cFeedback\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User provides \"\u003cRating\u003e\", \"\u003cSubject\u003e\", \"\u003cContent\u003e\", \"\u003cEmail\u003e\", \"\u003cRecommendation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User should be able to cancel the Feedback",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "Details",
  "description": "",
  "id": "test-the-feedback-button-on-different-tabs;successful-cancellation-of-a-general-feedback-from-partners-tab;details",
  "rows": [
    {
      "cells": [
        "Page",
        "Subsection",
        "Feedback",
        "Rating",
        "Subject",
        "Content",
        "Email",
        "Recommendation"
      ],
      "line": 37,
      "id": "test-the-feedback-button-on-different-tabs;successful-cancellation-of-a-general-feedback-from-partners-tab;details;1"
    },
    {
      "cells": [
        "Partners",
        "Partnership Overview",
        "General",
        "2",
        "Bug",
        "Nothing",
        "",
        "4"
      ],
      "line": 38,
      "id": "test-the-feedback-button-on-different-tabs;successful-cancellation-of-a-general-feedback-from-partners-tab;details;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4091653179,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Successful cancellation of a general feedback from Partners tab",
  "description": "",
  "id": "test-the-feedback-button-on-different-tabs;successful-cancellation-of-a-general-feedback-from-partners-tab;details;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User has naviagted to the \"Partners\" in Usabilla",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "selected \"Partnership Overview\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User wants to provide \"General\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User provides \"2\", \"Bug\", \"Nothing\", \"\", \"4\"",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User should be able to cancel the Feedback",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Partners",
      "offset": 27
    }
  ],
  "location": "Steps.user_has_naviagted_to_the_in_Usabilla(String)"
});
formatter.result({
  "duration": 9674911433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Partnership Overview",
      "offset": 10
    }
  ],
  "location": "Steps.selected(String)"
});
formatter.result({
  "duration": 7339151435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "General",
      "offset": 23
    }
  ],
  "location": "Steps.user_wants_to_provide(String)"
});
formatter.result({
  "duration": 5630173450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 15
    },
    {
      "val": "Bug",
      "offset": 20
    },
    {
      "val": "Nothing",
      "offset": 27
    },
    {
      "val": "",
      "offset": 38
    },
    {
      "val": "4",
      "offset": 42
    }
  ],
  "location": "Steps.user_provides(String,String,String,String,String)"
});
formatter.result({
  "duration": 10875411491,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_be_able_to_cancel_the_Feedback()"
});
formatter.result({
  "duration": 15354821220,
  "status": "passed"
});
formatter.after({
  "duration": 1334107563,
  "status": "passed"
});
formatter.uri("Feedback_Button_HomePage_Tests.feature");
formatter.feature({
  "line": 1,
  "name": "Test the Feedback button on Homepage",
  "description": "Description: This feature will test the functionalities of Feedback button on the Home page",
  "id": "test-the-feedback-button-on-homepage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Successful submission of a specific feedback",
  "description": "",
  "id": "test-the-feedback-button-on-homepage;successful-submission-of-a-specific-feedback",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User has naviagted to the \"\u003cPage\u003e\" in Usabilla",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User wants to provide \"\u003cFeedback\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User selects \"\u003cSection\u003e\" for providing Feedback",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User provides \"\u003cRating\u003e\", \"\u003cSubject\u003e\", \"\u003cContent\u003e\", \"\u003cEmail\u003e\", \"\u003cRecommendation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be able to submit the Feedback",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "Details",
  "description": "",
  "id": "test-the-feedback-button-on-homepage;successful-submission-of-a-specific-feedback;details",
  "rows": [
    {
      "cells": [
        "Page",
        "Feedback",
        "Section",
        "Rating",
        "Subject",
        "Content",
        "Email",
        "Recommendation"
      ],
      "line": 12,
      "id": "test-the-feedback-button-on-homepage;successful-submission-of-a-specific-feedback;details;1"
    },
    {
      "cells": [
        "Home",
        "Specific",
        "Feedback button",
        "4",
        "Suggestion",
        "Great",
        "",
        "8"
      ],
      "line": 13,
      "id": "test-the-feedback-button-on-homepage;successful-submission-of-a-specific-feedback;details;2"
    },
    {
      "cells": [
        "Home",
        "Specific",
        "Logo",
        "5",
        "Compliment",
        "Awesome",
        "",
        "9"
      ],
      "line": 14,
      "id": "test-the-feedback-button-on-homepage;successful-submission-of-a-specific-feedback;details;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4680768357,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successful submission of a specific feedback",
  "description": "",
  "id": "test-the-feedback-button-on-homepage;successful-submission-of-a-specific-feedback;details;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User has naviagted to the \"Home\" in Usabilla",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User wants to provide \"Specific\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User selects \"Feedback button\" for providing Feedback",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User provides \"4\", \"Suggestion\", \"Great\", \"\", \"8\"",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be able to submit the Feedback",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 27
    }
  ],
  "location": "Steps.user_has_naviagted_to_the_in_Usabilla(String)"
});
formatter.result({
  "duration": 12123927179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Specific",
      "offset": 23
    }
  ],
  "location": "Steps.user_wants_to_provide(String)"
});
formatter.result({
  "duration": 5472157406,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Feedback button",
      "offset": 14
    }
  ],
  "location": "Steps.user_selects_for_providing_Feedback(String)"
});
formatter.result({
  "duration": 5305287475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 15
    },
    {
      "val": "Suggestion",
      "offset": 20
    },
    {
      "val": "Great",
      "offset": 34
    },
    {
      "val": "",
      "offset": 43
    },
    {
      "val": "8",
      "offset": 47
    }
  ],
  "location": "Steps.user_provides(String,String,String,String,String)"
});
formatter.result({
  "duration": 11152740126,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_be_able_to_submit_the_Feedback()"
});
formatter.result({
  "duration": 886274357,
  "status": "passed"
});
formatter.after({
  "duration": 3035074168,
  "status": "passed"
});
formatter.before({
  "duration": 4114662751,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Successful submission of a specific feedback",
  "description": "",
  "id": "test-the-feedback-button-on-homepage;successful-submission-of-a-specific-feedback;details;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User has naviagted to the \"Home\" in Usabilla",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User wants to provide \"Specific\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User selects \"Logo\" for providing Feedback",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User provides \"5\", \"Compliment\", \"Awesome\", \"\", \"9\"",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be able to submit the Feedback",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 27
    }
  ],
  "location": "Steps.user_has_naviagted_to_the_in_Usabilla(String)"
});
formatter.result({
  "duration": 8758700044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Specific",
      "offset": 23
    }
  ],
  "location": "Steps.user_wants_to_provide(String)"
});
formatter.result({
  "duration": 5649692071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logo",
      "offset": 14
    }
  ],
  "location": "Steps.user_selects_for_providing_Feedback(String)"
});
formatter.result({
  "duration": 5322817197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "Compliment",
      "offset": 20
    },
    {
      "val": "Awesome",
      "offset": 34
    },
    {
      "val": "",
      "offset": 45
    },
    {
      "val": "9",
      "offset": 49
    }
  ],
  "location": "Steps.user_provides(String,String,String,String,String)"
});
formatter.result({
  "duration": 11173361857,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_be_able_to_submit_the_Feedback()"
});
formatter.result({
  "duration": 1062008883,
  "status": "passed"
});
formatter.after({
  "duration": 938614517,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Successful submission of a general feedback",
  "description": "",
  "id": "test-the-feedback-button-on-homepage;successful-submission-of-a-general-feedback",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User has naviagted to the \"\u003cPage\u003e\" in Usabilla",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User wants to provide \"\u003cFeedback\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User provides \"\u003cRating\u003e\", \"\u003cSubject\u003e\", \"\u003cContent\u003e\", \"\u003cEmail\u003e\", \"\u003cRecommendation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to submit the Feedback",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "Details",
  "description": "",
  "id": "test-the-feedback-button-on-homepage;successful-submission-of-a-general-feedback;details",
  "rows": [
    {
      "cells": [
        "Page",
        "Feedback",
        "Rating",
        "Subject",
        "Content",
        "Email",
        "Recommendation"
      ],
      "line": 24,
      "id": "test-the-feedback-button-on-homepage;successful-submission-of-a-general-feedback;details;1"
    },
    {
      "cells": [
        "Home",
        "General",
        "4",
        "Suggestion",
        "Great",
        "",
        "7"
      ],
      "line": 25,
      "id": "test-the-feedback-button-on-homepage;successful-submission-of-a-general-feedback;details;2"
    },
    {
      "cells": [
        "Home",
        "General",
        "5",
        "Compliment",
        "Awesome",
        "",
        "8"
      ],
      "line": 26,
      "id": "test-the-feedback-button-on-homepage;successful-submission-of-a-general-feedback;details;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5124969600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Successful submission of a general feedback",
  "description": "",
  "id": "test-the-feedback-button-on-homepage;successful-submission-of-a-general-feedback;details;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User has naviagted to the \"Home\" in Usabilla",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User wants to provide \"General\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User provides \"4\", \"Suggestion\", \"Great\", \"\", \"7\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to submit the Feedback",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 27
    }
  ],
  "location": "Steps.user_has_naviagted_to_the_in_Usabilla(String)"
});
formatter.result({
  "duration": 8741239491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "General",
      "offset": 23
    }
  ],
  "location": "Steps.user_wants_to_provide(String)"
});
formatter.result({
  "duration": 5550898129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 15
    },
    {
      "val": "Suggestion",
      "offset": 20
    },
    {
      "val": "Great",
      "offset": 34
    },
    {
      "val": "",
      "offset": 43
    },
    {
      "val": "7",
      "offset": 47
    }
  ],
  "location": "Steps.user_provides(String,String,String,String,String)"
});
formatter.result({
  "duration": 11150531675,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_be_able_to_submit_the_Feedback()"
});
formatter.result({
  "duration": 1045995046,
  "status": "passed"
});
formatter.after({
  "duration": 1352234802,
  "status": "passed"
});
formatter.before({
  "duration": 4166956947,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Successful submission of a general feedback",
  "description": "",
  "id": "test-the-feedback-button-on-homepage;successful-submission-of-a-general-feedback;details;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User has naviagted to the \"Home\" in Usabilla",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User wants to provide \"General\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User provides \"5\", \"Compliment\", \"Awesome\", \"\", \"8\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to submit the Feedback",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 27
    }
  ],
  "location": "Steps.user_has_naviagted_to_the_in_Usabilla(String)"
});
formatter.result({
  "duration": 8386195596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "General",
      "offset": 23
    }
  ],
  "location": "Steps.user_wants_to_provide(String)"
});
formatter.result({
  "duration": 5603239627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 15
    },
    {
      "val": "Compliment",
      "offset": 20
    },
    {
      "val": "Awesome",
      "offset": 34
    },
    {
      "val": "",
      "offset": 45
    },
    {
      "val": "8",
      "offset": 49
    }
  ],
  "location": "Steps.user_provides(String,String,String,String,String)"
});
formatter.result({
  "duration": 11213221969,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_be_able_to_submit_the_Feedback()"
});
formatter.result({
  "duration": 900958394,
  "status": "passed"
});
formatter.after({
  "duration": 2795416382,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Successful Cancellation of a general feedback",
  "description": "",
  "id": "test-the-feedback-button-on-homepage;successful-cancellation-of-a-general-feedback",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User has naviagted to the \"\u003cPage\u003e\" in Usabilla",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User wants to provide \"\u003cFeedback\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User provides \"\u003cRating\u003e\", \"\u003cSubject\u003e\", \"\u003cContent\u003e\", \"\u003cEmail\u003e\", \"\u003cRecommendation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User should be able to cancel the Feedback",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "Details",
  "description": "",
  "id": "test-the-feedback-button-on-homepage;successful-cancellation-of-a-general-feedback;details",
  "rows": [
    {
      "cells": [
        "Page",
        "Feedback",
        "Rating",
        "Subject",
        "Content",
        "Email",
        "Recommendation"
      ],
      "line": 35,
      "id": "test-the-feedback-button-on-homepage;successful-cancellation-of-a-general-feedback;details;1"
    },
    {
      "cells": [
        "Home",
        "General",
        "1",
        "Bug",
        "Issue",
        "test@example.com",
        "1"
      ],
      "line": 36,
      "id": "test-the-feedback-button-on-homepage;successful-cancellation-of-a-general-feedback;details;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4129332060,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Successful Cancellation of a general feedback",
  "description": "",
  "id": "test-the-feedback-button-on-homepage;successful-cancellation-of-a-general-feedback;details;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@End2EndTest"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User has naviagted to the \"Home\" in Usabilla",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User wants to provide \"General\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User provides \"1\", \"Bug\", \"Issue\", \"test@example.com\", \"1\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User should be able to cancel the Feedback",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 27
    }
  ],
  "location": "Steps.user_has_naviagted_to_the_in_Usabilla(String)"
});
formatter.result({
  "duration": 10658012697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "General",
      "offset": 23
    }
  ],
  "location": "Steps.user_wants_to_provide(String)"
});
formatter.result({
  "duration": 5600175284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    },
    {
      "val": "Bug",
      "offset": 20
    },
    {
      "val": "Issue",
      "offset": 27
    },
    {
      "val": "test@example.com",
      "offset": 36
    },
    {
      "val": "1",
      "offset": 56
    }
  ],
  "location": "Steps.user_provides(String,String,String,String,String)"
});
formatter.result({
  "duration": 11166898490,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_should_be_able_to_cancel_the_Feedback()"
});
formatter.result({
  "duration": 15241823845,
  "status": "passed"
});
formatter.after({
  "duration": 1099934983,
  "status": "passed"
});
});