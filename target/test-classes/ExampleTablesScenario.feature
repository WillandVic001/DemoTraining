Feature: As a user, I want to be
  able to login using my username and
  password and confirm am on the home page


  Scenario Outline: Login
    Given I am on the home page
    When I enter my "Username" as "<Username_Details>"
    And I enter my "Password" as "<Password_Details>"
    And I click login
    Then Homepage is displayed

    Examples:
    | Username_Details   | Password_Details   |
    |       wegit        |      12345678      |
    |       wegitme      |      12345678      |

    #Assignment please add mini 3 more login user details in your own test
