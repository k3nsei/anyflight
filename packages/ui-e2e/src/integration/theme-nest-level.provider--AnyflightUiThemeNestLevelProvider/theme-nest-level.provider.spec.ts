describe('ui: AnyflightUiThemeNestLevelProvider component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=anyflightuithemenestlevelprovider--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to AnyflightUiThemeNestLevelProvider!');
  });
});
