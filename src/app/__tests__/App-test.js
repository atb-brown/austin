import { wait as guestBook } from "../../test/component/GuestBookTestUtils";
import { registerMockProvider as mockGuestBookProvider } from "../../test/mock/hook/mockUseGuestBookInfo";
import App from "../App";
import { render } from "@testing-library/react";

it("renders to match snapshot", async () => {
  mockGuestBookProvider();
  const renderResult = render(<App />);

  await guestBook(renderResult);

  expect(renderResult.asFragment()).toMatchSnapshot();
});
