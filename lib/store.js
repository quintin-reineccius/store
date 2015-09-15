//creating a class that holds functions for store
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = (function () {
  //constructor holds a empty object

  function Store() {
    _classCallCheck(this, Store);

    this.store = {};
  }

  //add gets a object pass thought it and pushes the object to this.store object

  _createClass(Store, [{
    key: "add",
    value: function add(object) {
      for (var key in object) {
        this.store[key] = object[key];
      }
      this.render();
    }

    //remove can take a string or array and remove the keys from this.store
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
      this.render();
    }

    //render is taking data-store that could be anywhere on the html page and take the data key give to it and push the value to html
  }, {
    key: "render",
    value: function render() {
      var nodes = document.querySelectorAll("[data-store]");
      for (var i = 0; i < nodes.length; i++) {
        var key = nodes[i].getAttribute("data-store");
        nodes[i].innerHTML = this.store[key] || '';
      }
    }

    //working on localStorage
  }, {
    key: "storage",
    value: function storage(object) {
      for (var key in object) {
        localStorage.setItem = object;
      }
    }
  }]);

  return Store;
})();