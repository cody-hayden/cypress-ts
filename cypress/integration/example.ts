describe('example', () => {
  it('should pass', () => {
        cy.visit('https://www.google.com');

        cy.eyesOpen({
            appName: 'Cypress Test',
            testName: 'Cypress Test',
        })

        cy.eyesCheckWindow({
            tag: "Google Page",
            target: 'window',
            fully: true
        });

        cy.eyesClose()
  });
});
