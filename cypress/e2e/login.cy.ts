/// <reference types="cypress" />

describe('Login Admin Test', () => {
  
  const Codigo_Estudiante = '64931';
  const password = 'Ing.sistemas07';
  const url = 'https://www.upbvirtual.net/upbvirtual/login/index.php'

  it('Should log in successfully', () => {
    cy.visit(url);

    // Insert data
    cy.get('input[name=Codigo_estudiante').type(Codigo_Estudiante)
    cy.get('input[name=password]').type(password)
    cy.contains('Login').click();

    // Verifity successful login
    cy.get('Login').should('not.exist')

  });
});