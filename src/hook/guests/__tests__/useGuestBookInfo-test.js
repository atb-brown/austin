import { useGuestBookInfoMockProvider } from "../../../test/mock/hook/mockUseGuestBookInfo";
import TestComponentUseGuestBookInfo from "./TestComponentUseGuestBookInfo";
import { render, waitFor } from "@testing-library/react";

it("Basic Render", async () => {
  const renderResult = render(
    <TestComponentUseGuestBookInfo provider={useGuestBookInfoMockProvider()} />
  );
  const fragment = renderResult.asFragment;

  // Wait for the underlying promise to resolve.
  await waitFor(() => renderResult.getByText("message: info loaded"));

  expect(fragment()).toMatchSnapshot();
});
