import { errorMessages } from "../../src/components/Register";
beforeEach(() => {
  cy.visit("http://localhost:5173/");
});
describe("Register Page", () => {
  describe("Error Messages", () => {
    it("name input throws error for two chars", () => {
      //Arrange
      // cy.visit("http://localhost:5173/");
      //Act
      cy.get('[data-cy="ad-input"]').type("em");
      //assert
      cy.contains(errorMessages.ad);
    });

    it("Surname input throws error for two chars", () => {
      //Arrange
      // cy.visit("http://localhost:5173/");
      //Act
      cy.get('[data-cy="soyad-input"]').type("şa");
      //assert
      cy.contains(errorMessages.soyad);
    });

    it("Email input throws error for emre@wit.", () => {
      //Arrange
      // cy.visit("http://localhost:5173/");
      //Act
      cy.get('[data-cy="soyad-input"]').type("emre@wit.");
      //assert
      cy.contains(errorMessages.email);
    });

    it("Password input throws error for 1234", () => {
      //Arrange
      //cy.visit("http://localhost:5173/");
      //Act
      cy.get('[data-cy="password-input"]').type("1234");
      //assert
      cy.contains(errorMessages.password);
    });
    it("button is disabled for unvalidated inputs", () => {
      //Arrange
      // cy.visit("http://localhost:5173/");
      //Act
      cy.get('[data-cy="password-input"]').type("1234");
      cy.get('[data-cy="submit-button"]').should("be.disabled");
      //assert
      cy.contains(errorMessages.button);
    });
  });

  describe("Form inputs validated", () => {
    it("button enabled for validated inputs", () => {
      //Arrange
      // cy.visit("http://localhost:5173/");
      //Act
      cy.get('[data-cy="ad-input"]').type("Emre");
      cy.get('[data-cy="soyad-input"]').type("Şahiner");
      cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
      cy.get('[data-cy="password-input"]').type("1234Aa**");

      //assert
      cy.get('[data-cy="submit-button"]').should("not.be.disabled");
    });
    it("submits form on validated inputs", () => {
      //Arrange
      // cy.visit("http://localhost:5173/");
      //Act
      cy.get('[data-cy="ad-input"]').type("Emre");
      cy.get('[data-cy="soyad-input"]').type("Şahiner");
      cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
      cy.get('[data-cy="password-input"]').type("1234Aa**");
      cy.get('[data-cy="submit-button"]').click();
      //assert
       cy.get('[data-cy="response-message"]').should("be.visible");
    });
  });
});
