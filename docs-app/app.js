document.addEventListener("DOMContentLoaded", function(event) {
  battrComponents.init();
});

battrComponents.controller('AppController', function (model) {
  model.$assign('showit', false);
  var list = getList(100);
  model.$assign('list', list);

  setTimeout(function () {
    model.$assign('showit', true);
  }, 1000);
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
