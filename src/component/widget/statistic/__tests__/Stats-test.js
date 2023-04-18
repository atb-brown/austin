import Stats from "../Stats";
import { render } from "@testing-library/react";

it("renders to match snapshot", () => {
  const { asFragment } = render(<Stats />);

  expect(asFragment()).toMatchSnapshot();
});
