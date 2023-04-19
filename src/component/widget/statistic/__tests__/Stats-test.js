import Stats from "../Stats";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";

it("initial view renders to match snapshot", () => {
  const { asFragment } = render(<Stats />);

  expect(asFragment()).toMatchSnapshot();
});

it("hidden view renders to match snapshot", () => {
  const { asFragment } = render(<Stats />);

  const statsRibbon = screen.getByTestId("stats-ribbon");
  fireEvent.click(statsRibbon);

  expect(asFragment()).toMatchSnapshot();
});

it("click toggles the ribbon", () => {
  render(<Stats />);

  // Initial state, full ribbon is displayed.
  const statsRibbon = screen.getByTestId("stats-ribbon");
  expect(statsRibbon).toBeDefined();

  // After clicking, ribbon should be hidden.
  fireEvent.click(statsRibbon);
  const hiddenStatsRibbon = screen.getByTestId("stats-ribbon-hidden");
  expect(hiddenStatsRibbon).toBeDefined();
  expect(screen.queryByTestId("stats-ribbon")).toBeNull();

  // After clicking again, ribbon should be displayed again.
  fireEvent.click(hiddenStatsRibbon);
  expect(screen.getByTestId("stats-ribbon")).toBeDefined();
  expect(screen.queryByTestId("stats-ribbon-hidden")).toBeNull();
});
