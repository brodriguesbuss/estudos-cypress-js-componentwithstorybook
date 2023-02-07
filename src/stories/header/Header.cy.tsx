import { Header } from "./Header";


describe('Header', () => {
  it('should mount', () => {
    cy.mount(<Header onLogin={
      function (): void {

    

      throw new Error("Function not implemented.");
    } } onLogout={function (): void {
      throw new Error("Function not implemented.");
    } } onCreateAccount={function (): void {
      throw new Error("Function not implemented.");
    } }></Header>);

  });

});
