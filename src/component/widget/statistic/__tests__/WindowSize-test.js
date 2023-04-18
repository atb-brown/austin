import WindowSize from "../WindowSize";
import { render } from "@testing-library/react";

it("renders to match snapshot", () => {
  const { asFragment } = render(<WindowSize />);

  expect(asFragment()).toMatchSnapshot();
});
