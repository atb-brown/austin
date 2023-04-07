import AppTitle from "../AppTitle";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const tree = renderer.create(<AppTitle />);

  expect(tree).toMatchSnapshot();
});
