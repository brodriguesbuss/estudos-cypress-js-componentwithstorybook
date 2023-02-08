import Welcome from './Welcome';

describe('Welcome', () => {

  //Inicia o componente com o espião e verifica se contem texto padrão de bem vindo
  it('should mount with greeting', () => {
    cy.mount(
      <Welcome username="Test User" onLogout={cy.spy().as('onLogout')} />
    );
    cy.contains('Welcome Test User!');  
  });

  //Quando o botão de logout é clicado, onLogout deve ser chamado
  it('when the log out button is clicked, onLogout should be called', () => {
    cy.mount(
      <Welcome username="Test User" onLogout={cy.spy().as('onLogout')} />
    );
    cy.get('button').contains('Log Out').click();
    cy.get('@onLogout').should('have.been.called');
  });
});
