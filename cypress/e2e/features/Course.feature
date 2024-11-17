  # Test Case 4: Verify Course Enrollment
  Scenario: User enrolls in a course successfully
    Given I am on the Coursera homepage
    And I search for a course "Data Science"
    When I click on the "Enroll" button for the course "Data Science"
    Then I should be redirected to the course enrollment page
    And I should see "Course Enrollment Successful" message

 # Test Case 5: Verify Payment Gateway Functionality
  Scenario: User completes a payment for a course
    Given I have added a course to my cart
    And I proceed to checkout
    When I enter payment details "valid credit card"
    And I click on the "Pay Now" button
    Then I should see a success message "Payment Successful"
    And the course should be unlocked for viewing

 # Test Case 6: Verify Video Playback Options
  Scenario: User changes video quality settings during course playback
    Given I am enrolled in a course
    And I am watching a video from the course
    When I click on the video quality settings
    And I select "1080p"
    Then the video should start playing in 1080p resolution