angular
    .module('mainApp')
    .controller('ProfileCtrl', ['$scope', '$http','$routeParams',  ProfileCtrl]);

// FETCHES AD CARD DATA + stores each card's custom id as $routeParams.id
function ProfileCtrl($scope, $http, $routeParams) {
    $http.get('storage/ads.json').success(function(data) {
         $scope.profile = data.find(function(ele){
    		return ele.id == $routeParams.id
 		 });
    });

// Moves user back to index page when triggered
    $scope.goBack = function() {
  		window.history.back();
	};
}


