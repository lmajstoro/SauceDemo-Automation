import {login} from '../support/utils';
import user from '../fixtures/user_login_data.json'

describe('Testing footer', () => {
  beforeEach(() => {
    login(user.username, user.password, {uspjeh:true})
  });

  it('Twitter icon contains link to twitter page in new window', () => {
    var element = cy.get('.social_twitter').find('a')
    element.should('have.attr', 'href', 'https://twitter.com/saucelabs');
    element.should('have.attr', 'target', '_blank');
  });

  it('Facebook icon contains link to facebook page in new window', () => {
    var element = cy.get('.social_facebook').find('a')
    element.should('have.attr', 'href', 'https://www.facebook.com/saucelabs');
    element.should('have.attr', 'target', '_blank');
  });

  it('LinkedIn icon contains link to linkedin page in new window', () => {
    var element = cy.get('.social_linkedin').find('a')
    element.should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/');
    element.should('have.attr', 'target', '_blank');
  });
});


