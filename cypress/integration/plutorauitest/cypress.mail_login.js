
  describe('A simple cypress automation', () => {
    context('720p resolution', () => {
      beforeEach(() => {
      cy.viewport(1280, 720)

      cy.visit('https://dashboard.cypress.io/login/email');
      
  })

    it('should login to cypress', function (){
      cy.login('mira_test@aol.com', 'W3lc0me123!')
      cy.url().should('include', '/organizations')

      /* ==== Generated with Cypress Studio ==== */
      /* ==== End Cypress Studio ==== */
    })
  })

    /* ==== Test Created with Cypress Studio ==== */
    it('TestPlutoraUI', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('https://dashboard.cypress.io/');
      cy.get('.btn-provider-email > :nth-child(2)').click();
      cy.get('#email').clear();
      cy.get('#email').type('mira_test@aol.com');
      cy.get('#password').clear();
      cy.get('#password').type('W3lc0me123!');
      cy.get('.btn-primary').click();
      cy.get('.organization-selection-option__button').click();
      cy.get('[data-cy=org-nav-projects-list] > li > .nav-item > .ellipsis').click();
      cy.get('.module-OnboardingChecklist__onboardingChecklistItemActive__11G_d').click();
      /* ==== End Cypress Studio ==== */
    });
  })