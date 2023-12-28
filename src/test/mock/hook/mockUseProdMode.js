import { ProdChecker } from "../../../hook/prod/useProdMode";
import { jest } from "@jest/globals";

const mockIsProdMode = jest.spyOn(ProdChecker.prototype, "isProdMode");

/**
 * Enable mocked production mode.
 */
export function mockProd() {
  mockIsProdMode.mockImplementation(() => {
    return true;
  });
}

/**
 * Disable mocked production mode.
 */
export function unmockProd() {
  mockIsProdMode.mockReset();
}
