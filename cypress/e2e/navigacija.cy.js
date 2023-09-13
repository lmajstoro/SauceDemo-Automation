import { prijava} from '../support/utils';
import korisnik from '../fixtures/podatci_za_prijavu.json';

describe('Testiranje navigacije', () => {
  beforeEach(() => {
    prijava(korisnik.korisnik, korisnik.lozinka, {uspjeh:true})
  });
  
  it('Navigacija je otvorena klikom na ikonu', () => {
    otvori_izbornik()
  });

  it('Navigacija je zatvorena klikom na x', () => {
    otvori_izbornik()
    pritisni_x()
    cy.get('.bm-menu-wrap').should('have.attr', 'aria-hidden', 'true');
  });

  it('About opcija sadrži poveznicu na saucelabs.com', () => {
    otvori_izbornik()
    cy.get('#about_sidebar_link').should('have.attr', 'href', 'https://saucelabs.com/')
  });

  it('Logout opcija odjavljuje korisnika', () => {
    pritisni_logout()
    cy.get('.login_wrapper').should('exist')
  });

  it('Košarica je otvorena pritiskom na ikonu košarice', () => {
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

