@testcompleted
Feature: As a user,
  I want to be able to filling the
  book your jet form and submit the form

  Background: Login
    Given I am on the home page
    When I enter my Username and Password details as below
      |       montego001     |      12345678      |
    And I click login
    Then Homepage is displayed


    @TestCompleted
  Scenario: Submit Book your jet form
    Given I click "Book Your Jet" nav bar
    And I enter "Start Destination"
    When I enter "End Destination"
    And I select the timezone
    And I click submit button
    Then a book your jet confirmation page is displayed.
