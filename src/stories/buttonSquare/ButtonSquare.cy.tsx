import ButtonSquare from './ButtonSquare';

describe('ButtonSquare', () => {

  //Verifica se o nome do botão é Click Me
  it('should mount', () => {
    cy.mount(<ButtonSquare>Click Me</ButtonSquare>);
    cy.get('button').contains('Click Me');
  });

});
