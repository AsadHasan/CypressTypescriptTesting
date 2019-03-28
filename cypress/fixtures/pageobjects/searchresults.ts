class SearchResults{
    private readonly resultsCategoriesCss: string = ".u-hidden-to-medium>.related-links>div>a>span";

    public GetResultsCategories(): Cypress.Chainable<JQuery<HTMLElement>>{
        return cy.get(this.resultsCategoriesCss);
    }
}

export default SearchResults;