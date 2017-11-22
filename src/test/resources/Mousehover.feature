Feature: As a user,
  I want to be able to move
  the cursor on elements

  Background: login
    Given I am on the home page
    When I enter my Username and Password details as below
      |       Montego001     |      12345678      |
    And I click login
    Then Homepage is displayed

  Scenario: Mouse hover
    Given I mouse hover "On All" nav bar
    Then "Home" page is displayed
