var crypto = require("crypto");
const { notEmpty } = require("v_is_empty_value");

const v_to_md5 = async (value = null) => {
  return (await notEmpty(value)) ? crypto.createHash("md5").update(String(value)).digest("hex") : false;
};

module.exports = v_to_md5;
