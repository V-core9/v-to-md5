const v_to_md5 = require("../");
var faker = require('faker');

var fakerTypes = Object.keys(faker);
fakerTypes.forEach(function (type) {
  var fakerInner = Object.keys(faker[type]);
  fakerInner.forEach(function (inner) {
    if (typeof faker[type][inner] === 'function') {

      //? Create data variable and try to get some data into it.
      var data = null;
      try {
        data = faker[type][inner]();
      } catch (e) {
        //console.log(e);
      }

      //! Run test if data gets created
      if (data !== null) {
        test(String(data), async () => {
          var hashVal = await v_to_md5(data);
          //? Check if hash is not false [that means it failed]
          expect(hashVal !== false).toBe(true);
        });
      }

    }
  });
});
