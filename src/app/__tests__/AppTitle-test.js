import renderer from "react-test-renderer";
import AppTitle from "../AppTitle";

it("renders to match snapshot", () => {
  const tree = renderer.create(<AppTitle />);

  expect(tree).toMatchSnapshot();
});
