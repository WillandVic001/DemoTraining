@testcompleted
Feature: As a user
  I want to be able to sign out
  once I have finish using the application

  Background: login
    Given I am on the "Login" page
    When I enter my "Username"
    And I enter my "Password"
    And I click login
    Then Homepage is displayed

  Scenario: Logout
    Given I click "logout" link
    Then I should be on the "Login" page.


