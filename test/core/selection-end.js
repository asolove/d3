require("../env");

var vows = require("vows"),
    assert = require("assert");

var suite = vows.describe("d3.end");

suite.addBatch({
  "end": {
    topic: function() {
      this.a = d3.selectAll("body").data([1]);
      this.b = this.a.enter();
      this.c = this.b.transition();
    },
    "pops transition selection": function() {
      assert.equal(this.b, this.c.end());
    },
    "pops enter selection": function() {
      assert.equal(this.a, this.b.end());
    }
  }
});

suite.export(module);
