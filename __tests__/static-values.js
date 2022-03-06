const v_to_md5 = require("../");

//! GENERAL 
test("creates md5 hash from string 'demo_password_123456' ", async () => {
  var data = await v_to_md5("demo_password_123456");
  expect(data).toBe("b9a0dc00aff156a2a5e915ba00a590ba");
});

test("creates md5 hash from string '' ", async () => {
  var data = await v_to_md5('');
  expect(data).toBe(false);
});

test("creates md5 hash from empty ", async () => {
  var data = await v_to_md5();
  expect(data).toBe(false);
});


//! NUMBERS
test("123456789", async () => {
  var data = await v_to_md5(123456789);
  expect(data).toBe("25f9e794323b453885f5181f1b624d0b");
});

test("256755 ", async () => {
  var data = await v_to_md5(256755);
  expect(data).toBe("f3b152d757dbfb76569e4fda99c8728a");
});

test("8541236987745 ", async () => {
  var data = await v_to_md5(8541236987745);
  expect(data).toBe("bea9c9cee37953e529a71f65fcf75c3d");
});

test("256.755 ", async () => {
  var data = await v_to_md5(256.755);
  expect(data).toBe("62c592011fdf72cdf7b17ebf549ad516");
});

test(".8541236987745 ", async () => {
  var data = await v_to_md5(.8541236987745);
  expect(data).toBe("d12cbf657add22ba3def590222afc434");
});


//! STRINGS
test("demo_password_123456", async () => {
  var data = await v_to_md5("demo_password_123456");
  expect(data).toBe("b9a0dc00aff156a2a5e915ba00a590ba");
});

test("123456789", async () => {
  var data = await v_to_md5("123456789");
  expect(data).toBe("25f9e794323b453885f5181f1b624d0b");
});

test("Batman Tanana", async () => {
  var data = await v_to_md5("Batman Tanana");
  expect(data).toBe("38d39a91c19e57a6b850af0939aebf67");
});


//! DATE
test("timeNow  variable from date.now() ", async () => {
  var timeNow = Date.now();
  expect(await v_to_md5(timeNow)).toBe(await v_to_md5(timeNow));
});

test("generate new object date ", async () => {
  var date = new Date();
  expect(await v_to_md5(date) !== false).toBe(true);
});


//! BOOL
test("Send boolean [true]", async () => {
  var data = await v_to_md5(true);
  expect(data).toBe("b326b5062b2f0e69046810717534cb09");
});

test("Send boolean [false]", async () => {
  var data = await v_to_md5(false);
  expect(data).toBe("68934a3e9455fa72420237eb05902327");
});


//! FUNCTION
test("Send FUNCTION [true]", async () => {
  var data = await v_to_md5(() => { console.log("yea"); });
  expect(data).toBe("1c800f8319004df7df0dae63b9466bbf");
});
