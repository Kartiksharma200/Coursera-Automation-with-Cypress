# Test Case 2: Verify Login with Valid Credentials
  Scenario: User logs in with valid credentials
    Given I am on the Coursera login page
    And I enter a valid email "user@example.com"
    And I enter a valid password "password123"
    When I click on the "Login" button
    Then I should be redirected to the dashboard page
    And I should see "Welcome, User" on the dashboard

  # Test Case 3: Verify Login with Invalid Credentials
  Scenario: User attempts to log in with invalid credentials
    Given I am on the Coursera login page
    And I enter an invalid email "invaliduser@example.com"
    And I enter an invalid password "wrongpassword"
    When I click on the "Login" button
    Then I should see an error message "Invalid username or password"