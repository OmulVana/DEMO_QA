/// <reference types="cypress" />
export const getHomePageElements = {
  getElementsPageCard() {
    return cy.get(".card.mt-4.top-card").contains("Elements");
  },
  getFormsPageCard() {
    return cy.get(".card.mt-4.top-card").contains("Forms");
  },
  getAlertsPageCard() {
    return cy.get(".card.mt-4.top-card").contains("Alerts, Frame & Windows");
  },
  getWidgetsPageCard() {
    return cy.get(".card.mt-4.top-card").contains("Widgets");
  },
  getInteractionsPageCard() {
    return cy.get(".card.mt-4.top-card").contains("Interactions");
  },
  getBookStorePageCard() {
    return cy.get(".card.mt-4.top-card").contains("Book");
  },
};
