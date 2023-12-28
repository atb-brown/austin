import { failInProd } from "../prod/useProdMode";

type Provider = () => unknown;

const registry: Map<ProviderKey, Provider> = new Map();

/**
 * Register a provider; this will override the real implementation of services
 *  that use this class the check for registered providers.
 *
 * This function should NOT be used/called in any deployed code; this should
 * only be used for testing.
 *
 * @param {ProviderKey} providerKey The unique key of the provider that is
 * being registered/injected.
 * @param {Provider} providerImpl The actual implementation that is to be
 * injected.
 */
export function register(
  providerKey: ProviderKey,
  providerImpl: Provider,
): void {
  failInProd("inject a provider implementation");
  registry.set(providerKey, providerImpl);
}

/**
 * Get the registered provider. If no provider has been registered, the real
 * implementation will be used.
 *
 * @param {ProviderKey} providerKey The unique key of the provider that is
 *  being registered/injected.
 * @param {Provider} realProvider The real implementation that will be used if
 * an alternative provider has not been registered.
 *
 * @return {Provider}
 */
export function get<Provider>(
  providerKey: ProviderKey,
  realProvider: Provider,
): Provider {
  return (
    registry.has(providerKey) ? registry.get(providerKey) : realProvider
  ) as Provider;
}
/**
 * All of the possible implementations that might need alternative provider
 *  implementations
 * for testing.
 */
export enum ProviderKey {
  /** A react hook for retrieving guest book info. Normally relies
   * on an HTTP call, which is a dependency we do not want in our testing.
   */
  useGuestBookInfo,
}
