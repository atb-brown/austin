import PortfolioLinkWithIssuer from "../PortfolioLinkWithoutIssuer";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const tree = renderer
    .create(
      <PortfolioLinkWithIssuer
        description="description Field"
        url="https://example.com"
        urlId="linkId Field"
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
