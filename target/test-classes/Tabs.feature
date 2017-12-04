@testcompleted
Feature: As a user,
  I want to be able to click
  all the navigation menu and confirm
  displayed for the last one clicked.

  Background: login
    Given I am on the home page
    When I enter my Username and Password details as below
      |       montego001     |      12345678      |
    And I click login
    Then Homepage is displayed

  @TestCompleted
  Scenario: Click all tabs
    Given I click "On All" nav bar
    Then "Contact Support" page is displayed
