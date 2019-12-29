context('Policy manager', () => {

  const sampleResourceCode = 'account:eq:test-arns/something,account:wq:test-arns/virtual';

  beforeEach(() => {
    cy.visit('/')
  });

  it('should generate policy when user input valid inputs', () => {
    cy.get('.p-dropdown').click().find('.p-dropdown-item').eq(3).click();
    cy.get('.p-multiselect').click().find('.p-multiselect-item').eq(1).click();
    cy.get('.p-multiselect-item').eq(2).click();
    cy.get('.p-inputtext.input-box-resource').type(sampleResourceCode, {force: true});
    cy.get('.btn-add-statement').should('not.be.disabled');
    cy.get('.btn-add-statement').click();
    cy.get('.p-datatable').should('exist');
    cy.get('.p-datatable-row').children().eq(2).should('have.text', sampleResourceCode);
    cy.get('.btn-generate-policy').should('not.be.disabled');
    cy.get('.btn-generate-policy').click();
  });

  it('should reset actions input when user select a different policy', () => {
    cy.get('.p-dropdown').click().find('.p-dropdown-item').first().click();
    cy.get('.p-dropdown-label').should('have.text', 'Location');
    cy.get('.p-multiselect').click().find('.p-multiselect-item').click({multiple: true});
    cy.get('.p-dropdown').click().find('.p-dropdown-item').eq(2).click();
    cy.get('.p-multiselect-label').should('not.have.text');
  });
});
