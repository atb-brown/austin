import { wait as guestBook } from "../../test/component/GuestBookTestUtils";
import { mockProvider as mockGuestBookInfoProvider } from "../../test/mock/hook/mockUseGuestBookInfo";
import AppBody from "../AppBody";
import { render } from "@testing-library/react";

it("renders to match snapshot", async () => {
  mockGuestBookInfoProvider();

  const renderResult = render(<AppBody />);

  await guestBook(renderResult);

  expect(renderResult.asFragment()).toMatchSnapshot();
});

afterEach(() => {
  jest.resetAllMocks();
});
