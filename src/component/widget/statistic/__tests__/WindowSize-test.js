import WindowSize from "../WindowSize";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const { asFragment } = render(<WindowSize />);

  expect(asFragment()).toMatchSnapshot();
});
