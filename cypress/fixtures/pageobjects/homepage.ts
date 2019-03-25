class Homepage {
  private readonly categoriesCss: string = ".m-grid__col";
  private readonly categoryDescription: string = "Tech";

  public GetTechCourses(): void {
    cy.visit("");
    cy.contains(this.categoriesCss, this.categoryDescription).click();
  }
}

export default Homepage;
