const v_to_md5 = require("../");

test("demo_password_123456", async () => {
  expect(await v_to_md5("demo_password_123456")).toBe("b9a0dc00aff156a2a5e915ba00a590ba");
});

test("123456789", async () => {
  expect(await v_to_md5("123456789")).toBe("25f9e794323b453885f5181f1b624d0b");
});

test("Batman Tanana", async () => {
  expect(await v_to_md5("Batman Tanana")).toBe("38d39a91c19e57a6b850af0939aebf67");
});
