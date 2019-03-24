class Homepage {
  private readonly categoryDescription: string = "Tech & Coding";

  public GetTechCourses(): void {
    cy.visit("");
    cy.contains(this.categoryDescription).click();
  }
}

export default Homepage;
