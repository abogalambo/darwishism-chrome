var xhr = new XMLHttpRequest();
var offset = Math.floor(Math.random() * 100)
xhr.open('GET', 'https://api.tumblr.com/v2/blog/darwishism.tumblr.com/posts/photo?api_key=jsjlkvG5UxM1yFZoB1hzmgKsm5hAzuimqJGstkxlknvYyq3gfE&offset=' + offset);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
  if (xhr.status === 200) {
    var posts = JSON.parse(xhr.responseText).response.posts
    var postIndex = Math.floor(Math.random() * posts.length)
    var post = posts[postIndex]
    document.getElementById("darwishism-post").src = post.photos[0].original_size.url;
    document.getElementById("translation-box").innerHTML = post.summary;
  }
};
xhr.send();
