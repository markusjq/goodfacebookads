

app.controller('mainController', ['$scope', '$http', '$sce', '$routeParams', '$route', function($scope, $http){ 

	 // FETCHES AD CARD DATA
    $http.get('storage/ads.json').success(function(data) {
        $scope.cards = data;
    });

    // creates array to loop card ratings from 
	$scope.getNumber = function(num) { 
    	return new Array(num);   
	}

	// reloads facebook iframe to display ads
	$scope.$on('$routeChangeSuccess', function() {
    	setTimeout(FB.XFBML.parse, 100) 
	});


	var searchCards = '';  // stores filter input

}]);

