import { getElementsPage } from "../getters/getElementsPage";

class ElementsPage {
  clickElementsParentTab() {
    getElementsPage.getElementsParentTab().click();
  }
  // Click tabs
  clickTextBoxTab() {
    getElementsPage.getTextBoxTab().click();
  }
  clickCheckBoxTab() {
    getElementsPage.getCheckBoxTab().click();
  }

  clickRadioButtonTab() {
    getElementsPage.getRadioButtonTab().click();
  }

  clickWebTablesTab() {
    getElementsPage.getWebTablesTab().click();
  }

  clickButtonsTab() {
    getElementsPage.getButtonsTab().click();
  }

  clickLinksTab() {
    getElementsPage.getLinksTab().click();
  }

  clickBrokenLinksTab() {
    getElementsPage.getBrokenLinksTab().click();
  }

  clickUploadTab() {
    getElementsPage.getUploadAndDownloadTab().click();
  }

  clickDynamicTab() {
    getElementsPage.getDynamicPropertiesTab().click();
  }

  //Text box features
  completeNameInput() {
    cy.fixture("example").then((data) => {
      getElementsPage.getNameInput().type(data.name);
    });
  }

  // Complete the email input field using the fixture data
  completeEmailInput() {
    cy.fixture("example").then((data) => {
      getElementsPage.getEmailInput().type(data.email);
    });
  }

  // Complete the current address input field using the fixture data
  completeCurrentAddressInput() {
    cy.fixture("example").then((data) => {
      getElementsPage.getCurrentAddressInput().type(data.currentAddress);
    });
  }

  // Complete the permanent address input field using the fixture data
  completePermanentAddressInput() {
    cy.fixture("example").then((data) => {
      getElementsPage.getPermanentAddressInput().type(data.permanentAddress);
    });
  }
  verifyNameLabel() {
    cy.fixture("example").then((data) => {
      getElementsPage.getNameLabel().should("contain.text", data.name);
    });
  }

  // Verify the Email label contains the correct data
  verifyEmailLabel() {
    cy.fixture("example").then((data) => {
      getElementsPage.getEmailLabel().should("contain.text", data.email);
    });
  }

  // Verify the Current Address label contains the correct data
  verifyCurrentAddressLabel() {
    cy.fixture("example").then((data) => {
      getElementsPage
        .getCurrentAddressLabel()
        .should("contain.text", data.currentAddress);
    });
  }

  // Verify the Permanent Address label contains the correct data
  verifyPermanentAddressLabel() {
    cy.fixture("example").then((data) => {
      getElementsPage
        .getPermanentAddressLabel()
        .should("contain.text", data.permanentAddress);
    });
  }
  clickSubmitButton() {
    getElementsPage.getSubmitButton().click();
  }

  //Radio button features
  clickYesRadioButton() {
    getElementsPage.getYesRadioButton().click({ force: true });
  }
  clickImpressiveRadioButton() {
    getElementsPage.getImpressiveRadio().click({ force: true });
  }
  clickNoRadioButtoN() {
    getElementsPage.getNoRadio().should("be.disabled");
  }
  verifyTextContainsYes() {
    getElementsPage.getTextYes().should("contain.text", "Yes");
  }
  verifyTextContainsImpressive() {
    getElementsPage.getTextImpressive().should("contain.text", "Impressive");
  }

  //Table methods
  clickAddButton() {
    getElementsPage.getAddButton().click();
  }
  writeTableFirstName() {
    cy.fixture("example").then((data) => {
      getElementsPage.getTableFirstNameInput().clear().type(data.firstName);
    });
  }
  writeTableLastName() {
    cy.fixture("example").then((data) => {
      getElementsPage.getTableLastNameinput().clear().type(data.lastName);
    });
  }

  writeTableEmail() {
    cy.fixture("example").then((data) => {
      getElementsPage.getTableEmaiInput().clear().type(data.email);
    });
  }

  writeTableAge() {
    cy.fixture("example").then((data) => {
      getElementsPage.getTableAgeInput().clear().type(data.age);
    });
  }

  writeTableSalary() {
    cy.fixture("example").then((data) => {
      getElementsPage.getTableSalaryInput().clear().type(data.salary);
    });
  }

  writeTableDepartment() {
    cy.fixture("example").then((data) => {
      getElementsPage.getTableDepartmentInput().clear().type(data.department);
    });
  }
  clickTableSubmitButton() {
    getElementsPage.getSubmitButton().click();
  }
  verifyLastRowValues() {
    cy.fixture("example").then((data) => {
      // Loop through each row in the "table"
      cy.get(".rt-table .rt-tr").each(($row) => {
        // Check if the first cell in this row matches the fixture's firstName
        const firstNameCellValue = $row.find(".rt-td").eq(0).text().trim();

        if (firstNameCellValue === data.firstName) {
          // If the first cell matches, verify the remaining cells in this row
          cy.wrap($row).within(() => {
            cy.get(".rt-td").eq(0).should("contain", data.firstName);
            cy.get(".rt-td").eq(1).should("contain", data.lastName);
            cy.get(".rt-td").eq(2).should("contain", String(data.age));
            cy.get(".rt-td").eq(3).should("contain", data.email);
            cy.get(".rt-td").eq(4).should("contain", String(data.salary));
            cy.get(".rt-td").eq(5).should("contain", data.department);
          });
          return false; // Stop the .each loop after finding the match
        }
      });
    });
  }
  clickEditButton() {
    getElementsPage.getEditButton().click();
  }
  setSearchBar() {
    cy.fixture("example").then((data) => {
      getElementsPage.getSearchBar().type(data.firstName);
    });
  }
  clickSearchButton() {
    getElementsPage.getSearchButton().click();
  }
  clickDoubleClickButton() {
    getElementsPage.getDoubleClickButton().dblclick();
  }
  checkDoubleClickMessage() {
    getElementsPage.getDoubleClickMessage().should("be.visible");
  }
  clickRightClickButton() {
    getElementsPage.getRightClickButton().rightclick();
  }
  checkRightClickButtonMessage() {
    getElementsPage.getRightClickMessage().should("be.visible");
  }
  clickDynamicButton() {
    getElementsPage.getDynamicClickButton().click();
  }
  checkDynamicClickMessage() {
    getElementsPage.getDynamicClickMessage().should("be.visible");
  }

  // API buttons

  clickCreatedAPIButton() {
    getElementsPage.getCreatedAPIButton().click();
  }
  clickNoContentButton() {
    getElementsPage.getNoContentButton().click();
  }

  clickMovedButton() {
    getElementsPage.getMovedButton().click();
  }

  clickBadRequestButton() {
    getElementsPage.getBadRequestButton().click();
  }

  clickUnauthorizedButton() {
    getElementsPage.getUnauthorizedButton().click();
  }

  clickForbiddenButton() {
    getElementsPage.getForbiddenButton().click();
  }

  clickInvalidUrlButton() {
    getElementsPage.getInvalidUrlButton().click();
  }
  // API Checks
  checkCreatedAPI() {
    cy.intercept("GET", "**/created").as("getCreated");
    this.clickCreatedAPIButton();
    cy.wait("@getCreated").its("response.statusCode").should("eq", 201);
  }

  checkNoContentAPI() {
    cy.intercept("GET", "**/no-content").as("getNoContent");
    this.clickNoContentButton();
    cy.wait("@getNoContent").its("response.statusCode").should("eq", 204);
  }

  checkMovedAPI() {
    cy.intercept("GET", "**/moved").as("getMoved");
    this.clickMovedButton();
    cy.wait("@getMoved").its("response.statusCode").should("eq", 301);
  }

  checkBadRequestAPI() {
    cy.intercept("GET", "**/bad-request").as("getBadRequest");
    this.clickBadRequestButton();
    cy.wait("@getBadRequest").its("response.statusCode").should("eq", 400);
  }

  checkUnauthorizedAPI() {
    cy.intercept("GET", "**/unauthorized").as("getUnauthorized");
    this.clickUnauthorizedButton();
    cy.wait("@getUnauthorized").its("response.statusCode").should("eq", 401);
  }

  checkForbiddenAPI() {
    cy.intercept("GET", "**/forbidden").as("getForbidden");
    this.clickForbiddenButton();
    cy.wait("@getForbidden").its("response.statusCode").should("eq", 403);
  }

  checkInvalidUrlAPI() {
    cy.intercept("GET", "**/invalid-url").as("getInvalidUrl");
    this.clickInvalidUrlButton();
    cy.wait("@getInvalidUrl").its("response.statusCode").should("eq", 404);
  }

  //Upload/Download
  downloadFile() {
    cy.intercept("POST", "**/download").as("fileDownload");
    getElementsPage.getDownloadButton().click();
    cy.wait("@fileDownload").its("response.statusCode").should("eq", 204);
  }
}
export default ElementsPage;
