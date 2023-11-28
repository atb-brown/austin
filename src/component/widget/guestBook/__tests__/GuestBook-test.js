import { useGuestBookInfoMockProvider } from "../../../../test/mock/hook/mockUseGuestBookInfo";
import GuestBook from "../GuestBook";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";

it("render single guest info to match snapshot", async () => {
  const renderResult = render(
    <GuestBook guestProvider={useGuestBookInfoMockProvider()} />
  );

  // Wait for the underlying promise to resolve.
  await waitFor(() => renderResult.getByText("info loaded"));

  expect(renderResult.asFragment()).toMatchSnapshot();
});

it("render multiple guest info to match snapshot", async () => {
  const renderResult = render(
    <GuestBook guestProvider={useGuestBookInfoMockProvider(7)} />
  );

  // Wait for the underlying promise to resolve.
  await waitFor(() => renderResult.getByText("info loaded"));

  expect(renderResult.asFragment()).toMatchSnapshot();
});

it("render NO guest info to match snapshot", async () => {
  const renderResult = render(
    <GuestBook guestProvider={useGuestBookInfoMockProvider(0)} />
  );

  // Wait for the underlying promise to resolve.
  await waitFor(() => renderResult.getByTestId("guest-book"));

  expect(renderResult.asFragment()).toMatchSnapshot();
});
