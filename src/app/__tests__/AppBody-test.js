import { useGuestBookInfoMockProvider } from "../../test/mock/hook/mockUseGuestBookInfo";
import AppBody from "../AppBody";
// import renderer from "react-test-renderer";
import { render, waitFor } from "@testing-library/react";

it("renders to match snapshot", async () => {
  const renderResult = render(
    <AppBody guestProvider={useGuestBookInfoMockProvider()} />
  );

  // Wait for the underlying promise to resolve.
  await waitFor(() => renderResult.getByText("info loaded"));

  expect(renderResult.asFragment()).toMatchSnapshot();
});
