import AppWidgets from "../AppWidgets";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const tree = renderer.create(<AppWidgets />);

  expect(tree).toMatchSnapshot();
});
