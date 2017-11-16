@testcompleted
Feature: As a user,
  I want to be able to filling the
  book your jet form and submit the form

  Background: Login
    Given I am on the "Login" page
    When I enter my "Username"
    And I enter my "Password"
    And I click login
    Then Homepage is displayed


  Scenario: Submit Book your jet form
    Given I click "Book Your Jet" nav bar
    And I enter "Start Destination"
    When I enter "End Destination"
    And I select the timezone
    And I click submit button
    Then a book your jet confirmation page is displayed.
