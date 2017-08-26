angular.module('fbEmbed', []);

angular.module('fbEmbed').
  directive('fbHref', function(){
    // facebook ad embed data
    return {
      restrict: 'A',
      template: '{{ profile.adUrl }}',
      replace: true
    };
  });