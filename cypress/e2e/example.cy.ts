/// <reference types="@applitools/eyes-cypress" />

describe('example', () => {
  it('should pass', () => {
        cy.visit('https://www.example.com');

        cy.eyesOpen({
            appName: 'Cypress Test',
            testName: 'Cypress Test'
        })

        cy.eyesCheckWindow({
            tag: "Google Page",
            target: 'window',
            fully: true
        });

        cy.eyesClose()
  });
});
