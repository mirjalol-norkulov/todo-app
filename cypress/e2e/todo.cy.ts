// https://docs.cypress.io/api/introduction/api.html

describe("Test todo app", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("[data-test='title']", "Todo App");
  });

  it("deletes todo", () => {
    cy.visit("/");
    cy.get('[data-test="todo-delete-btn"]').first().trigger("click");

    cy.get("[data-test='todo-list']").children().should("have.length", 2);
  });

  it("edites todo", () => {
    cy.visit("/");
    cy.get("[data-test='todo-list-item']")
      .last()
      .get('[data-test="todo-edit-btn"]')
      .last()
      .trigger("click");

    cy.get('[data-test="todo-text-input"]').clear().type("Todo 11");
    cy.get("form").submit();

    cy.get('[data-test="todo-list-item"]')
      .get('[data-test="todo-checkbox"]')
      .should("contain.text", "Todo 11");
  });

  it("adds new todo", () => {
    cy.visit("/");
    cy.get('[data-test="todo-add-btn"]').trigger("click");
    cy.get('[data-test="todo-text-input"]').type("New todo");
    cy.get('[data-test="todo-date-input"]').type("2022-08-08");
    cy.get("form").submit();
    cy.get('[data-test="todo-list-item"]').should("contain.text", "New todo");
  });
});
