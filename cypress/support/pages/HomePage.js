/// <reference types="cypress" />
import { getHomePageElements } from "../getters/getHomePage";

class HomePage {
  clickElementsPageCard() {
    getHomePageElements.getElementsPageCard().click();
  }
  clickFormsPageCard() {
    getHomePageElements.getFormsPageCard().click();
  }
  clickAlertsPageCard() {
    getHomePageElements.getAlertsPageCard().click();
  }
  clickWidgetsPageCard() {
    getHomePageElements.getWidgetsPageCard().click();
  }
  clickInteractionsPageCard() {
    getHomePageElements.getInteractionsPageCard().click();
  }
  clickBookStorePageCard() {
    getHomePageElements.getBookStorePageCard().click();
  }
}
export default HomePage;
