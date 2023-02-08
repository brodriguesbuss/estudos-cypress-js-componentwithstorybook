import InputField from '../input/InputField';

describe('InputField', () => { 

  //Verifica se o nome do input é Name
  it('should mount with label', () => {
    cy.mount(
      <InputField
        name="name"
        label="Name"
        requiredMessage="Name is required"
        submitted={false}
      />
    );
    cy.get('label').contains('Name');
  });

//Verifica se exibe a mensagem de alerta Name is required
  it('when there is no value and form is submitted, should show a required message', () => {
    cy.mount(
      <InputField
        name="name"
        label="Name"
        value={''}
        requiredMessage="Name is required"
        submitted={true}
        onChange={cy.spy()}
      />
    );
    cy.contains('Name is required');
  });

});
