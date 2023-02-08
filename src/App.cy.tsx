import App from "./App";

describe('LoginForm', () => {

  //deve redirecionar para a tela de boas-vindas quando os créditos estiverem corretos
  it('should redirect to welcome screen when creds are correct', () => {
    cy.mount(<App />);
    cy.contains('Username').find('input').type('testuser');
    cy.contains('Password').find('input').type('testpassword');
    cy.intercept('POST', '/auth', {
      statusCode: 200,
      body: {
        message: 'Authenticated',
      },
    });
    cy.get('button').contains('Login').as('loginButton').click();
    cy.contains('Welcome testuser!');
  });

  //deve mostrar mensagem de erro quando os créditos estão incorretos
  it('should show error message when creds are incorrect', () => {
    cy.mount(<App />);
    cy.contains('Username').find('input').type('baduser');
    cy.contains('Password').find('input').type('badpassword');
    cy.intercept('POST', '/auth', {
      statusCode: 401,
      body: {
        message: 'Bad username or password',
      },
    });
    cy.get('button').contains('Login').as('loginButton').click();
    cy.contains('Bad username or password');
  });
});
