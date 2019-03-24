class Homepage {
  private readonly categoryDescription: string = "Tech";

  public GetTechCourses(): void {
    cy.visit("");
    cy.contains('div>ul>li>.m-grid__col',this.categoryDescription).click();
  }
}

export default Homepage;
