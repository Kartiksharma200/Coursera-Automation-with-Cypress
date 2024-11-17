

#Test Case 1: Verify Homepage Loads Successfully

  Scenario: User visits the Coursera homepage
  Background: Coursera
    Given I am on the Coursera homepage
    Then I should see the "Explore" button
    And I should see the "Login" button
    And the page should load without any errors