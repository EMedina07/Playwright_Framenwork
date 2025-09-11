Feature: Login

@test
Scenario Outline: Verify that the user ca access to the portal corporativo
  Given the user access to he login page with the "<user>"
  Then the user would be on the home page

  Examples:
    | user     |
    | emedina  |