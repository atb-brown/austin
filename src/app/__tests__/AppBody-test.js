import AppBody from "../AppBody";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const tree = renderer.create(<AppBody />);

  expect(tree).toMatchSnapshot();
});
