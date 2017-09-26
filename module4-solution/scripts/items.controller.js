(function(){
  angular.module('data')
  .controller('ItemsController', ItemsController );

ItemsController.$inject = ['$scope','items'];
 function ItemsController($scope,items){
   var itemCtrl = this;
   console.log("Items received",items)
   itemCtrl.itemList = items.menu_items;


 }
})();
