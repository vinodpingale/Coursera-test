(function(){

  var webApp = angular.module("NarrowItDownApp",[])

  webApp.controller('NarrowItDownController',NarrowItDownController);
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){

    var ctrl = this;
    ctrl.found = [];
    ctrl.errorMsg = null;
    ctrl.getMatchedMenuItems = function(searchTerm){
        ctrl.errorMsg = null;
          ctrl.found = [];
       if(searchTerm && searchTerm!=''){
          MenuSearchService.getMatchedMenuItems(searchTerm).then(function(data){
                if(data.length > 0)
                ctrl.found = data;
                else{
                    ctrl.errorMsg = "Nothing found";
                }


          });
      }else{
          ctrl.errorMsg = "Nothing found";

      }

    }

    ctrl.onRemove = function(itemIndex){
      ctrl.found.splice(itemIndex,1);
    }




  }


  webApp.service('MenuSearchService',MenuSearchService);
  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    var service = this;
    service.getMatchedMenuItems = function(searchTerm){
     return $http({"url":'https://davids-restaurant.herokuapp.com/menu_items.json', method:"GET"}).then(function (result) {
   // process result and only keep items that match
         var foundItems = [];
         angular.forEach( result.data.menu_items,function(item){
            if(item.description.includes(searchTerm)){
                foundItems.push(item);

            }

         })

         // return processed items
         return foundItems;
      });

   }

  }
webApp.directive('foundItems',FoundItemsDirective);
 function FoundItemsDirective(){
   var ddo = {
     restrict:'EA',
      scope:{
        foundList:'<',
        onRemove:'&onRemove'
      },
      templateUrl :'found-items.html'


   }
   return ddo;
 }




})();
