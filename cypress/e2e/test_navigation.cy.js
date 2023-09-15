import {login} from '../support/utils';
import user from '../fixtures/user_login_data.json';

describe('Testing navigation', () => {
  beforeEach(() => {
    login(user.username, user.password, {uspjeh:true})
  });
  
  it('Click on hamburger icon opens navigation', () => {
    open_menu()
  });

  it('Click on "x" icon closes navigation', () => {
    open_menu()
    close_menu()
    cy.get('.bm-menu-wrap').should('have.attr', 'aria-hidden', 'true');
  });

  it('About option contains link to saucelabs.com', () => {
    open_menu()
    cy.get('#about_sidebar_link').should('have.attr', 'href', 'https://saucelabs.com/')
  });

  it('Click on logout logs user out', () => {
    logout_user()
    cy.get('.login_wrapper').should('exist')
  });

  it('Click on cart icon opens cart page', () => {
    cy.open_cart()
    cy.get('#cart_contents_container').should('exist')
  });
});

function open_menu()
{
  cy.get('#react-burger-menu-btn').click()
  cy.get('.bm-menu-wrap').should('have.attr', 'aria-hidden', 'false');
}

function close_menu()
{
  cy.get('#react-burger-cross-btn').click()
}

function logout_user()
{
  open_menu()
  cy.get('#logout_sidebar_link').click()
}

