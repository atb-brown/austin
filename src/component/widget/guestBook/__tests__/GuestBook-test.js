import { wait as guestBook } from "../../../../test/component/GuestBookTestUtils";
import { registerMockProvider } from "../../../../test/mock/hook/mockUseGuestBookInfo";
import GuestBook from "../GuestBook";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

it("render single guest info to match snapshot", async () => {
  registerMockProvider();
  const renderResult = render(<GuestBook />);

  await guestBook(renderResult);

  expect(renderResult.asFragment()).toMatchSnapshot();
});

it("render multiple guest info to match snapshot", async () => {
  registerMockProvider(7);
  const renderResult = render(<GuestBook />);

  await guestBook(renderResult);

  expect(renderResult.asFragment()).toMatchSnapshot();
});

it("render NO guest info to match snapshot", async () => {
  registerMockProvider(0);
  const renderResult = render(<GuestBook />);

  await guestBook(renderResult);

  expect(renderResult.asFragment()).toMatchSnapshot();
});
