
Feature: As a user, I want to be
  able to login using my username and
  password and confirm am on the home page



  # test is been deprecated meaning there is a latest test that has already got the coverage.
  Scenario: Login
    Given I am on the home page
    When I enter my "Username"
    And I enter my "Password"
    And I click login
    Then Homepage is displayed



    # And and When : Cucumber will interpret them to be the same
