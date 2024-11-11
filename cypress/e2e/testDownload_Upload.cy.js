import ElementsPage from "../support/pages/ElementsPage";
import HomePage from "../support/pages/HomePage";

describe("Access main pages", () => {
  const homePage = new HomePage();
  const elementsPage = new ElementsPage();

  beforeEach(() => {
    // Start each test by visiting the home page
    cy.visit("https://demoqa.com/");
    homePage.clickElementsPageCard();
    elementsPage.clickUploadTab();
  });

  it("Download a file and check for it", () => {
    elementsPage.downloadFile();
  });
});
