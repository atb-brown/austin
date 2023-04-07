import AppLinks from "../AppLinks";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const tree = renderer.create(<AppLinks />);

  expect(tree).toMatchSnapshot();
});
