var crypto = require("crypto");

const v_to_md5 = async (value) => {
  return new Promise((resolve, reject) => {
    try{
      resolve((value !== undefined) ? crypto.createHash("md5").update(String(value)).digest("hex") : false);
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = v_to_md5;
