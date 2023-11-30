import PortfolioLinkWithIssuer from "../PortfolioLinkWithIssuer";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const tree = renderer
    .create(
      <PortfolioLinkWithIssuer
        description="description Field"
        url="https://example.com"
        urlId="linkId Field"
        issuerDescription="issuer description field"
        issuerUrl="https://https://github.com/atb-brown"
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
