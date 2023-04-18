import App from "../App";
import { render } from "@testing-library/react";

it("renders to match snapshot", () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});
