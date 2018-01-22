var xhr = new XMLHttpRequest();
var offset = Math.floor(Math.random() * 200)
xhr.open('GET', 'https://api.tumblr.com/v2/blog/darwishism.tumblr.com/posts/photo?api_key=jsjlkvG5UxM1yFZoB1hzmgKsm5hAzuimqJGstkxlknvYyq3gfE&limit=1&offset=' + offset);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
  if (xhr.status === 200) {
    var post = JSON.parse(xhr.responseText).response.posts[0]
    document.getElementById("darwishism-post").src = post.photos[0].original_size.url;
    document.getElementById("translation-box").innerHTML = post.caption;
    document.getElementById("avatar").style = {display: ''};
  }
};
xhr.send();
