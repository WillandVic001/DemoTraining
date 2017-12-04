Feature: As a user, I want to be
  able to login using my username and
  password and confirm am on the home page

  @TestCompleted
  Scenario: Login Datable Examples
    Given I am on the home page
    When I enter my Username and Password details as below
      |       montego001     |      12345678      |
    And I click login
    Then Homepage is displayed


    # Write how to have the repository on your machine
  # This is basically doing "git clone"