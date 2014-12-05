'use strict';

app.controller('PostsCtrl', function($scope, Post) {
  $scope.posts = Post.all;

  $scope.post = { content: '', 'title': ''
  };

  $scope.submitPost = function() {
    Post.create($scope.post).then(function() {
      //reset to empty
      $scope.post = { content: '', 'title': ''
      };
    });
  };

  $scope.deletePost = function(post) {
    Post.delete(post);
  };

});
