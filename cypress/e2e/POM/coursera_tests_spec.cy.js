import HomePage from "../../support/pageobjects2/Homepage";

describe('Coursera Home Page Tests', () => {
    const homePage = new HomePage();
    it('should load the homepage and display correct header text', () => {
        homePage.visit();
        homePage.checkHeaderText();
    });

    it('should navigate to the login page when clicking login', () => {
        homePage.visit();
        homePage.clickLogin();
        cy.url().should('include', '/login');
    });

    it('should navigate to the signup page when clicking sign up', () => {
        homePage.visit();
        homePage.clickSignUp();
        cy.url().should('include', '/signup');
    });
    
    it('should search for a course and display results', () => {
        homePage.visit();
        homePage.searchForCourse('JavaScript');
    });
});


import LoginPage from "../../support/pageobjects2/LoginPage";

describe('Coursera Login Tests', () => {
    const loginPage = new LoginPage();

    it('should show error message when login fails', () => {
        loginPage.visit();
        loginPage.typeEmail('invalid@example.com');
        loginPage.typePassword('invalidpassword');
        loginPage.submitLogin();
        loginPage.checkErrorMessage();
    });

    it('should successfully login with valid credentials', () => {
        loginPage.visit();
        loginPage.typeEmail('Kartikgautam1106@gmail.com');
        loginPage.typePassword('Jaishreeram123');
        loginPage.submitLogin();
        cy.url().should('include', '/dashboard');
      });
});


import CoursePage from "../../support/pageobjects2/CoursePage";

describe('Coursera Course Tests', () => {
    const coursePage = new CoursePage();
  
    it('should verify course title', () => {
      coursePage.visit('https://www.coursera.org/search?query=javascript%20for%20beginners');
      coursePage.verifyCourseTitle('JavaScript for Beginners');
    });
  
    it('should enroll in the course successfully', () => {
      coursePage.visit('https://www.coursera.org/specializations/javascript-beginner');
      coursePage.clickEnrollButton();
      coursePage.checkEnrollmentSuccess();
    });
  });