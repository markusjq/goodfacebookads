angular
    .module('mainApp')
    .controller('ProfileCtrl', ['$scope', '$http','$routeParams', ProfileCtrl]);

function ProfileCtrl($scope, $http, $routeParams) {
    $http.get('storage/ad.json').success(function(data) {
        $scope.profile = data[$routeParams.id];
    });
}