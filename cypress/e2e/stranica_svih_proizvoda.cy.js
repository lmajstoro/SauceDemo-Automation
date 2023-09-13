import { prijava} from '../support/utils';
import korisnik from '../fixtures/podatci_za_prijavu.json'

describe('Testiranje stranice sevih proizvoda', () => {
  beforeEach(() => {
    prijava(korisnik.korisnik, korisnik.lozinka, {uspjeh:true})
  });

  it('Filter "Name A-Z" sortira proizvode po abecedi, uzlazno', () => {
    cy.get('.product_sort_container').select('Name (A to Z)');
    cy.dohvati_sve_artikle().then(artikli => {
      provjeri_poredak_a_z(artikli)
    });
  });

  it('Filter "Name Z-A" sortira proizvode po abecedi, silazno', () => {
    cy.get('.product_sort_container').select('Name (Z to A)');
    cy.dohvati_sve_artikle().then(artikli => { 
      provjeri_poredak_z_a(artikli)
    });
  });

  it('Filter "Price (low to high) sortira proizvode po cijeni, uzlazno', () => {
    cy.get('.product_sort_container').select('Price (low to high)');
    cy.dohvati_sve_artikle().then(artikli => {
      provjeri_poredak_manja_veca(artikli)
    });
  });

  it('Filter "Price (high to low)" sortira proizvode po cijeni, silazno', () => {
    cy.get('.product_sort_container').select('Price (high to low)');
    cy.dohvati_sve_artikle().then(artikli => {
      provjeri_poredak_veca_manja(artikli)
    });
  });

  it('Pritisak na proizvod otvara detaljan prikaz proizvoda', () => {
    cy.contains('Sauce Labs Backpack').click()
    cy.url().should('include', 'inventory-item');
  });

  it('Uspješno dodavanje proizvoda u košaricu i prikaz ikone na košarici', () => {
    cy.dodaj_proizvod_u_kosaricu()
  });

  it('Uspješno brisanje proizvoda iz košaricu i nestajanje ikone na košarici', () => {
    cy.dodaj_proizvod_u_kosaricu()
    cy.ukloni_proizvod_iz_kosarice()
  });
});

function provjeri_poredak_a_z(artikli) {
  let prethodni = null;

  artikli.forEach((cijena, naziv) => {
    if (prethodni !== null && naziv < prethodni) {
      cy.fail(`Artikli nisu abecedno poredani: ${naziv} dolazi poslje ${prethodni}`);
    }
    prethodni = naziv;
  });
}

function provjeri_poredak_z_a(artikli) {
  let prethodni = null;

  artikli.forEach((cijena, naziv) => {
    if (prethodni !== null && naziv > prethodni) {
      cy.fail(`Artikli nisu abecedno poredani: ${naziv} dolazi poslje ${prethodni}`);
    }
    prethodni = naziv;
  });
}

function provjeri_poredak_manja_veca(artikli) {
  let prethodni = null;

  artikli.forEach((cijena, naziv) => {
    let cijenaBroj = parseFloat(cijena.replace('$', ''));
    if (prethodni !== null && cijenaBroj < prethodni) {
      cy.fail(`Artikli nisu cijenovno poredani: ${cijena} dolazi poslje ${prethodni}`);
    }
    prethodni = cijenaBroj;
  });
}

function provjeri_poredak_veca_manja(artikli) {
  let prethodni = null;

  artikli.forEach((cijena, naziv) => {
    let cijenaBroj = parseFloat(cijena.replace('$', ''));
    if (prethodni !== null && cijenaBroj > prethodni) {
      cy.fail(`Artikli nisu cijenovno poredani: ${cijena} dolazi poslje ${prethodni}`);
    }
    prethodni = cijenaBroj;
  });
}