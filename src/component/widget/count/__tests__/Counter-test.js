import Counter from "../Counter";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const tree = renderer.create(<Counter />);

  expect(tree).toMatchSnapshot();
});
