Feature: As a user,
  I want to be able to move
  the cursor on elements

  Background: login
    Given I am on the "Login" page
    When I enter my "Username"
    And I enter my "Password"
    And I click login
    Then Homepage is displayed

  Scenario: Mouse hover
    Given I mouse hover "On All" nav bar
    Then "Contact Support" page is displayed
