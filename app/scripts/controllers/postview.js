'use strict';

app.controller('PostViewCtrl', function ($scope, $routeParams, Post, Auth) {
  $scope.post = Post.get($routeParams.postId);
  $scope.user = Auth.user;
  $scope.signedIn = Auth.signedIn;

});