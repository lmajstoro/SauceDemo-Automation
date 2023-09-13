import { prijava} from '../support/utils';
import korisnik from '../fixtures/podatci_za_prijavu.json'

describe('Testiranje podnozja', () => {
  beforeEach(() => {
    prijava(korisnik.korisnik, korisnik.lozinka, {uspjeh:true})
  });

  it('Twitter ikona sadrži poveznicu na Twitter Saucelabs u novom prozoru', () => {
    var element = cy.get('.social_twitter').find('a')
    element.should('have.attr', 'href', 'https://twitter.com/saucelabs');
    element.should('have.attr', 'target', '_blank');
  });

  it('Facebook ikona sadrži poveznicu na Facebook Saucelabs u novom prozoru', () => {
    var element = cy.get('.social_facebook').find('a')
    element.should('have.attr', 'href', 'https://www.facebook.com/saucelabs');
    element.should('have.attr', 'target', '_blank');
  });

  it('Linkedin ikona sadrži poveznicu na Linkedin Saucelabs u novom prozoru', () => {
    var element = cy.get('.social_linkedin').find('a')
    element.should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/');
    element.should('have.attr', 'target', '_blank');
  });
});


