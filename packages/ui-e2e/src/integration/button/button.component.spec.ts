describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary&args=type:button;name;disabled;autofocus;'));
  it('should render the component', () => {
    cy.get('anyflight-button').should('exist');
  });
});
