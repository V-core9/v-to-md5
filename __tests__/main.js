const v_to_md5 = require("../");

test("creates md5 hash from string 'demo_password_123456' ", async() => {
  expect(await v_to_md5("demo_password_123456")).toBe("b9a0dc00aff156a2a5e915ba00a590ba");
});

test("creates md5 hash from string '' ", async() => {
  expect(await v_to_md5()).toBe(false);
});
