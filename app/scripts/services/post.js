'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://wafflepress.firebaseIO.com/posts/:id.json');
});