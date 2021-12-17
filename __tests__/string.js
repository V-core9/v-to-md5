const v_to_md5 = require("../");

test("creates md5 hash from string 'demo_password_123456' ", () => {
  expect(v_to_md5("demo_password_123456")).toBe("b9a0dc00aff156a2a5e915ba00a590ba");
});

test("creates md5 hash from number '123456789' ", () => {
  expect(v_to_md5("123456789")).toBe("25f9e794323b453885f5181f1b624d0b");
});
