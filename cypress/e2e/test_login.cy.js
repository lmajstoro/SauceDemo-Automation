import user_info from '../fixtures/users.json';
import { login } from '../support/utils';

describe('Testing user login', () => {
  user_info.users.forEach((korisnik) => {
    it(`${korisnik.test_name}`, () => {
      login(korisnik.username, korisnik.password, {
        uspjeh: korisnik.success,
        greska: korisnik.error_text,
      });
    });
  });
});
