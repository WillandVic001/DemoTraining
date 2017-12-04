@testcompleted
Feature: As a user
  I want to be able to sign out
  once I have finish using the application

  # test was been deprecated meaning there is a latest test that has already got the coverage.
   #Background: login
   # Given I am on the "Login" page
   # When I enter my "Username"
   # And I enter my "Password"
   # And I click login
   # Then Homepage is displayed

  Background: login
  Given I am on the home page
  When I enter my Username and Password details as below
  |       montego001     |      12345678      |
  And I click login
  Then Homepage is displayed

  @TestCompleted
  Scenario: Logout
    Given I click "logout" link
    Then I should be on the "Login" page.


