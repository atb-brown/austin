import { useGuestBookInfoMockProvider } from "../../test/mock/hook/mockUseGuestBookInfo";
import App from "../App";
import { render, waitFor } from "@testing-library/react";

it("renders to match snapshot", async () => {
  const renderResult = render(
    <App guestProvider={useGuestBookInfoMockProvider()} />
  );

  // Wait for the underlying promise to resolve.
  await waitFor(() => renderResult.getByText("info loaded"));

  expect(renderResult.asFragment()).toMatchSnapshot();
});
