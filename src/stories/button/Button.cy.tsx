import Button from "./Button";

describe('Button', () => {


  //Verifica se o nome do botão é Button
  it('should mount', () => {
    cy.mount(<Button label={"Button"} size={"large"} backgroundColor={"#1ea7fd"}></Button>)

    cy.get('button').contains('Button');
  });

  //Clica no botão
  it('should mount', () => {
    cy.mount(<Button label={"Button"} size={"large"} backgroundColor={"#1ea7fd"}></Button>);

    cy.get('button').click();
  });

});
