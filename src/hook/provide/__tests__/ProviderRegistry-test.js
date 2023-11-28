import ProviderRegistry from "../ProviderRegistry";

const mocked = "mocked";
const notMocked = "not mocked";
const fakeProviderKey = "useFakeProviderKey";
const realProviderImpl = () => notMocked;

it("Alternative Provider Not Registered", () => {
  const provider = ProviderRegistry.get(fakeProviderKey, realProviderImpl);
  expect(provider()).toBe(notMocked);
});

it("Alternative Provider Is Registered", () => {
  // Normally, we need to use the TypeScript enum as a key, but JavaScript doesn't care.
  ProviderRegistry.register(fakeProviderKey, () => mocked);
  const provider = ProviderRegistry.get(fakeProviderKey, realProviderImpl);
  expect(provider()).toBe(mocked);
});
