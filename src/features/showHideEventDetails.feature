Feature: Show/hide event info

  Scenario: When the user opens the app the event detials is collapsed.
    Given the app is opened
    When the user has not clicked on the detials button
    Then the events will be collapsed.

  Scenario: When the user clicks on the detials button, more info will be displayed.
    Given the event is collapsed
    When the user clicks the button
    Then the detials will expand.

  Scenario: When the user clicks the button again, the detials will collapse.
    Given the event is expanded
    When the user clicks the button
    Then the event will collapse.