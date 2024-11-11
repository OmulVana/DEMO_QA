import HomePage from "../support/pages/HomePage";
import ElementsPage from "../support/pages/ElementsPage";

describe("Access Elements tabs", () => {
  const elementsPage = new ElementsPage();
  const homePage = new HomePage();

  beforeEach(() => {
    // Start each test by visiting the home page
    cy.visit("https://demoqa.com/");
    homePage.clickElementsPageCard();
  });
  it("Should access Text Box section and use all its features", () => {
    elementsPage.clickTextBoxTab();
    elementsPage.completeNameInput();
    elementsPage.completeEmailInput();
    elementsPage.completeCurrentAddressInput();
    elementsPage.completePermanentAddressInput();
    elementsPage.clickSubmitButton();
    elementsPage.verifyNameLabel();
    elementsPage.verifyEmailLabel();
    elementsPage.verifyCurrentAddressLabel();
    elementsPage.verifyPermanentAddressLabel();
  });
  it("Should access Radio Button section and use all its features", () => {
    elementsPage.clickRadioButtonTab();
    elementsPage.clickYesRadioButton();
    elementsPage.verifyTextContainsYes();
    elementsPage.clickImpressiveRadioButton();
    elementsPage.verifyTextContainsImpressive();
    elementsPage.clickNoRadioButtoN();
  });
  it("Should access the Buttons section and use all its features", () => {
    elementsPage.clickButtonsTab();
    elementsPage.clickDoubleClickButton();
    elementsPage.checkDoubleClickMessage();
    elementsPage.clickRightClickButton();
    elementsPage.checkRightClickButtonMessage();
    elementsPage.clickDynamicButton();
    elementsPage.checkDynamicClickMessage();
  });
});
