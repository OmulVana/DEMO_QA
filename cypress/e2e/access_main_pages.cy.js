import HomePage from "../support/pages/HomePage";

describe("Access main pages", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    // Start each test by visiting the home page
    cy.visit("https://demoqa.com/");
  });

  it("Should access the Elements page and return to the home page", () => {
    homePage.clickElementsPageCard();
    cy.url().should("include", "/elements");
    cy.visit("https://demoqa.com/");
  });

  it("Should access the Forms page and return to the home page", () => {
    homePage.clickFormsPageCard();
    cy.url().should("include", "/forms");
    cy.visit("https://demoqa.com/");
  });

  it("Should access the Alerts page and return to the home page", () => {
    homePage.clickAlertsPageCard();
    cy.url().should("include", "/alertsWindows");
    cy.visit("https://demoqa.com/");
  });

  it("Should access the Widgets page and return to the home page", () => {
    homePage.clickWidgetsPageCard();
    cy.url().should("include", "/widgets");
    cy.visit("https://demoqa.com/");
  });

  it("Should access the Interactions page and return to the home page", () => {
    homePage.clickInteractionsPageCard();
    cy.url().should("include", "/interaction");
    cy.visit("https://demoqa.com/");
  });

  it("Should access the Bookstore page and return to the home page", () => {
    homePage.clickBookStorePageCard();
    cy.url().should("include", "/books");
    cy.visit("https://demoqa.com/");
  });
});
