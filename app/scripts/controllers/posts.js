app.controller('PostsCtrl', function($scope, Post) {
  $scope.posts = Post.get();
  
  $scope.deletePost = function(postId) {
    Post.delete({ id: postId }, function() {
      delete $scope.posts[postId];
    });
  };

  $scope.submitPost = function() {
    //$scope.posts.push($scope.post);
    Post.save($scope.post, function(ref) {
      $scope.posts[ref.name] = $scope.post;
      $scope.post = {
        url: 'http://',
        title: ''
      };
    });
  };
});
