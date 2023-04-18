import Stats from "../Stats";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const { asFragment } = render(<Stats />);

  expect(asFragment()).toMatchSnapshot();
});
