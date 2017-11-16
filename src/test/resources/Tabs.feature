@testcompleted
Feature: As a user,
  I want to be able to click
  all the navigation menu and confirm
  displayed for the last one clicked.

  Background: login
    Given I am on the "Login" page
    When I enter my "Username"
    And I enter my "Password"
    And I click login
    Then Homepage is displayed

  Scenario: Click all tabs
    Given I click "On All" nav bar
    Then "Contact Support" page is displayed
