
# Coursera Website Testing

This repository contains the **automated test cases** and test execution results for the **Coursera Website**. The goal of this project is to verify the core functionalities of the website, including user login, course enrollment, payment gateway, video playback, mobile responsiveness, and more. The tests are written in **Cypress** using **Cucumber** for behavior-driven development (BDD).

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Test Plan](#test-plan)
- [Project Setup](#project-setup)
- [Running the Tests](#running-the-tests)
- [Test Execution](#test-execution)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project focuses on **automated testing** of key functionalities in the **Coursera website**, ensuring the website’s reliability and user experience across different browsers and devices. 

The tests cover various areas, such as:
- **Login/Registration functionality**
- **Course Enrollment**
- **Payment Gateway**
- **Video Playback**


### Test Approach
- **End-to-end (E2E) Testing**: Using **Cypress** to automate user interactions.
- **Behavior-Driven Development (BDD)**: Written in **Cucumber** with **Gherkin syntax** for better readability and collaboration.

- **Mobile Responsiveness**: Tests the UI's responsiveness across various screen sizes.

## Technologies Used

- **Cypress**: For automating the testing of web applications. Cypress helps in executing tests quickly and provides excellent debugging tools.
- **Cucumber**: For writing the test cases in **Gherkin syntax** that are easy to understand for both technical and non-technical team members.
- **JavaScript**: For writing custom commands and handling test scenarios.

- **Jira**: For bug tracking and project management.


## Test Plan

The main goal of this project is to ensure the core functionalities of the Coursera website are working seamlessly. Below are the test categories:

- **Functional Tests**: Testing critical user interactions like login, course search, enrollment, and payment.
- **UI/UX Tests**: Verifying layout and usability across devices.
- **Regression Tests**: Ensuring no existing functionality is broken after new updates.
- **Accessibility Tests**: Ensuring the platform is usable by people with disabilities, such as those using screen readers or keyboards for navigation.
- **Performance Tests**: Analyzing the page load times, especially under different network conditions and devices.

## Project Setup

### Prerequisites

Make sure you have the following installed on your local machine:
- **Node.js** (LTS version): [Download Node.js](https://nodejs.org/)
- **npm**: Node package manager (comes with Node.js)
- **Cypress**: Testing framework for front-end web apps
- **Cucumber**: For Behavior-Driven Development

### Installation Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/coursera-website-testing.git
    cd coursera-website-testing
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Set up Cypress**:
    Cypress should install automatically via the dependencies. To confirm the installation, you can open Cypress using:
    ```bash
    npx cypress open
    ```

4. **Install Cucumber preprocessor**:
    If not already installed, install the **Cypress Cucumber Preprocessor**:
    ```bash
    npm install --save-dev cypress-cucumber-preprocessor
    ```


