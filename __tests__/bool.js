const v_to_md5 = require("../");

test("Send boolean [true]", async () => {
  expect(await v_to_md5(true)).toBe(false);
});

test("Send boolean [false]", async () => {
  expect(await v_to_md5(false)).toBe(false);
});
