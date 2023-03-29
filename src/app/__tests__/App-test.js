import App from "../App";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const tree = renderer.create(<App />);

  expect(tree).toMatchSnapshot();
});
