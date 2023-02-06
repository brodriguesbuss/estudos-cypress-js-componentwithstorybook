import Button from "./Button";

describe('Button', () => {
  it('should mount', () => {
    cy.mount(<Button label={"Button"} size={"large"} backgroundColor={"#1ea7fd"}></Button>)

    cy.get('button').contains('Button');
  });

  it('should mount', () => {
    cy.mount(<Button label={"Button"} size={"large"} backgroundColor={"#1ea7fd"}></Button>);

    cy.get('button').click();
  });

});
