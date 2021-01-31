
( function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

	$scope.message = "";
	$scope.items = "";

    $scope.splitString = function (string) {
    	var count =0;
	  	var array = string.split(',');

	  	if (array == ""){
	  		return count;
	  	}
	  	
	  	for(var i = 0; i< array.length; i++){
	  		if(array[1].trim()!==""){
	  			count++;
	  		}
	  	}
    	return count;
  	};

	$scope.displayMessage = function(){
	  	$scope.totalItems = $scope.splitString($scope.items);

	  	if ($scope.totalItems < 1){
	  		$scope.message= "Please enter data first!";

	  	}else if($scope.totalItems <=3){
	  		$scope.message= "enjoy!";

	  	}else{
	  		$scope.message= "Too much!";
	  	}
	};
}

})();
