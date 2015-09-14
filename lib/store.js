"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = (function () {
  function Store() {
    _classCallCheck(this, Store);

    this.store = {};
  }

  _createClass(Store, [{
    key: "add",
    value: function add(object) {
      for (var key in object) {
        this.store[key] = object[key];
      }
      this.rerender();
    }
  }, {
    key: "remove",
    value: function remove(data) {
      if (typeof data == 'string') {
        delete this.store[data];
      } else {
        for (var i = 0; i < data.length; i++) {
          var key = data[i];
          delete this.store[key];
        }
      }
      this.rerender();
    }
  }, {
    key: "rerender",
    value: function rerender() {
      var nodes = document.querySelectorAll("[data-store]");
      for (var i = 0; i < nodes.length; i++) {
        var key = nodes[i].getAttribute("data-store");
        nodes[i].innerHTML = this.store[key] || '';
      }
    }
  }]);

  return Store;
})();