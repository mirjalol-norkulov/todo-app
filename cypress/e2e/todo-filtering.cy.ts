describe("test filtering", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("filters active todos", () => {
    cy.get('[data-test="todo-filter-active"]').trigger("click");
    cy.get('[data-test="todo-list"]').children().should("have.length", 2);
  });

  it("filters completed todos", () => {
    cy.get('[data-test="todo-filter-completed"]').trigger("click");
    cy.get('[data-test="todo-list"]').children().should("have.length", 1);
  });
});
