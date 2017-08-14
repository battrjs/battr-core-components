import { component, compileExpression, doNotParse, util } from '@battr/battr-core';

component.define({
  selector: '[click]',
  model: false,
  compile: compile,
  postBind: postBind
});

function compile(element) {
  doNotParse(element.getAttributeNode('click'));
}

function postBind(element, model) {
  var clickExpression = compileExpression(element.getAttribute('click'));
  element.addEventListener('click', function (event) {
    var context = { $event: event };
    clickExpression(util.extend(context, model));
  });
}
