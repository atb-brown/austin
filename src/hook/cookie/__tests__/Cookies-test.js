import { Cookies } from "../Cookies";

it("forEachCookie processes every cookie", () => {
  const myArray = [];
  const addToMyArray = (s) => myArray.push(s);

  for (const cookie of Object.values(Cookies)) {
    addToMyArray(cookie);
  }

  expect(myArray).toEqual(Object.values(Cookies));
});
