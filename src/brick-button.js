(function () {

  var BrickButtonElementPrototype = Object.create(HTMLElement.prototype);

  // Lifecycle methods

  BrickButtonElementPrototype.createdCallback = function () {

  };

  BrickButtonElementPrototype.attachedCallback = function () {

  };

  BrickButtonElementPrototype.detachedCallback = function () {

  };

  BrickButtonElementPrototype.attributeChangedCallback = function (attr, oldVal, newVal) {
    if (attr in attrs) {
      attrs[attr].call(this, oldVal, newVal);
    }
  };

  // Attribute handlers

  var attrs = {
    'attr': function (oldVal, newVal) {

    }
  };

  // Custom methods

  BrickButtonElementPrototype.foo = function () {

  };

  // Property handlers

  Object.defineProperties(BrickButtonElementPrototype, {
    'prop': {
      get : function () {

      },
      set : function (newVal) {

      }
    }
  });

  // Register the element

  window.BrickButtonElement = document.registerElement('brick-button', {
    prototype: BrickButtonElementPrototype
  });

})();
