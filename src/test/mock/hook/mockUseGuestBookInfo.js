import ProviderRegistry, {
  ProviderKey,
} from "../../../hook/provide/ProviderRegistry";

/**
 * Create a mocked implementation of a "GuestInfo" provider.
 *
 * @param {number} numOfGuestInfoEntries The number of "GuestInfo" objects that will be returned by the provider.
 * @return {Promise<GuestBook>}
 */
function useGuestBookInfoMockProvider(numOfGuestInfoEntries = 1) {
  const guestBook = { guests: [] };
  for (let entryIndex = 0; entryIndex < numOfGuestInfoEntries; entryIndex++) {
    if (entryIndex === 0) {
      guestBook.guests.push({
        name: "austin",
        message: "info loaded",
        visitDate: "2023",
        website: "www.example.com",
      });
    } else {
      const ref = entryIndex + 1;
      guestBook.guests.push({
        name: `person${ref}`,
        message: `my message ${ref}`,
        visitDate: `2023-01-0${ref}`,
        website: `website${ref}.com`,
      });
    }
  }
  return () =>
    new Promise((resolve) => {
      resolve(guestBook);
    });
}

/**
 * Register/inject a provider that will be used in place of implementations
 * of units that are aware of registered providers.
 *
 * @param {number} numOfGuestInfoEntries The number of "GuestInfo" objects that will be returned by the provider.
 */
export function registerMockProvider(numOfGuestInfoEntries = 1) {
  ProviderRegistry.register(
    ProviderKey.useGuestBookInfo,
    useGuestBookInfoMockProvider(numOfGuestInfoEntries),
  );
}
