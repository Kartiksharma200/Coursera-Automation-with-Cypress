  # Test Case 7: Verify User Logout
  Scenario: User logs out from the system
    Given I am logged in to the Coursera platform
    When I click on the "Logout" button
    Then I should be redirected to the Coursera homepage
    And I should see the "Login" button
    