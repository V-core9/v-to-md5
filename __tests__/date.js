const v_to_md5 = require("../");

test("01. timeNow  variable from date.now() ", async () => {
  var timeNow = Date.now();
  expect(v_to_md5(timeNow)).toBe(v_to_md5(timeNow));
});

test("02. generate new object date ", async () => {
  expect(v_to_md5(new Date())).toBe(false);
});
