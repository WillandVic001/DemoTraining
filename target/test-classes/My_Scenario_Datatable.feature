Feature: As a user, I want to be
  able to login using my username and
  password and confirm am on the home page


  Scenario: Login Datable Examples
    Given I am on the home page
    When I enter my Username and Password details as below
    | wegit | 12345678 |
    And I click login
    Then Homepage is displayed

