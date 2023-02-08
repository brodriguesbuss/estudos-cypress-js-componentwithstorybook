import LoginForm from './LoginForm';


describe('LoginForm', () => {

  //Verifica se o componente está iniciando corretamente
  it('should mount the component', () => {
    cy.mount(<LoginForm onLogin={() => { } }/>);
  });

  //Verifica se contem input de senha com tipo password
  it('should have password input of type password', () => {
    cy.mount(<LoginForm onLogin={() => { } } />);
    cy.contains('Password')
      .find('input')
      .should('have.attr', 'type', 'password');
  });

  //Verifica se está renderizando o título com o texto padrão 
  it('should render title with default text', () => {
    cy.mount(<LoginForm onLogin={() => { } } />);
    cy.get('legend').should('have.text', 'Log In');
  });

  //Verifica se está renderizando o título com o texto especificado
  it('should render title with specified text', () => {
    const title = 'Please Authenticate';
    cy.mount(<LoginForm title={title} onLogin={() => { } } />);
    cy.get('legend').should('have.text', title);
  });

  //Testes nos componentes do formulário
  describe('form tests', () => {
    const username = 'testuser123';
    const password = 's3cret';

    //Executa antes dos próximos testes
    //Essa execução adiciona um espião chamado onLoginSpy
    //Ele serve para gravar chamadas e argumentos da função
    //Ele tbm mapeou os elementos (input, password e button) e adicionou um alias para cada um, pra não ficar buscando elemento o tempo todo
    beforeEach(() => {
      const onLoginSpy = cy.spy().as('onLoginSpy');
      cy.mount(<LoginForm onLogin={onLoginSpy}  />);
      cy.contains('Username').find('input').as('usernameInput');
      cy.contains('Password').find('input').as('passwordInput');
      cy.get('button').contains('Login').as('loginButton');
    });

    //Verifica se está chamando o metodo onLogin quando o botão Login for acionado
    //Usa-se o espião para verificar essa chamada
    it('should call onLogin with username and password when the Login button is clicked', () => {
      cy.get('@usernameInput').type(username);
      cy.get('@passwordInput').type(password);
      cy.get('@loginButton').click();
      cy.get('@onLoginSpy').should('have.been.calledWith', {
        username,
        password,
      });
    });

    //Verifica se está chamando o metodo onLogin quando da Enter no teclado
    //Usa-se o espião para verificar essa chamada
    it('should call onLogin with username and password when enter is pressed in an input', () => {
      cy.get('@usernameInput').type(username);
      cy.get('@passwordInput').type(password).type('{enter}');
      cy.get('@onLoginSpy').should('have.been.calledWith', {
        username,
        password,
      });
    });

    //Verifica se está exibindo as mensagens de alerta quando os campos estão vazios
    //Verifica-se tambem se o espião capturou algum desparo, que nesse caso, não deveria
    it('should show both validation errors if login is attempted without entering username or password', () => {
      cy.get('@loginButton').click();
      cy.contains('Username is required');
      cy.contains('Password is required');
      cy.get('@onLoginSpy').should('not.have.been.called');
    });

    //Verifica se ao digitar apenas o nome e clicar no botão, a mensagem de alerta é exibida e se nao disparou algum evento
    it('should only show password validation error if login is attempted without entering password', () => {
      cy.get('@usernameInput').type(username);
      cy.get('@loginButton').click();
      cy.contains('Username is required').should('not.exist');
      cy.contains('Password is required');
      cy.get('@onLoginSpy').should('not.have.been.called');
    });


    //Verifica se ao digitar apenas a senha e clicar no botão, a mensagem de alerta é exibida e se nao disparou algum evento
    it('should only show username validation error if login is attempted without entering username', () => {
      cy.get('@passwordInput').type(password);
      cy.get('@loginButton').click();
      cy.contains('Username is required');
      cy.contains('Password is required').should('not.exist');
      cy.get('@onLoginSpy').should('not.have.been.called');
    });

    //não deve mostrar nenhum erro de validação antes da tentativa de login
    it('should not show any validation errors before login is attempted', () => {
      cy.contains('Username is required').should('not.exist');
      cy.contains('Password is required').should('not.exist');
    });
  });
}); 
