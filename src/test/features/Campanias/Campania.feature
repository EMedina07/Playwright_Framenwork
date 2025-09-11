Feature: Campania Contact Center

@test
Scenario Outline: Verify that in workflow any campania can be seleted
  Given the user access to he login page with the "<user>"
  When the user select the "<campania>"
  Then the campania details should be show it

  Examples:
    | user     | campania                  |
    | emedina  | BASE UNIFICADA TU 2024-11 |
    | emedina  | SEGUNDA BASE TU 2024-12   |
    | emedina  | BASE RIESGOS 2025-01      |
    | emedina  | SPRINT 2.0 2025-01        |

