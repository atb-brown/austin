import TestComponentUseGuestBookInfo from "../TestComponentUseGuestBookInfo";
import { render, screen, waitFor } from "@testing-library/react";

it("Basic Render", async () => {
  render(<TestComponentUseGuestBookInfo />);

  const allGuestsDiv = await waitFor(() => {
    // There should be at least one guest, so there should be "{}" brackets.
    return screen.getByText(/^all guests: \[\{.+\}\]$/);
  });

  // My full name should be in there somewhere if the results were retrieved.
  expect(allGuestsDiv.innerHTML).toMatch(/Austin Brown/i);
});
