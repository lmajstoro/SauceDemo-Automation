import user_info from '../fixtures/users.json';
import { login } from '../support/utils';

describe('Testing user login', () => {
  user_info.users.forEach((user) => {
    it(`${user.test_name}`, () => {
      login(user.username, user.password, {
        uspjeh: user.success,
        greska: user.error_text,
      });
    });
  });
});
