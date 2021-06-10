const assert = require("assert");

// beforeEach(function () {
//   return db.clear().then(function () {
//     return db.save([tobi, loki, jane]);
//   });
// });
describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
    it("double done", function (done) {
      setImmediate(done);
      setImmediate(done);
    });
  });
});
describe("User", function () {
  describe("#save()", function () {
    it("should save without error", function (done) {
      var user = new User("Luna");
      user.save(function (err) {
        if (err) done(err);
      });
    });
  });
});
describe("#find()", function () {
  it("responds with matching records", function () {
    return db.find({ type: "User" }).should.eventually.have.length(3);
  });
});
it("should complete this test", function (done) {
  return new Promise(function (resolve) {
    assert.ok(true);
    resolve();
  }).then(done);
});
