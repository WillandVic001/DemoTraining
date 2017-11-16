$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ExampleTablesScenario.feature");
formatter.feature({
  "line": 2,
  "name": "As a user, I want to be",
  "description": "able to login using my username and\r\npassword and confirm am on the home page",
  "id": "as-a-user,-i-want-to-be",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@gmail"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login with parameter",
  "description": "",
  "id": "as-a-user,-i-want-to-be;login-with-parameter",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter my \"Username\" as \"\u003cUsername_Details\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter my \"Password\" as \"\u003cPassword_Details\u003e\"",
  "keyword": "And "
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
formatter.examples({
  "line": 14,
  "name": "Login Details",
  "description": "",
  "id": "as-a-user,-i-want-to-be;login-with-parameter;login-details",
  "rows": [
    {
      "cells": [
        "Username_Details",
        "Password_Details"
      ],
      "line": 15,
      "id": "as-a-user,-i-want-to-be;login-with-parameter;login-details;1"
    },
    {
      "cells": [
        "wegit",
        "12345678"
      ],
      "line": 16,
      "id": "as-a-user,-i-want-to-be;login-with-parameter;login-details;2"
    },
    {
      "cells": [
        "wegitme",
        "12345678"
      ],
      "line": 17,
      "id": "as-a-user,-i-want-to-be;login-with-parameter;login-details;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7135419821,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login with parameter",
  "description": "",
  "id": "as-a-user,-i-want-to-be;login-with-parameter;login-details;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@gmail"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter my \"Username\" as \"wegit\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter my \"Password\" as \"12345678\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
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
  "duration": 14176544817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 12
    },
    {
      "val": "wegit",
      "offset": 26
    }
  ],
  "location": "ExampleTableScenarioStepDef.i_enter_my_as(String,String)"
});
formatter.result({
  "duration": 167727544,
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
  "duration": 125202100,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.i_click_login()"
});
formatter.result({
  "duration": 7164016300,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.homepage_is_displayed()"
});
formatter.result({
  "duration": 7009169556,
  "status": "passed"
});
formatter.after({
  "duration": 595529894,
  "status": "passed"
});
formatter.before({
  "duration": 3853661290,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login with parameter",
  "description": "",
  "id": "as-a-user,-i-want-to-be;login-with-parameter;login-details;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@gmail"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter my \"Username\" as \"wegitme\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter my \"Password\" as \"12345678\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
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
  "duration": 11410317327,
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
  "duration": 145326415,
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
  "duration": 109795661,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.i_click_login()"
});
formatter.result({
  "duration": 5911497267,
  "status": "passed"
});
formatter.match({
  "location": "MyFirstTest.homepage_is_displayed()"
});
formatter.result({
  "duration": 7008636034,
  "status": "passed"
});
formatter.after({
  "duration": 689259102,
  "status": "passed"
});
});