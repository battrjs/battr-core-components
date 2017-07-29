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

function postBind(element, ctrl) {
  if (!ctrl) { return; }
  var clickExpression = compileExpression(element.getAttribute('click'));
  element.addEventListener('click', function (event) {
    var context = { $event: event };
    clickExpression(util.extend(context, ctrl));
  });
}
