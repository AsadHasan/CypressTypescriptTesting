import Homepage from "../fixtures/pageobjects/homepage";
import SearchResults from "../fixtures/pageobjects/searchresults";

describe("On the homepage", () => {
  it("Tech category should return tech & coding courses", () => {
    const homepage: Homepage = new Homepage();
    const searchResults: SearchResults = homepage.GetTechCourses();

    const actualResults = searchResults.GetResultsCategories();
    const expectedResults: string[] = [
      "Business Technology",
      "Cyber Security",
      "Data Science",
      "Digital Marketing"
    ];

    actualResults
      .should("have.length", expectedResults.length)
      .each(($actualResult, index) =>
        expect($actualResult.text()).to.be.equal(expectedResults[index])
      );
  });
});
