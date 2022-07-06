describe('ui: SideNavItem component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sidenavitem--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to SideNavItem!');
  });
});
