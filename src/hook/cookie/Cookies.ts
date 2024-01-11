export enum Cookies {
  Remembered = "remembered",
  Count = "count",
}

/**
 * Process something using each cookie value.
 *
 * @param {function(string):void} doThis The function that will be processed on
 *  each cookie.
 */
export function forEach(doThis: (cookie: string) => void): void {
  for (const cookie of Object.values(Cookies)) {
    doThis(cookie);
  }
}
