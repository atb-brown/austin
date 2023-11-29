type Provider = () => unknown;

/**
 * This class provides a simple method of dependency injection.
 *
 * https://stackoverflow.com/questions/130794/what-is-dependency-injection
 *
 * We want to use dependency injection so that we can write unit tests that do not
 * rely (depend) on implementations that make testing difficult or unreliable.
 */
export default abstract class ProviderRegistry {
  private static readonly registry: Map<ProviderKey, Provider> = new Map();

  /**
   * Register a provider; this will override the real implementation of services that use this class the check for registered providers.
   *
   * This function should NOT be used/called in any deployed code; this should only be used for testing.
   *
   * TODO: Create an eslint rule to ensure this is not called in deployed code. https://eslint.org/docs/latest/extend/custom-rule-tutorial
   *
   * @param {ProviderKey} providerKey The unique key of the provider that is being registered/injected.
   * @param {Provider} providerImpl The actual implementation that is to be injected.
   */
  public static register(
    providerKey: ProviderKey,
    providerImpl: Provider
  ): void {
    ProviderRegistry.registry.set(providerKey, providerImpl);
  }

  /**
   * Get the registered provider. If no provider has been registered, the real implementation will be used.
   *
   * @param {ProviderKey} providerKey The unique key of the provider that is being registered/injected.
   * @param {Provider} realProvider The real implementation that will be used if an alternative provider has not been registered.
   *
   * @return {Provider}
   */
  public static get<Provider>(
    providerKey: ProviderKey,
    realProvider: Provider
  ): Provider {
    return (
      ProviderRegistry.registry.has(providerKey)
        ? ProviderRegistry.registry.get(providerKey)
        : realProvider
    ) as Provider;
  }
}

/**
 * All of the possible implementations that might need alternative provider implementations
 * for testing.
 */
export enum ProviderKey {
  /** A react hook for retrieving guest book info. Normally relies
   * on an HTTP call, which is a dependency we do not want in our testing.
   */
  useGuestBookInfo,
}
