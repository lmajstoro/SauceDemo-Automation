import { prijava} from '../support/utils';
import korisnik from '../fixtures/user_login_data.json';

describe('Testing navigation', () => {
  beforeEach(() => {
    prijava(korisnik.korisnik, korisnik.lozinka, {uspjeh:true})
  });
  
  it('Click on hamburger icon opens navigation', () => {
    otvori_izbornik()
  });

  it('Click on "x" icon closes navigation', () => {
    otvori_izbornik()
    pritisni_x()
    cy.get('.bm-menu-wrap').should('have.attr', 'aria-hidden', 'true');
  });

  it('About option contains link to saucelabs.com', () => {
    otvori_izbornik()
    cy.get('#about_sidebar_link').should('have.attr', 'href', 'https://saucelabs.com/')
  });

  it('Click on logout logs user out', () => {
    pritisni_logout()
    cy.get('.login_wrapper').should('exist')
  });

  it('Click on cart icon opens cart page', () => {
    cy.pritisni_kosaricu()
    cy.get('#cart_contents_container').should('exist')
  });
});

function otvori_izbornik()
{
  pritisni_hamburger()
  cy.get('.bm-menu-wrap').should('have.attr', 'aria-hidden', 'false');
}

function pritisni_hamburger()
{
  cy.get('#react-burger-menu-btn').click()
}

function pritisni_x()
{
  cy.get('#react-burger-cross-btn').click()
}

function pritisni_logout()
{
  otvori_izbornik()
  cy.get('#logout_sidebar_link').click()
}

