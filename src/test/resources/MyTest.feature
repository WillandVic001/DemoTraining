Feature: As a user, I want to be
able to login using my username and
password and confirm am on the home page


Scenario: Login
Given I am on the home page
When I enter my username
And I enter my Password
And I click login
Then Homepage is displayed



# This is BDD meaning Behavioural Driven Development: This is when the feature are been describe as per user behaviour when using the
  # application.
  #  What is Gherkin DSL : Domain Specific Language
  # what are Gherkin Syntax are Given, When, Then, And and But [99% of time but will not be use]
  # Other syntax in Gherkin: Feature:, Scenario, Scenario Outline, Examples Table.