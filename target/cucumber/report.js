$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BookYourJet.feature");
formatter.feature({
  "line": 2,
  "name": "As a user,",
  "description": "I want to be able to filling the\r\nbook your jet form and submit the form",
  "id": "as-a-user,",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testcompleted"
    }
  ]
});
formatter.before({
  "duration": 8292156248,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter my Username and Password details as below",
  "rows": [
    {
      "cells": [
        "montego001",
        "12345678"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MyFirstTest.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 6578828509,
  "status": "passed"
});
formatter.match({
  "location": "My_Scenario_Datatable_Stepdef.i_enter_my_Username_and_Password_details_as_below(DataTable)"
});
formatter.result({
  "duration": 542399504,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.i_click_login()"
});
formatter.result({
  "duration": 4705263365,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.homepage_is_displayed()"
});
formatter.result({
  "duration": 7015875766,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Submit Book your jet form",
  "description": "",
  "id": "as-a-user,;submit-book-your-jet-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I click \"Book Your Jet\" nav bar",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I enter \"Start Destination\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"End Destination\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I select the timezone",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click submit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "a book your jet confirmation page is displayed.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Book Your Jet",
      "offset": 9
    }
  ],
  "location": "BookYourJet.i_click_nav_bar(String)"
});
formatter.result({
  "duration": 3917973569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Start Destination",
      "offset": 9
    }
  ],
  "location": "BookYourJet.i_enter(String)"
});
formatter.result({
  "duration": 3043781262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "End Destination",
      "offset": 9
    }
  ],
  "location": "BookYourJet.i_enter(String)"
});
formatter.result({
  "duration": 3033185208,
  "status": "passed"
});
formatter.match({
  "location": "BookYourJet.i_select_the_timezone()"
});
formatter.result({
  "duration": 262843132,
  "status": "passed"
});
formatter.match({
  "location": "BookYourJet.i_click_submit_button()"
});
formatter.result({
  "duration": 3809920486,
  "status": "passed"
});
formatter.match({
  "location": "BookYourJet.a_book_your_jet_confirmation_page_is_displayed()"
});
formatter.result({
  "duration": 70821340,
  "status": "passed"
});
formatter.after({
  "duration": 1213358133,
  "status": "passed"
});
formatter.uri("ExampleTablesScenario.feature");
formatter.feature({
  "line": 1,
  "name": "As a user, I want to be",
  "description": "able to login using my username and\r\npassword and confirm am on the home page",
  "id": "as-a-user,-i-want-to-be",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login",
  "description": "",
  "id": "as-a-user,-i-want-to-be;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter my \"Username\" as \"\u003cUsername_Details\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter my \"Password\" as \"\u003cPassword_Details\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Homepage is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "as-a-user,-i-want-to-be;login;",
  "rows": [
    {
      "cells": [
        "Username_Details",
        "Password_Details"
      ],
      "line": 14,
      "id": "as-a-user,-i-want-to-be;login;;1"
    },
    {
      "cells": [
        "montego001",
        "12345678"
      ],
      "line": 15,
      "id": "as-a-user,-i-want-to-be;login;;2"
    },
    {
      "cells": [
        "wegitme",
        "12345678"
      ],
      "line": 16,
      "id": "as-a-user,-i-want-to-be;login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8360573530,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login",
  "description": "",
  "id": "as-a-user,-i-want-to-be;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter my \"Username\" as \"montego001\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter my \"Password\" as \"12345678\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MyFirstTest.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 6123035872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 12
    },
    {
      "val": "montego001",
      "offset": 26
    }
  ],
  "location": "ExampleTableScenarioStepDef.i_enter_my_as(String,String)"
});
formatter.result({
  "duration": 2136140571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 12
    },
    {
      "val": "12345678",
      "offset": 26
    }
  ],
  "location": "ExampleTableScenarioStepDef.i_enter_my_as(String,String)"
});
formatter.result({
  "duration": 2047302959,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.i_click_login()"
});
formatter.result({
  "duration": 1689033427,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.homepage_is_displayed()"
});
formatter.result({
  "duration": 7007165730,
  "status": "passed"
});
formatter.after({
  "duration": 1952572440,
  "status": "passed"
});
formatter.before({
  "duration": 8223877537,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login",
  "description": "",
  "id": "as-a-user,-i-want-to-be;login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter my \"Username\" as \"wegitme\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter my \"Password\" as \"12345678\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MyFirstTest.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 5254948670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 12
    },
    {
      "val": "wegitme",
      "offset": 26
    }
  ],
  "location": "ExampleTableScenarioStepDef.i_enter_my_as(String,String)"
});
formatter.result({
  "duration": 2096632394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 12
    },
    {
      "val": "12345678",
      "offset": 26
    }
  ],
  "location": "ExampleTableScenarioStepDef.i_enter_my_as(String,String)"
});
formatter.result({
  "duration": 2088349401,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.i_click_login()"
});
formatter.result({
  "duration": 911453501,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.homepage_is_displayed()"
});
formatter.result({
  "duration": 7017118386,
  "status": "passed"
});
formatter.after({
  "duration": 919332860,
  "status": "passed"
});
formatter.uri("LogoutFirst.feature");
formatter.feature({
  "line": 2,
  "name": "As a user",
  "description": "I want to be able to sign out\r\nonce I have finish using the application",
  "id": "as-a-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testcompleted"
    }
  ]
});
formatter.before({
  "duration": 8450630352,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 6,
      "value": "# test was been deprecated meaning there is a latest test that has already got the coverage."
    },
    {
      "line": 7,
      "value": "#Background: login"
    },
    {
      "line": 8,
      "value": "# Given I am on the \"Login\" page"
    },
    {
      "line": 9,
      "value": "# When I enter my \"Username\""
    },
    {
      "line": 10,
      "value": "# And I enter my \"Password\""
    },
    {
      "line": 11,
      "value": "# And I click login"
    },
    {
      "line": 12,
      "value": "# Then Homepage is displayed"
    }
  ],
  "line": 14,
  "name": "login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 15,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter my Username and Password details as below",
  "rows": [
    {
      "cells": [
        "montego001",
        "12345678"
      ],
      "line": 17
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MyFirstTest.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 5121441347,
  "status": "passed"
});
formatter.match({
  "location": "My_Scenario_Datatable_Stepdef.i_enter_my_Username_and_Password_details_as_below(DataTable)"
});
formatter.result({
  "duration": 172987937,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.i_click_login()"
});
formatter.result({
  "duration": 1674246226,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.homepage_is_displayed()"
});
formatter.result({
  "duration": 7007634686,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Logout",
  "description": "",
  "id": "as-a-user;logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click \"logout\" link",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I should be on the \"Login\" page.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "logout",
      "offset": 9
    }
  ],
  "location": "LogoutMain.i_click_link(String)"
});
formatter.result({
  "duration": 524089473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 20
    }
  ],
  "location": "LogoutMain.i_should_be_on_the_page(String)"
});
formatter.result({
  "duration": 5022077533,
  "status": "passed"
});
formatter.after({
  "duration": 1721828594,
  "status": "passed"
});
formatter.uri("Mousehover.feature");
formatter.feature({
  "line": 1,
  "name": "As a user,",
  "description": "I want to be able to move\r\nthe cursor on elements",
  "id": "as-a-user,",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7434624697,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter my Username and Password details as below",
  "rows": [
    {
      "cells": [
        "Montego001",
        "12345678"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MyFirstTest.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 4755687029,
  "status": "passed"
});
formatter.match({
  "location": "My_Scenario_Datatable_Stepdef.i_enter_my_Username_and_Password_details_as_below(DataTable)"
});
formatter.result({
  "duration": 166583410,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.i_click_login()"
});
formatter.result({
  "duration": 1956322951,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.homepage_is_displayed()"
});
formatter.result({
  "duration": 7011011769,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Mouse hover",
  "description": "",
  "id": "as-a-user,;mouse-hover",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I  hover the mouse \"On All\" nav bar",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "\"Home\" page is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "On All",
      "offset": 20
    }
  ],
  "location": "Mousehoverstepdef.i_hover_the_mouse_nav_bar(String)"
});
formatter.result({
  "duration": 9326111720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 1
    }
  ],
  "location": "AllTabsStepDef.page_is_displayed(String)"
});
formatter.result({
  "duration": 7013116783,
  "status": "passed"
});
formatter.after({
  "duration": 1135957822,
  "status": "passed"
});
formatter.uri("My_Scenario_Datatable.feature");
formatter.feature({
  "line": 1,
  "name": "As a user, I want to be",
  "description": "able to login using my username and\r\npassword and confirm am on the home page",
  "id": "as-a-user,-i-want-to-be",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8378330405,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Login Datable Examples",
  "description": "",
  "id": "as-a-user,-i-want-to-be;login-datable-examples",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter my Username and Password details as below",
  "rows": [
    {
      "cells": [
        "montego001",
        "12345678"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MyFirstTest.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 6407559321,
  "status": "passed"
});
formatter.match({
  "location": "My_Scenario_Datatable_Stepdef.i_enter_my_Username_and_Password_details_as_below(DataTable)"
});
formatter.result({
  "duration": 216067276,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.i_click_login()"
});
formatter.result({
  "duration": 1920175998,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.homepage_is_displayed()"
});
formatter.result({
  "duration": 7007201601,
  "status": "passed"
});
formatter.after({
  "duration": 1128904234,
  "status": "passed"
});
formatter.uri("Register.feature");
formatter.feature({
  "line": 2,
  "name": "As a user,",
  "description": "I want to be able to register",
  "id": "as-a-user,",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testcompleted"
    }
  ]
});
formatter.before({
  "duration": 8378555066,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "Launch url and click register button",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on \"Register\" button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I am on the \"Register\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyFirstTest.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 7947712973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 12
    }
  ],
  "location": "RegisterStepdef.i_click_on_button(String)"
});
formatter.result({
  "duration": 759139629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 13
    }
  ],
  "location": "RegisterStepdef.i_am_on_the_page(String)"
});
formatter.result({
  "duration": 8917706,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Register a user",
  "description": "",
  "id": "as-a-user,;register-a-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on the \"Register\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter my \"email\" in the \"email\" field",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter my \"Username\" in the \"Username\" field",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter my \"Password\" in the \"Password\" field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter my \"Confirm Password\" in the \"Confirm Password\" field",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on \"Submit\" button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Homepage is displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 13
    }
  ],
  "location": "RegisterStepdef.i_am_on_the_page(String)"
});
formatter.result({
  "duration": 11370849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 12
    },
    {
      "val": "email",
      "offset": 27
    }
  ],
  "location": "RegisterStepdef.i_enter_my_in_the_field(String,String)"
});
formatter.result({
  "duration": 85394831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 12
    },
    {
      "val": "Username",
      "offset": 30
    }
  ],
  "location": "RegisterStepdef.i_enter_my_in_the_field(String,String)"
});
formatter.result({
  "duration": 50392703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 12
    },
    {
      "val": "Password",
      "offset": 30
    }
  ],
  "location": "RegisterStepdef.i_enter_my_in_the_field(String,String)"
});
formatter.result({
  "duration": 82772531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confirm Password",
      "offset": 12
    },
    {
      "val": "Confirm Password",
      "offset": 38
    }
  ],
  "location": "RegisterStepdef.i_enter_my_in_the_field(String,String)"
});
formatter.result({
  "duration": 69996704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit",
      "offset": 12
    }
  ],
  "location": "RegisterStepdef.i_click_on_button(String)"
});
formatter.result({
  "duration": 1099141796,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.homepage_is_displayed()"
});
formatter.result({
  "duration": 7011687640,
  "status": "passed"
});
formatter.after({
  "duration": 858760198,
  "status": "passed"
});
formatter.uri("Tabs.feature");
formatter.feature({
  "line": 2,
  "name": "As a user,",
  "description": "I want to be able to click\r\nall the navigation menu and confirm\r\ndisplayed for the last one clicked.",
  "id": "as-a-user,",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testcompleted"
    }
  ]
});
formatter.before({
  "duration": 7338751619,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter my Username and Password details as below",
  "rows": [
    {
      "cells": [
        "montego001",
        "12345678"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MyFirstTest.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 8543856967,
  "status": "passed"
});
formatter.match({
  "location": "My_Scenario_Datatable_Stepdef.i_enter_my_Username_and_Password_details_as_below(DataTable)"
});
formatter.result({
  "duration": 187940896,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.i_click_login()"
});
formatter.result({
  "duration": 1896954017,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.homepage_is_displayed()"
});
formatter.result({
  "duration": 7009274520,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Click all tabs",
  "description": "",
  "id": "as-a-user,;click-all-tabs",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@TestCompleted"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I click \"On All\" nav bar",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "\"Contact Support\" page is displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "On All",
      "offset": 9
    }
  ],
  "location": "BookYourJet.i_click_nav_bar(String)"
});
formatter.result({
  "duration": 2858596328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact Support",
      "offset": 1
    }
  ],
  "location": "AllTabsStepDef.page_is_displayed(String)"
});
formatter.result({
  "duration": 3008870509,
  "status": "passed"
});
formatter.after({
  "duration": 1115242224,
  "status": "passed"
});
});