app.controller('NavCtrl', function ($scope, $location, Post, Auth) {
  $scope.post = { cotent: '', title: ''};
  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;
  $scope.user = Auth.user;
  
  $scope.submitPost = function() {
    $scope.post.creator = $scope.user.profile.username;
    $scope.post.creatorUID = $scope.user.uid;
    Post.create($scope.post).then(function(ref) {
      //redirect to post page after submission
      $location.path('/posts/' + ref.name());
      //reset to empty
      $scope.post = { content: '', 'title': '' };
    });
  };

});