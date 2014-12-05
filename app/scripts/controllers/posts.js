'use strict';

app.controller('PostsCtrl', function($scope, $location, Post, Auth) {
  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;
  $scope.user = Auth.user;
  $scope.posts = Post.all;

  $scope.post = { content: '', 'title': '' };

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

  $scope.deletePost = function(post) {
    Post.delete(post);
  };

});
