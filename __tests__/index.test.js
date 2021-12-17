const v_to_md5 = require("../index");

test("creates md5 hash from string 'demo_password_123456' ", () => {
  expect(v_to_md5("demo_password_123456")).toBe("b9a0dc00aff156a2a5e915ba00a590ba");
});

test("creates md5 hash from string 'demo_password_123456' ", () => {
  expect(v_to_md5()).toBe(false);
});

test("creates md5 hash from number 123456789 ", () => {
  console.log(v_to_md5(123456789));
  expect(v_to_md5(123456789)).toBe(false);
});
