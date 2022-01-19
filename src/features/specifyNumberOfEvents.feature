Feature: Specify number of events

  Scenario: 32 events should be displayed by default when the app is opened.
    Given the user opens the app
    When the events are loaded
    Then 32 events will be displayed (2 for mockData)

  Scenario: When the user inputs a new number into the input, the number of events displayed will match.
    Given the app is open
    When the user inputs a number
    Then the number of events displayed will change 