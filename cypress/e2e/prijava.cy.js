import podatci from '../fixtures/korisnici.json';
import { prijava } from '../support/utils';

describe('Testiranje prijave korisnika', () => {
  podatci.korisnici.forEach((korisnik) => {
    it(`${korisnik.test}`, () => {
      prijava(korisnik.ime, korisnik.lozinka, {
        uspjeh: korisnik.uspjeh,
        greska: korisnik.greska,
      });
    });
  });
});
