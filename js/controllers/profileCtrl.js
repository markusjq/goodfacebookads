angular
    .module('mainApp')
    .controller('ProfileCtrl', ['$scope', '$http', '$sce', '$routeParams', ProfileCtrl]);
// FETCHES AD CARD DATA + stores each card's custom id as $routeParams.id
function ProfileCtrl($scope, $http, $sce, $routeParams) {
    $http.get('storage/ads.json').success(function(data) {
    	 $scope.detailFrame = $sce.trustAsResourceUrl("https://www.facebook.com/permalink.php?story_fbid=1646144282086111&amp;id=838768626157018");
         $scope.profile = data.find(function(ele){
    		return ele.id == $routeParams.id
 		 });
    });
}