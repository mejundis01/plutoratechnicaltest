
//describe("Aol mailbox", function() {
  describe('Nav Menus', () => {
    context('720p resolution', () => {
      beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
      cy.viewport(1280, 720)
    })
    it('Get, types and asserts', function (){
      cy.visit('https://dashboard.cypress.io/login/email');

      
      cy.get('#email').should('be.visible')
      .type('mira_test@aol.com')
      cy.get('#password').type('W3lc0me123!')
      cy.get('button[type=submit]').click()

      cy.url().should('include', '/organizations')
    })
  })
})