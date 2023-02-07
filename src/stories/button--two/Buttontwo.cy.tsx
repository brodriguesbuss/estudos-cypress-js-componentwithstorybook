import Buttontwo from './Buttontwo';

describe('Button', () => {
  it('should mount', () => {
    cy.mount(<Buttontwo>Click Me</Buttontwo>);

    cy.get('button').contains('Click Me');
  });

});
