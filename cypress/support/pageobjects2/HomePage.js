
class HomePage{
    visit() {
        cy.visit('https://www.coursera.org/')
    }

    clickSignUp() {
        cy.xpath('//div[@class="cds-154"]').click()
    }

    clickLogin() {
        cy.xpath('//a[normalize-space()="Log In"]').click()
    }

    searchForCourse(){
        cy.get('#search-autocomplete-input').type("Introduction to Java")
        cy.get('#cds-react-aria-108-product-card-title').should('be.visible')
    }

    checkHeaderText() {
        cy.xpath('//img[@alt="Coursera"]').should('contain.text', 'Coursera');
    }

    clickMenuOption() {
        cy.xpath('//span[@class="css-m6j4lb"]').click();
    }
}

export default HomePage;