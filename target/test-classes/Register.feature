@testcompleted
Feature: As a user,
  I want to be able to register


  Background: Launch url and click register button
    Given I am on the home page
    When I click on "Register" button
    Then I am on the "Register" page

  Scenario: Register a user
    Given I am on the "Register" page
    And I enter my "email" in the "email" field
    When I enter my "Username" in the "Username" field
    And I enter my "Password" in the "Password" field
    And I enter my "Confirm Password" in the "Confirm Password" field
    Then I click on "Submit" button
    And Homepage is displayed