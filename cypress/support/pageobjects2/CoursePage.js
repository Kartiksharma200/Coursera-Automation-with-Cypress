
class CoursePage {
    visit () {
        cy.visit('https://www.coursera.org/search?query=javascript%20for%20beginners');
    }

    verifyCourseTittle() {
        cy.get('#cds-react-aria-193-product-card-title').should('contain.text', 'JavaScript for Beginners').click();
    }

    clickEnrollButton() {
        cy.xpath('//button[@class="cds-149 cds-button-disableElevation cds-button-primary css-rovixp"]').click();
    }

    checkEnrollmentSuccess() {
        cy.get('.enrollment-status').should('contain.text', 'Enrolled');
    }
}

export default CoursePage;
