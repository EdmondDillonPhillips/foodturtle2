describe('Food Turtle Kiosk', () => {
  it('shows the Welcome Screen', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Welcome to Food Turtle').should('be.visible');
    cy.contains('Start Shopping').should('be.visible');
  });
});