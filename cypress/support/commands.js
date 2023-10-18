Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Ariana')
    cy.get('#lastName').type('Oliveira')
    cy.get('#email').type('ari@teste.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button' , 'Enviar').click()
})