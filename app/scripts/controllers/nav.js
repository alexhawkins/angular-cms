app.controller('NavCtrl', function ($scope, $location, Post, Auth) {
  $scope.post = { cotent: '', title: ''};
  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;
  
  $scope.submitPost = function() {
    Post.create($scope.post).then(function(ref) {
      //redirect to post page after submission
      $location.path('/posts/' + ref.name());
      //reset to empty
      $scope.post = { content: '', 'title': '' };
    });
  };

});