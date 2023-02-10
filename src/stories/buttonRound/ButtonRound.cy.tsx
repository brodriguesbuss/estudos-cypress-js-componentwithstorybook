import { ButtonRound } from "./ButtonRound";

describe('Button', () => {


  //Verifica se o nome do botão é Button
  it('should mount', () => {
    cy.mount(<ButtonRound size={"large"} backgroundColor={"#1ea7fd"} children="Button"></ButtonRound>)
    cy.get('button').contains('Button');  
  });

  //Clica no botão
  it('should mount', () => {
    cy.mount(<ButtonRound size={"large"} backgroundColor={"#1ea7fd"} children="Button"></ButtonRound>);

    cy.get('button').click();
  });

});
