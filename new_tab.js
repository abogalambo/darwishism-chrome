var xhr = new XMLHttpRequest();
var offset = Math.floor(Math.random() * 100)
xhr.open('GET', 'https://api.tumblr.com/v2/blog/darwishism.tumblr.com/posts/photo?api_key=jsjlkvG5UxM1yFZoB1hzmgKsm5hAzuimqJGstkxlknvYyq3gfE&offset=' + offset);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
  if (xhr.status === 200) {
    var images = JSON.parse(xhr.responseText).response.posts.map(function(post){
      return post.photos[0].original_size.url
    });
    var imageIndex = Math.floor(Math.random() * images.length)
    document.getElementById("darwishism-post").src = images[imageIndex];
  }
};
xhr.send();
