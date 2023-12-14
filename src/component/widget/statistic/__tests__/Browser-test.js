import Browser from "../Browser";
import { render } from "@testing-library/react";

it("renders to match snapshot", () => {
  const { asFragment } = render(<Browser />);

  expect(asFragment()).toMatchSnapshot();
});
