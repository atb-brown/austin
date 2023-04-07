import renderer from "react-test-renderer";
import AppLinks from "../AppLinks";

it("renders to match snapshot", () => {
  const tree = renderer.create(<AppLinks />);

  expect(tree).toMatchSnapshot();
});
