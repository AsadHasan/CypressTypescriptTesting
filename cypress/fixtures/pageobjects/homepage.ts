import SearchResults from "./searchresults";

class Homepage {
  private readonly categoriesCss: string = ".m-grid__col";
  private readonly categoryDescription: string = "Tech";

  public GetTechCourses(): SearchResults {
    cy.visit("");
    cy.contains(this.categoriesCss, this.categoryDescription).click();
    return new SearchResults();
  }
}

export default Homepage;
