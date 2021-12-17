const v_to_md5 = require("../");

test("123456789", async () => {
  expect(await v_to_md5(123456789)).toBe("25f9e794323b453885f5181f1b624d0b");
});

test("256755 ", async () => {
  expect(await v_to_md5(256755)).toBe("f3b152d757dbfb76569e4fda99c8728a");
});

test("8541236987745 ", async () => {
  expect(await v_to_md5(8541236987745)).toBe("bea9c9cee37953e529a71f65fcf75c3d");
});
