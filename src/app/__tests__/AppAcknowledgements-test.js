import renderer from "react-test-renderer";
import AppAcknowledgements from "../AppAcknowledgements";

it("renders to match snapshot", () => {
  const tree = renderer.create(<AppAcknowledgements />);

  expect(tree).toMatchSnapshot();
});
