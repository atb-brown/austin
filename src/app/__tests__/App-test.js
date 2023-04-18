import App from "../App";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const { asFragment } = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});
