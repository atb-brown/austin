import HiddenStats from "../HiddenStats";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";

it("initial view renders to match snapshot", () => {
  const { asFragment } = render(<HiddenStats />);

  expect(asFragment()).toMatchSnapshot();
});

it("onClick is invoked when component is clicked", () => {
  let clickCount = 0;
  const onClick = () => {
    clickCount++;
  };

  const { asFragment } = render(<HiddenStats onClick={onClick} />);

  expect(asFragment()).toMatchSnapshot();
  fireEvent.click(screen.getByTestId("stats-ribbon-hidden"));
  expect(clickCount).toBe(1);
});
