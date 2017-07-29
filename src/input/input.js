import { component, util } from '@battr/battr-core';
import { INPUT_TYPE_VALIDATION } from './constants';

component.define({
  selector: 'input',
  model: false,
  postBind: postBind
});

function postBind(element, find) {
  var type = element.getAttribute('type');
  var typeValidation = INPUT_TYPE_VALIDATION[type];
  find.parent('form', 0, function (ctrl) {
    ctrl.addInput(element);
  });
  element.addEventListener('change', validate);
  element.addEventListener('keyup', validate);
  element.addEventListener('paste', validate);

  function validate(e) {
    if (typeValidation && !typeValidation.regex.test(element.value)) {
      element.setCustomValidity(typeValidation.message);
    } else {
      element.setCustomValidity('');
    }
  }
}
