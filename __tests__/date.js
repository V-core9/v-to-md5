const v_to_md5 = require("../");


var timeNow = Date.now();

test("01. timeNow  variable from date.now() ", () => {
  expect(v_to_md5(timeNow)).toBe(v_to_md5(timeNow));
});

test("02. generate new object date ", () => {
  var time_now = new Date();
  expect(v_to_md5(time_now)).toBe(false);
});
