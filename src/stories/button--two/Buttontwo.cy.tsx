import Buttontwo from './Buttontwo';

describe('Button', () => {

  //Verifica se o nome do botão é Click Me
  it('should mount', () => {
    cy.mount(<Buttontwo>Click Me</Buttontwo>);
    cy.get('button').contains('Click Me');
  });

});
