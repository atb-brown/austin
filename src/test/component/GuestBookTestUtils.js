import { waitFor } from "@testing-library/react";

/**
 * Wait for a guest book component to have been rendered.
 *
 * @param {RenderResult} renderResult
 */
export async function wait(renderResult) {
  await waitFor(() => renderResult.getByTestId("guest-book"));
}
