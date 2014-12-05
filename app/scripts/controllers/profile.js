'use strict';

app.controller('ProfileCtrl', function ($scope, $routeParams, Profile, Auth, Post) {
  var uid = $routeParams.userId;
  $scope.signedIn = Auth.signedIn;
  $scope.logout = Auth.logout;
  $scope.user = Auth.user;
  $scope.deletePost = Post.deletePost;

  $scope.profile = Profile.get(uid);
  Profile.getPosts(uid).then(function(posts) {
    $scope.posts = posts;
  });
});