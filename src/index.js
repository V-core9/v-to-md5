var crypto = require("crypto");

const v_to_md5 = (value = null) => {
  try {
    if (typeof value === "number") value = String(value);
    return crypto.createHash("md5").update(value).digest("hex");
  } catch (error) {
    return false;
  }
};

module.exports = v_to_md5;
