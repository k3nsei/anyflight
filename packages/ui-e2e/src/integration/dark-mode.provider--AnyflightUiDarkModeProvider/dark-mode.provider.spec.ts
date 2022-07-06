describe('ui: AnyflightUiDarkModeProvider component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=anyflightuidarkmodeprovider--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to AnyflightUiDarkModeProvider!');
  });
});
