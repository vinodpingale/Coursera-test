(function(){

var lunchApp = angular.module("lunchApp",[]);

lunchApp.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
 $scope.lunchItems = "";

  $scope.checkLunchItemCount = function(){

    if($scope.lunchItems!=""){

        var totalItems = $scope.lunchItems.split(',');

        if(totalItems.length <= 3){
          $scope.message = "Enjoy!";
        }else{
          $scope.message ="Too Much!"

        }

    }else{
      $scope.message = "Please enter data first"
    }


  }


}



})();
