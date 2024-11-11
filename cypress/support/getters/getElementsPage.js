export const getElementsPage = {
  getElementsParentTab() {
    return cy.get(".header-wrapper").contains("Elements");
  },

  // Elements Tabs
  getTextBoxTab() {
    return cy
      .get(":nth-child(1) > .element-list > .menu-list > #item-0")
      .contains("Text Box");
  },
  getCheckBoxTab() {
    return cy
      .get(":nth-child(1) > .element-list > .menu-list > #item-1")
      .contains("Check Box");
  },
  getRadioButtonTab() {
    return cy
      .get(":nth-child(1) > .element-list > .menu-list > #item-2")
      .contains("Radio Button");
  },
  getWebTablesTab() {
    return cy
      .get(":nth-child(1) > .element-list > .menu-list > #item-3")
      .contains("Web Tables");
  },
  getButtonsTab() {
    return cy
      .get(":nth-child(1) > .element-list > .menu-list > #item-4")
      .contains("Buttons");
  },
  getLinksTab() {
    return cy
      .get(":nth-child(1) > .element-list > .menu-list > #item-5")
      .contains("Links");
  },
  getBrokenLinksTab() {
    return cy
      .get(":nth-child(1) > .element-list > .menu-list > #item-6")
      .contains("Broken Links");
  },
  getUploadAndDownloadTab() {
    return cy
      .get(":nth-child(1) > .element-list > .menu-list > #item-7")
      .contains("Upload");
  },
  getDynamicPropertiesTab() {
    return cy
      .get(":nth-child(1) > .element-list > .menu-list > #item-8")
      .contains("Dynamic");
  },
  //Textbox Features elements
  getNameInput() {
    return cy.get("#userName");
  },
  getEmailInput() {
    return cy.get("#userEmail");
  },
  getCurrentAddressInput() {
    return cy.get("#currentAddress");
  },
  getPermanentAddressInput() {
    return cy.get("#permanentAddress");
  },
  getNameLabel() {
    return cy.get(".mb-1#name");
  },
  getEmailLabel() {
    return cy.get(".mb-1#email");
  },
  getCurrentAddressLabel() {
    return cy.get(".mb-1#currentAddress");
  },
  getPermanentAddressLabel() {
    return cy.get(".mb-1#permanentAddress");
  },
  getSubmitButton() {
    return cy.get("#submit");
  },

  //Radio Button features elements
  getYesRadioButton() {
    return cy.get("#yesRadio");
  },
  getImpressiveRadio() {
    return cy.get("#impressiveRadio");
  },
  getNoRadio() {
    return cy.get("#noRadio");
  },
  getTextYes() {
    return cy.get(".text-success").contains("Yes");
  },
  getTextImpressive() {
    return cy.get(".text-success").contains("Impressive");
  },

  //Table elements
  getAddButton() {
    return cy.get("#addNewRecordButton");
  },
  getTableFirstNameInput() {
    return cy.get("#firstName");
  },
  getTableLastNameinput() {
    return cy.get("#lastName");
  },
  getTableEmaiInput() {
    return cy.get("#userEmail");
  },
  getTableAgeInput() {
    return cy.get("#age");
  },
  getTableSalaryInput() {
    return cy.get("#salary");
  },
  getTableDepartmentInput() {
    return cy.get("#department");
  },
  getTableSubmitButton() {
    return cy.get("#submit");
  },
  getEditButton() {
    return cy.get(".mr-2").eq(0);
  },
  getSearchBar() {
    return cy.get("#searchBox");
  },
  getSearchButton() {
    return cy.get("#basic-addon2");
  },
  getDoubleClickButton() {
    return cy.get("#doubleClickBtn");
  },
  getDoubleClickMessage() {
    return cy.get("#doubleClickMessage");
  },
  getRightClickButton() {
    return cy.get("#rightClickBtn");
  },
  getRightClickMessage() {
    return cy.get("#rightClickMessage");
  },
  getDynamicClickButton() {
    return cy.get(".btn.btn-primary").last();
  },
  getDynamicClickMessage() {
    return cy.get("#dynamicClickMessage");
  },

  //API buttons

  getCreatedAPIButton() {
    return cy.get("#created");
  },
  getNoContentButton() {
    return cy.get("#no-content");
  },

  getMovedButton() {
    return cy.get("#moved");
  },

  getBadRequestButton() {
    return cy.get("#bad-request");
  },

  getUnauthorizedButton() {
    return cy.get("#unauthorized");
  },
  getForbiddenButton() {
    return cy.get("#forbidden");
  },
  getInvalidUrlButton() {
    return cy.get("#invalid-url");
  },

  // Upload/Download page
  getDownloadButton() {
    return cy.get("#downloadButton");
  },
  getUploadFileButton(){
    return cy.get('#uploadFile');
  },
  
};
