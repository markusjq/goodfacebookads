

app.controller('mainController', ['$scope', '$http', function($scope, $http){ 

	 // FETCHES AD CARD DATA
	    $http.get('storage/ads.json').success(function(data) {
        $scope.cards = data;
    	});

	$scope.getNumber = function(num) { // creates array to loop card ratings from 
    return new Array(num);   
	}

	var searchCards = '';  // stores filter input

}]);

