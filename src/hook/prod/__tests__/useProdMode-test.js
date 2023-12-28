import { render } from "@testing-library/react";
import { failInProd } from "../useProdMode";
import ProdMode from "../ProdMode";
import { mockProd, unmockProd } from "../../../test/mock/hook/mockUseProdMode";

// This function should fail if executed in production mode.
const shouldFailInProd = () => {
  failInProd("Test Error");
  return "SUCCESS";
};

it("Fail When ProdMode Enabled", async () => {
  mockProd();

  render(<ProdMode />);
  expect(shouldFailInProd).toThrow(Error);
  expect(shouldFailInProd).toThrow("Test Error");

  unmockProd();
});

it("Succeed When ProdMode Not Enabled", async () => {
  expect(shouldFailInProd()).toBe("SUCCESS");
});
