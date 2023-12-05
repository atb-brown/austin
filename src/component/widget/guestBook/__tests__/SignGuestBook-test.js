import SignGuestBook from "../SignGuestBook";
import "@testing-library/jest-dom";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const tree = renderer.create(<SignGuestBook />);

  expect(tree).toMatchSnapshot();
});
