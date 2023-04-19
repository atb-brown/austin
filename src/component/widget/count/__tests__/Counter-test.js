import Counter from "../Counter";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

it("renders to match snapshot", () => {
  const tree = renderer.create(<Counter />);

  expect(tree).toMatchSnapshot();
});

it("click toggles the ribbon", () => {
  render(<Counter />);

  const counterComp = screen.getByTestId("counter");
  expect(counterComp).toBeDefined();

  // Before being clicked, should display 0
  expect(counterComp).toHaveTextContent("0");

  // After being clicked once, should display 1
  fireEvent.click(counterComp);
  expect(counterComp).toHaveTextContent("1");

  // Click a few more times
  fireEvent.click(counterComp);
  fireEvent.click(counterComp);
  fireEvent.click(counterComp);
  expect(counterComp).toHaveTextContent("4");
});
