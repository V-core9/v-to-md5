const v_to_md5 = require("../");

test("Send boolean [true]", () => {
  expect(v_to_md5(true)).toBe(false);
});

test("Send boolean [false]", () => {
  expect(v_to_md5(false)).toBe(false);
});
