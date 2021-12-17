const v_to_md5 = require("../");

test("01. timeNow  variable from date.now() ", async () => {
  var timeNow = Date.now();
  expect(await v_to_md5(timeNow)).toBe(await v_to_md5(timeNow));
});

test("02. generate new object date ", async () => {
  expect(await v_to_md5(new Date())).toBe(false);
});
