import PortfolioLink from "../PortfolioLink";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const tree = renderer
    .create(
      <PortfolioLink
        description="description Field"
        link="https://example.com"
        linkId="linkId Field"
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
