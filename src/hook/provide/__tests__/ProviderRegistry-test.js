import { mockProd, unmockProd } from "../../../test/mock/hook/mockUseProdMode";
import { get, register } from "../ProviderRegistry";

const mocked = "mocked";
const notMocked = "not mocked";
const fakeProviderKey = "useFakeProviderKey";
const realProviderImpl = () => notMocked;

it("Alternative Provider Not Registered", () => {
  const provider = get(fakeProviderKey, realProviderImpl);
  expect(provider()).toBe(notMocked);
});

it("Alternative Provider Is Registered", () => {
  // Normally, we need to use the TypeScript enum as a key, but JavaScript doesn't care.
  register(fakeProviderKey, () => mocked);
  const provider = get(fakeProviderKey, realProviderImpl);
  expect(provider()).toBe(mocked);
});

it("Fails in ProdMode", () => {
  mockProd();

  const failingFunctionCall = () => register(fakeProviderKey, () => mocked);
  expect(failingFunctionCall).toThrow(Error);
  expect(failingFunctionCall).toThrow(
    "You cannot inject a provider implementation in prod mode.",
  );

  unmockProd();
});
