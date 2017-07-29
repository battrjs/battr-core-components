import { component, util } from '@battr/battr-core';

component.define({
  selector: 'form',
  model: false,
  controller: controller
});

function controller(element, model) {
  var vm = this;
  vm.name = getName(element, 'form');
  vm.inputs = {};
  vm.addInput = addInput;
  model[name] = Object.freeze({
    element: element,
    name: vm.name,
    inputs: vm.inputs
  });

  element.addEventListener('submit', function (e) {
    e.preventDefault();
    // on submit
  });

  function addInput(inputEl) {
    var name = getName(inputEl, 'input');
    vm.inputs[name] = inputEl;
  }

  // get name
  // if one does not exist then create one with a uid
  function getName(el, prefix) {
    var name = el.getAttribute('name');
    if (!name) {
      name = prefix+'_'+util.uid();
      el.setAttribute('name', name);
    }
    return name;
  }
}
