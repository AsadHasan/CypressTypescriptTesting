import Homepage from "../fixtures/pageobjects/homepage";

describe("On the homepage", () => {
  it("Tech category should return tech & codeing courses", () => {
    const homepage: Homepage = new Homepage();
    homepage.GetTechCourses();
  });
});
