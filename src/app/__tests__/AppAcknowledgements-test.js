import AppAcknowledgements from "../AppAcknowledgements";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const tree = renderer.create(<AppAcknowledgements />);

  expect(tree).toMatchSnapshot();
});
