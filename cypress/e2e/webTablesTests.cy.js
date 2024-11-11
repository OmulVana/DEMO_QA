import HomePage from "../support/pages/HomePage";
import ElementsPage from "../support/pages/ElementsPage";

describe("Access Elements tabs", () => {
  const elementsPage = new ElementsPage();
  const homePage = new HomePage();

  beforeEach(() => {
    // Start each test by visiting the home page
    cy.visit("https://demoqa.com/");
    homePage.clickElementsPageCard();
    elementsPage.clickWebTablesTab();
  });
  it("Should add new entry into the table, and check for it", () => {
    elementsPage.clickAddButton();
    elementsPage.writeTableFirstName();
    elementsPage.writeTableLastName();
    elementsPage.writeTableEmail();
    elementsPage.writeTableAge();
    elementsPage.writeTableSalary();
    elementsPage.writeTableDepartment();
    elementsPage.clickTableSubmitButton();
    elementsPage.verifyLastRowValues();
  });

  it("Should edit an existing entry and check for the changed data", () => {
    elementsPage.clickEditButton();
    elementsPage.writeTableFirstName();
    elementsPage.writeTableLastName();
    elementsPage.writeTableEmail();
    elementsPage.writeTableAge();
    elementsPage.writeTableSalary();
    elementsPage.writeTableDepartment();
    elementsPage.clickTableSubmitButton();
    elementsPage.verifyLastRowValues();
  });
  it("Should be able to search for any field and entries containing it should appear after clicking Search", () => {
    elementsPage.clickAddButton();
    elementsPage.writeTableFirstName();
    elementsPage.writeTableLastName();
    elementsPage.writeTableEmail();
    elementsPage.writeTableAge();
    elementsPage.writeTableSalary();
    elementsPage.writeTableDepartment();
    elementsPage.clickTableSubmitButton();
    elementsPage.setSearchBar();
    elementsPage.clickSearchButton();
    elementsPage.verifyLastRowValues();
  });
});
