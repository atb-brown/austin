import TestComponentUseWindowDimension from "./TestComponentUseWindowDimension";
import { render } from "@testing-library/react";

it("Test window width and height.", () => {
  // Set the size
  setScreenSize(1000, 800);
  var { asFragment } = render(<TestComponentUseWindowDimension />);

  expect(asFragment()).toMatchSnapshot();

  // Set a new size and re-render
  setScreenSize(500, 400);
  var { asFragment } = render(<TestComponentUseWindowDimension />);

  expect(asFragment()).toMatchSnapshot();
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
