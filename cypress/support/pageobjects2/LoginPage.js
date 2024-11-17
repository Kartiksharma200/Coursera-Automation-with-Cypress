class LoginPage {
    visit() {
        cy.visit('https://www.coursera.org/?authMode=login');
    }

    typeEmail() {
        cy.get('#cds-react-aria-109').type('Kartikgautam1106@gmail.com');
    }

    typePassword(){
        cy.get('#cds-react-aria-110').type('Jaishreeram123');
    }

    submitLogin(){
        cy.xpath('//button[@type="submit"]').click();
    }

    checkErrorMsg (){
        cy.xpath('//div[@role="alert"]').should('be.visible');
    }
}

export default LoginPage;