var shoppingApp = angular.module('ShoppingListCheckOff',[]);
shoppingApp.controller('ToBuyController',ToBuyController);
ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
function ToBuyController($scope,ShoppingListCheckOffService){

  $scope.ctrl1.toBuyItems = ShoppingListCheckOffService.toBuyItems;
  $scope.ctrl1.buyItem = function(item,index){
    ShoppingListCheckOffService.addToBoughtItems(item,index)

  }


}

shoppingApp.controller('AlreadyBoughtController',AlreadyBoughtController);
AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService'];
function AlreadyBoughtController($scope,ShoppingListCheckOffService){
  $scope.ctrl2.boughtItems = ShoppingListCheckOffService.boughtItems;


}


shoppingApp.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

function ShoppingListCheckOffService(){
  this.toBuyItems = [
    { name: "cookies", quantity: 10 },
    { name: "perfume", quantity: 1 },
    { name: "burgers", quantity: 2 },
    { name: "cake", quantity: 1 },
    { name: "pens", quantity: 2 }
  ]
  this.boughtItems = []

  this.addToBoughtItems = function(item,index){
    var boughtItem = {}
    this.boughtItems.push(item);
    this.toBuyItems.splice(index,1);
    return boughtItem;

  }

}
