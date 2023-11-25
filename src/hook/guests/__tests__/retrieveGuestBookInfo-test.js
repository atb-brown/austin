/**
 * @jest-environment node
 */
import retrieveGuestBookInfo from "../retrieveGuestBookInfo";

it("Get Guest Book", async () => {
  const response = await retrieveGuestBookInfo();

  expect(response).toBeDefined();
  expect(response.guests.length).toBeGreaterThan(0);

  const austin = response.guests[0];
  expect(austin.name).toBe("Austin Brown");
  expect(austin.message).toBe(
    "You can leave a message if you want. You can also leave your website for self-promotion, if you'd like!"
  );
  expect(austin.visitDate).toBe("2023-11-15");
  expect(austin.website).toBe("https://atb-brown.github.io/austin/");
});
