Feature: Run the Wiki searches for specific topics

  # Test case 1: Search for 'Australian Day' (then expected: "Australian national holiday")
  Scenario Outline: As a user, I can open Wikipedia, search for 'Australian Day' and data shown up correctly.
    Given I am on the main screen
    When I click on Next link
    And I click on Next link
    And I click on Next link
    And I click on Get started link
    And I click on Search Box
    And I enter "Australian Day" into Search Box
    And I wait for 1 seconds
    And I click on the first item of search result
    Then I should see "Australian national holiday" on the search result screen

  # Test case 2: Search for 'Test Automation' (then expected "Use a special software to control 
  #                                                           test execution and analysis")
  Scenario Outline: As a user, I can open Wikipedia, search for 'Test Automation' and data shown up correctly.
    Given I am on the main screen
    When I click on Search Box
    And I enter "Test Automation" into Search Box
    And I wait for 1 seconds
    And I click on the first item of search result
    Then I should see "Use of special software to control test execution and analysis" on the search result screen
