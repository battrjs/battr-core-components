document.addEventListener("DOMContentLoaded", function(event) {
  battrCoreComponents.init();
});

battrCoreComponents.controller('AppController', function (model) {
  model.name = 'Ben Rubin';
  model.showit = false;
  var list = getList(10);
  model.list = list;

  setTimeout(function () {
    model.showit = true;
  }, 1000);


  this.clickTest = function (e) {
    console.log('hello', e)
  };
});



function getList(length) {
  length = length  || 100;
  var arr = [];
  var i = 0;
  while (i < length) {
    arr.push({
      id: i,
      name: i+'_name'
    });
    i++;
  }
  return arr;
}



// battrCoreComponents.controller('AppController', Controller);
// export function Controller() {
//
// };
