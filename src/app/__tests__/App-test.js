import App from "../App";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

it("renders to match snapshot", () => {
  const {asFragment} = render(<App />);

  expect(asFragment()).toMatchSnapshot();
});
