import { component, compileExpression, doNotParse } from '@battr/battr-core';

component.define({
  selector: '[disabled]',
  model: false,
  compile: compile,
  controller: controller
});

function compile(element) {
  doNotParse(element.getAttributeNode('disabled'));
}

function controller(element, model) {
  var expression = compileExpression(element.getAttribute('disabled'));
  model.$observe(function () {
    if (expression(model).toBoolean()) { add(); }
    else { remove(); }
  });

  function remove() {
    element.removeAttribute('disabled');
  }

  function add() {
    element.setAttribute('disabled', 'disabled');
  }
}
