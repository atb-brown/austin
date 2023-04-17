import TestComponentUseWindowDimension from "./TestComponentUseWindowDimension";
import { render } from "@testing-library/react";

it("Test window width and height.", () => {
  // Set the size
  setScreenSize(1000, 800);
  const initialFragment = render(
    <TestComponentUseWindowDimension />
  ).asFragment;

  expect(initialFragment()).toMatchSnapshot();

  // Set a new size and re-render
  setScreenSize(500, 400);
  const reRenderedFragment = render(
    <TestComponentUseWindowDimension />
  ).asFragment;

  expect(reRenderedFragment()).toMatchSnapshot();
});

function setScreenSize(width, height) {
  setProp("innerWidth", width);
  setProp("innerHeight", height);
}

function setProp(propName, value) {
  Object.defineProperty(window, propName, {
    writable: true,
    configurable: true,
    value: value,
  });
}
