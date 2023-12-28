let prodMode: boolean = false;

/**
 * This hook will allow components to access information from the guest book.
 *
 * @return {void}
 */
const useProdMode: () => void = (): void => {
  prodMode = true;
};
/**
 * This function can be used to make a particular process "fail" if invoked in
 * production. This is useful if there is any functionality that has been
 * written specifically for testing but should not be allowed to be used when
 * in the "production" build/execution of the site.
 *
 * @param {string} processDescription A description of the process that will
 *                  fail if invoked in prod.
 */
export function failInProd(processDescription: string): void {
  if (new ProdChecker().isProdMode()) {
    throw Error(`You cannot ${processDescription} in prod mode.`);
  }
}

/**
 * A class that wraps around our implementation that determines whether or not
 * the app is running in production mode. This is handled in a class method
 * so that we can mock this for testing.
 */
export class ProdChecker {
  /**
   * Determine if the application is running in production mode.
   *
   * @return {boolean}
   */
  isProdMode(): boolean {
    return prodMode;
  }
}

export default useProdMode;
