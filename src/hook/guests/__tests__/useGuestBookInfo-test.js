import {
  registerMockProvider,
  registerMockProviderRejection,
} from "../../../test/mock/hook/mockUseGuestBookInfo";
import TestComponentUseGuestBookInfo from "./TestComponentUseGuestBookInfo";
import { render, waitFor } from "@testing-library/react";

async function testComp(renderResult) {
  await waitFor(() => renderResult.getByTestId("test-component"));
}

it("Basic Render", async () => {
  registerMockProvider();
  const renderResult = render(<TestComponentUseGuestBookInfo />);
  const fragment = renderResult.asFragment;

  await testComp(renderResult);

  expect(fragment()).toMatchSnapshot();
});

it("Data Provider Rejects", async () => {
  registerMockProviderRejection();
  const renderResult = render(<TestComponentUseGuestBookInfo />);
  const fragment = renderResult.asFragment;

  await testComp(renderResult);

  expect(fragment()).toMatchSnapshot();
});
