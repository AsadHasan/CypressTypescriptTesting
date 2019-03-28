import Homepage from "../fixtures/pageobjects/homepage";
import SearchResults from "../fixtures/pageobjects/searchresults";

describe("On the homepage", () => {
  it("Tech category should return tech & coding courses", () => {
    const homepage: Homepage = new Homepage();
    const searchResults: SearchResults = homepage.GetTechCourses();
    searchResults.GetResultsCategories();
  });
});
