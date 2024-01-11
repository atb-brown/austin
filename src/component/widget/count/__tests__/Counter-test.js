import Counter from "../Counter";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import { Cookies as ReactCookies } from "react-cookie";
import { Cookies } from "../../../../hook/cookie/Cookies";

const cookies = new ReactCookies();

it("renders to match snapshot without cookie", () => {
  const renderResult = render(<Counter />);

  expect(renderResult.asFragment()).toMatchSnapshot();
});

it("renders to match snapshot with cookie", async () => {
  cookies.set(Cookies.Count, 12);

  const renderResult = render(<Counter />);

  const counterComp = screen.getByTestId("counter");
  expect(counterComp).toBeDefined();
  expect(counterComp).toHaveTextContent("12");

  expect(renderResult.asFragment()).toMatchSnapshot();

  cookies.remove(Cookies.Count);
});

it("click increases the count", () => {
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

it("click increases the count in the cookie when user is remembered", () => {
  cookies.set(Cookies.Remembered, true);
  cookies.set(Cookies.Count, 12);
  render(<Counter />);

  const counterComp = screen.getByTestId("counter");
  expect(counterComp).toBeDefined();

  fireEvent.click(counterComp);
  fireEvent.click(counterComp);
  fireEvent.click(counterComp);
  expect(cookies.get(Cookies.Count)).toBe(15);
});
