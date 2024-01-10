import RememberMe from "../RememberMe";
import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Cookies } from "react-cookie";

const cookies = new Cookies();
const confirmSpy = jest.spyOn(window, "confirm");

function confirmOk() {
  confirmSpy.mockImplementation(jest.fn(() => true));
}

function confirmCancel() {
  confirmSpy.mockImplementation(jest.fn(() => false));
}

const testId = "remember-me";
const notRememberedTxt = "Click me if you want me to remember you!";
const rememberedTxt = "Welcome back! Click me if you want me to forget.";
const cookieName = "remembered";

beforeEach(() => {
  confirmOk();
});

it("renders to match snapshot without cookie", () => {
  const tree = renderer.create(<RememberMe />);
  expect(tree).toMatchSnapshot();
});

it("renders to match snapshot with cookie", () => {
  cookies.set(cookieName, true);

  const tree = renderer.create(<RememberMe />);

  expect(tree).toMatchSnapshot();

  cookies.remove(cookieName);
});

it("changes text when clicked and confirmed", () => {
  render(<RememberMe />);

  const rememberMeComp = screen.getByTestId(testId);
  expect(rememberMeComp).toBeDefined();

  // Make sure user is not remembered
  expect(rememberMeComp).toHaveTextContent(notRememberedTxt);

  // Click and confirm and then make sure the user is remembered
  fireEvent.click(rememberMeComp);
  expect(rememberMeComp).toHaveTextContent(rememberedTxt);

  // Click again and make sure the user is not remembered again
  fireEvent.click(rememberMeComp);
  expect(rememberMeComp).toHaveTextContent(notRememberedTxt);
});

it("does not change text when clicked and canceled", () => {
  confirmCancel();
  render(<RememberMe />);

  const rememberMeComp = screen.getByTestId(testId);
  expect(rememberMeComp).toBeDefined();

  // Make sure user is not remembered
  expect(rememberMeComp).toHaveTextContent(notRememberedTxt);

  // Click and cancel and then make sure the user is still not remembered
  fireEvent.click(rememberMeComp);
  expect(rememberMeComp).toHaveTextContent(notRememberedTxt);
});

it("cookie saved when not remembered and button clicked and confirmed", () => {
  render(<RememberMe />);

  const rememberMeComp = screen.getByTestId(testId);
  expect(rememberMeComp).toBeDefined();

  // At first, there shouldn't be a cookie
  expect(cookies.get(cookieName)).toBeUndefined();

  // After clicking and confirming, the cookie should be there.
  fireEvent.click(rememberMeComp);
  expect(cookies.get(cookieName)).toBe(true);

  // And if you click again, the cookie should be removed.
  fireEvent.click(rememberMeComp);
  expect(cookies.get(cookieName)).toBeUndefined();
});

it("cookie is not saved when not remembered and button clicked and canceled", () => {
  confirmCancel();
  render(<RememberMe />);

  const rememberMeComp = screen.getByTestId(testId);
  expect(rememberMeComp).toBeDefined();

  // At first, there shouldn't be a cookie
  expect(cookies.get(cookieName)).toBeUndefined();

  // After clicking and canceling, the cookie should still not be there.
  fireEvent.click(rememberMeComp);
  expect(cookies.get(cookieName)).toBeUndefined();
});
