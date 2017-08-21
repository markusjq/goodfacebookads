

app.controller('mainController', ['$scope', '$http', '$sce', '$routeParams', '$route', function($scope, $http){ 

	 // FETCHES AD CARD DATA
	    $http.get('storage/ads.json').success(function(data) {
        $scope.cards = data;
    	});

	$scope.getNumber = function(num) { // creates array to loop card ratings from 
    return new Array(num);   
	}


$scope.$on('$routeChangeSuccess', function() {
    setTimeout(FB.XFBML.parse, 500) // <-- alert from the question
});


	var searchCards = '';  // stores filter input

	function reloadAd(){
		FB.XFBML.parse();
	}

}]);

