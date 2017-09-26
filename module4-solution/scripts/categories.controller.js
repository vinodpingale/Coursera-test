(function(){
  angular.module('data')
  .controller('CategoriesController', CategoriesController );

CategoriesController.$inject = ['$scope','items'];
 function CategoriesController($scope,items){
   var categoryCtrl = this;
   console.log("Categories received",items)
   categoryCtrl.categoryList = items;


 }
})();
